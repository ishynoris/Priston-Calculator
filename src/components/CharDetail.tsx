import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import ICharacterStatus from '../interfaces/ICharacterStatus';
import IQuest from '../interfaces/IQuest';
import IStatusResult from '../interfaces/IStatusResult';
import Quests from './Quests';
import Skills from './Skills';
import Status from './Status';

interface ICharDetail {
    quests: IQuest[],
    onCalculateResult: (result: IStatusResult) => void,
};

class CharDetail extends React.Component<ICharDetail>{

    public state: { hasChar: boolean }
    private char: IChar | undefined;
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: ICharDetail) {
        super(props);
        this.state = { hasChar: false };
    }

    public setChar(newChar: IChar){
        this.char = newChar;
        if (!this.state.hasChar) {
            this.setState({ hasChar: true });
            return;
        }
        this.updateChar();
    }

    public render() {

        if (this.char === undefined) {
            return null;
        }
        return (
            <div>
                <Status
                    ref={ref => this.status = ref}
                    onStatusChanged={this.onStatusChanged} />
                <Skills ref={ref => this.skills = ref} />
                <Quests
                    ref={ref => this.quests = ref}
                    quests={this.props.quests}
                    onQuestsChanged={this.onQuestChanged} />
            </div>
        );
    }

    public componentDidMount() {
        this.updateChar();
    }

    public componentDidUpdate() {
        this.updateChar();
    }

    private updateChar() {

        const char = this.char;
        if(char === undefined){
            this.props.onCalculateResult(Script.defResult());
            return;
        }
        if (this.status !== null) {
            this.status.setStatus(char.stats);
        }

        if (this.skills !== null) {
            this.skills.setSkills(char.skills);
        }
    }

    private onStatusChanged = (charStats: ICharacterStatus) => {
        
        if (this.char !== undefined) {
            this.char.stats = charStats;
            const result = this.calculate(this.char);
            this.props.onCalculateResult(result);
        }
    }
    
    private onQuestChanged = (index: number, value: string): boolean => {
		let newStats = 0;
        if (this.char === undefined || this.status === null) {
            return false;
        }

        const level = this.char.stats.lvl;
		if (isNaN(level)) {
            alert("Verifique o campo 'Level'. Valor encontrado: '" + this.char.stats.lvl + "'.");
			return false;
        }

		const script = new Script;
		const questsDone = script.getQuestsAt(index);
		if (level < questsDone[index].level) {
			alert("Você ainda não possui level suficiente para realizar essa quest.");
			return false;
		}

		questsDone.forEach(q => {
			q.bonus.forEach(b => {
				if (b.cod === Script.codes.STS) {
					newStats += b.value;
				}
				if (b.cod === Script.codes.STSp) {
					const dif = level - q.level;
					newStats += dif * b.value + b.value;
				}
			})
        })
        this.status.addStats(level, newStats);
        return true;
    }
    
    private calculate = (char: IChar | undefined): IStatusResult => {
        
        if(char === undefined || char.formula === undefined){
            return Script.defResult();
        }

        const stats = char.stats;
        const AR = char.formula.AR;
        const MP = char.formula.MP;
        const RES = char.formula.RES;
        const DEF = char.formula.DEF;
        const ABS = char.formula.ABS;
        
        const def = Math.ceil((DEF.fLvl * stats.lvl) + (DEF.fTal * stats.tal) + (DEF.fAgi * stats.agi) + DEF.add);
        const values = {
            ABS: Math.ceil((stats.lvl / ABS.fLvl) + (stats.for / ABS.fFor) + (stats.tal / ABS.fTal) 
                    + (stats.agi / ABS.fAgi) + (def / 100) + ABS.add),
            AR: Math.ceil((stats.lvl * AR.fLvl) + (stats.tal * AR.fTal) + (stats.agi * AR.fAgi) + AR.add),
            DEF: def,
            MP: Math.ceil((MP.fLvl * stats.lvl) + (MP.fInt * stats.int) + MP.add),
            RES: Math.ceil((RES.fLvl * stats.lvl) + (RES.fFor * stats.for) + (RES.fTal * stats.tal) 
                    + (stats.int) + (RES.fVit * stats.vit) + RES.add),
        }
        return Script.defResult(values);
    }
}

export default CharDetail;