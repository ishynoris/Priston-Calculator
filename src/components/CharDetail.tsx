import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import IQuest from '../interfaces/IQuest';
import IStatusInput from '../interfaces/IStatusInput';
import IStatusResult from '../interfaces/IStatusResult';
import InputText from './InputText';
import Quests from './Quests';
import Skills from './Skills';
import Status from './Status';

interface ICharDetail {
    quests: IQuest[],
    onCalculateResult: (result: IStatusResult) => void,
};

class CharDetail extends React.Component<ICharDetail>{

    public state: { char?: IChar }
    
	private inputs: IStatusInput[];
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: ICharDetail) {
        super(props);
        this.inputs = [];
        this.state = { char: undefined };
    }

    public setChar(newChar?: IChar){
        this.setState({ char: newChar });
    }

    public render() {

        const char = this.state.char;
        if (char === undefined) {
            return null;
        }
        return (
            <div>
                <Status
                    ref={ref => this.status = ref}
                    onStatusUpdated={this.onStatusUpdated}
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

        const char = this.state.char;
        if (char !== undefined) {

            if (this.status !== null) {
                const status = char.asSkills(char.stats);
                this.status.setStatus(status);
            }

            if (this.skills !== null) {
                this.skills.setSkills(char.skills);
            }
        }
    }

    private onStatusUpdated = (inputs: IStatusInput[]) => {
        this.inputs = inputs;
        if(this.state.char !== undefined){
            this.addStats(this.state.char.stats.lvl);
        }
    }

    private onStatusChanged = (title: string, oldValue: number, newValue: number) => {
        const itens = Script.itens;
        if(title === itens.LVL.title){
            this.addStats(newValue);
        }

        const input = this.inputs.find(i => {
            return i.title === title;
        });

        const char = this.state.char;
        
        if (char !== undefined && input !== undefined && input.element !== null) {
            const value = input.element.asNumber();
            switch (title) {
                case itens.LVL.title: char.stats.lvl = value; break;
                case itens.FOR.title: char.stats.for = value; break;
                case itens.AGI.title: char.stats.agi = value; break;
                case itens.TAL.title: char.stats.tal = value; break;
                case itens.INT.title: char.stats.int = value; break;
                case itens.VIT.title: char.stats.vit = value; break;
            }
            
            const result = this.calculate(char);
            this.props.onCalculateResult(result);
        }
    }
    
    private onQuestChanged = (index: number, value: string): boolean => {
		let newStats = 0;
        const stsLevel = this.findStatus(Script.itens.LVL.title);
        
		if (stsLevel === null) {
			return false;
        }

        const level = stsLevel.asNumber();
		if (isNaN(level)) {
            alert("Verifique o campo 'Level'. Valor encontrado: '" + stsLevel.state.value + "'.");
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
        this.addStats(level, newStats);
        return true;
    }
    
    private calculate = (char: IChar | undefined): IStatusResult => {
        const result = Object.assign({}, Script.defResult);
        if(char === undefined || char.formula === undefined){
            return result;
        }

        const stats = char.stats;
        const AR = char.formula.AR;
        const MP = char.formula.MP;
        const RES = char.formula.RES;
        const DEF = char.formula.DEF;
        const ABS = char.formula.ABS;

        result.AR.value = Math.ceil((stats.lvl * AR.fLvl) + (stats.tal * AR.fTal) + (stats.agi * AR.fAgi) + AR.add);
        result.MP.value = Math.ceil((MP.fLvl * stats.lvl) + (MP.fInt * stats.int) + MP.add);
        result.RES.value = Math.ceil((RES.fLvl * stats.lvl) + (RES.fFor * stats.for) + (RES.fTal * stats.tal) 
                        + (stats.int) + (RES.fVit * stats.vit) + RES.add);
        result.DEF.value = Math.ceil((DEF.fLvl * stats.lvl) + (DEF.fTal * stats.tal) + (DEF.fAgi * stats.agi) + DEF.add);
        result.ABS.value = Math.ceil((stats.lvl / ABS.fLvl) + (stats.for / ABS.fFor) + (stats.tal / ABS.fTal) 
                        + (stats.agi / ABS.fAgi) + (result.DEF.value / 100) + ABS.add);
        return result;
    }
    
	private addStats = (level: number, addValue?: number) => {
        
        const totalStats = this.findStatus(Script.itens.STS.title);
        if (totalStats === null) {
			return;
        }
        
        let value = (level - 1) * 5;
        if(addValue !== undefined){
            value += addValue;
        }
		totalStats.setValue(value.toString());
    } 

	private findStatus = (title: string): InputText | null => {
		const sts = this.inputs.find(input => {
			return input.title === title;
		});
		return sts !== undefined ? sts.element : null;
    }
}

export default CharDetail;