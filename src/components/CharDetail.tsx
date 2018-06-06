import * as React from 'react';

import Script from '../assets/js/Script';
import IBonus from '../interfaces/IBonus';
import IChar from '../interfaces/IChar';
import ICharacterStatus from '../interfaces/ICharacterStatus';
import IQuest from '../interfaces/IQuest';
import IStatusInput from '../interfaces/IStatusInput';
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
    private bonus: IBonus[];
    private inputs: IStatusInput[];
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: ICharDetail) {
        super(props);
        this.bonus = [];
        this.inputs = [];
        this.state = { hasChar: false };
    }

    public setChar(newChar: IChar) {
        this.char = newChar;
        if (!this.state.hasChar) {
            this.setState({ hasChar: true });
            return;
        }
        this.updateChar();
    }

    public addInputValues(inputs: IStatusInput[]) {
        this.inputs = this.inputs.concat(inputs);
        console.log(this.inputs);
    }

    public itemChanged(title: string, newValue: number, oldValue: number) {
        const attrCod = new Script().getCodByAttr(title);
        if (attrCod === undefined) {
            return;
        }

        const contains = this.bonus.find(b => {
            return b.cod === attrCod;
        })
        if (contains === undefined) {
            this.bonus.push({ cod: attrCod, value: newValue });
        } else {
            const index = this.bonus.indexOf(contains);
            const val = newValue > oldValue ? (newValue - oldValue) : (oldValue - newValue) * -1;
            this.bonus[index].value += val;
        }
        const results = this.calculate(this.char);
        if (this.props.onCalculateResult !== undefined) {
            this.props.onCalculateResult(results);
        }
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
                <Skills
                    ref={ref => this.skills = ref}
                    onSkillChanged={this.onSkillChanged} />
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
        if (char === undefined) {
            this.props.onCalculateResult(Script.defResult());
            return;
        }
        if (this.status !== null) {
            this.status.setStatus(char.stats);
        }

        if (this.skills !== null) {
            this.skills.setSkills(char.skills);
        }

        if (this.quests !== null) {
            this.quests.setQuest(0);
        }
    }

    private onStatusChanged = (charStats: ICharacterStatus) => {

        if (this.char !== undefined) {
            this.char.stats = charStats;
            const result = this.calculate(this.char);
            this.props.onCalculateResult(result);
        }
    }

    private onSkillChanged = (cod: number, value: number, percent: boolean): boolean => {
        const names = Script.itensName;
        const inputValue = (name: string) => {
            const input = this.inputs.find(i => {
                return i.title === name;
            });
            return input === undefined || input.element === null ? 0 : input.element.asNumber();
        };

        switch (cod) {
            case Script.codes.AP: break;

            case Script.codes.AR:
                const result = this.calculate(this.char);
                let asNumber = Number(result.AR.value);
                if (!isNaN(asNumber)) {
                    const val = inputValue(names.arma + "-" + cod);
                    asNumber += percent ? val * value / 100 : val;
                    result.AR.value = asNumber;
                    this.props.onCalculateResult(result);
                }
            break;
        }
        return true;
    }

    private onQuestChanged = (name: string, index: number, value: string): boolean => {
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
        this.status.setQuestBonus(newStats);
        return true;
    }

    private calculate = (char: IChar | undefined): IStatusResult => {

        if (char === undefined || char.formula === undefined) {
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

        this.bonus.forEach(b => {
            switch (b.cod) {
                case Script.itens.AR.cod: values.AR += b.value; break;
                case Script.itens.DEF.cod: values.DEF += b.value; break;
                case Script.itens.ABS.cod: values.ABS += b.value; break;
                case Script.itens.MPadd.cod: values.MP += b.value; break;
                case Script.itens.RESadd.cod: values.RES += b.value; break;
            }
        })
        return Script.defResult(values);
    }
}

export default CharDetail;