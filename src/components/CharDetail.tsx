import * as React from 'react';

import Script from '../assets/js/Script';
import IBonus from '../interfaces/IBonus';
import IChar from '../interfaces/IChar';
import ICharacterStatus from '../interfaces/ICharacterStatus';
import IItem from '../interfaces/IItem';
import IStatusInput from '../interfaces/IStatusInput';
import IStatusResult from '../interfaces/IStatusResult';
import CharSelect from './CharSelect';
import Quests from './Quests';
import Result from './Result';
import SetItem from './SetItem';
import ShitftEquip from './ShitftEquip';
import Skills from './Skills';
import Status from './Status';
import Title from './Title';

interface ICharDetail {
    onCharChanged?: (char: IChar | undefined) => void
}
const radioTitles = ['Arma', 'Escudo', 'Orbital'];
const radios = {
    indexChecked: 0,
    lastIndex: radioTitles.length - 1,
    name: 'Status',
    titles: radioTitles,
}

class CharDetail extends React.Component<ICharDetail>{

    public state: { hasChar: boolean }
    private char: IChar | undefined;
    private bonus: { itens: IBonus[], quests: IBonus[], mixes: IBonus[] };
    private inputs: IStatusInput[];
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;
	private result: Result | null;
    private itensKit: SetItem | null;
    private itensPri: SetItem | null;
    private itensSet: SetItem | null;

    constructor(props: ICharDetail) {
        super(props);
        this.bonus = { itens: [], quests: [], mixes: [] };
        this.inputs = [];
        this.status = null;
        this.skills = null;
        this.quests = null;
        this.state = { hasChar: false };
    }

    public setChar(newChar: IChar | undefined) {
        
        this.char = newChar;
        if (!this.state.hasChar) {
            this.setState({ hasChar: true });
            return;
        }
        this.updateChar();
    }

    public render() {
        const chars: IChar[] = Script.getChars();
        const details = () => {
            if (this.char === undefined){
                return null;
            }
            return <div>
                <Status
                    ref={ref => this.status = ref}
                    onStatusChanged={this.onStatusChanged} />
                <Skills
                    ref={ref => this.skills = ref}
                    onSkillChanged={this.onSkillChanged} />
                <Quests
                    ref={ref => this.quests = ref}
                    onQuestsChanged={this.onQuestChanged} />
            </div>
        }
        return (
            <div className="row">
                <div className="block col-lg-2">
                    <Title title="Personagens" />
                    <CharSelect
                        title={"Selecione um personagem:"}
                        name={"Personagens"}
                        chars={chars} 
                        onCharSelect={this.onCharSelect}/>
                    { details() }
                </div>
                <div className="block col-lg-6">
                    <Title title="Equipamentos" />
                    <SetItem 
                        ref={ref => this.itensKit = ref}
                        onItemChanged={this.itemChanged} />
                    <SetItem 
                        ref={ref => this.itensSet = ref}
                        onItemChanged={this.itemChanged} />
                    <ShitftEquip
                        name={radios.name}
                        titles={radios.titles}
                        default={radios.indexChecked}
                        onSelectedCallback={this.onSelectEquip} />
                    <SetItem 
                        ref={ref => this.itensPri = ref}
                        onItemChanged={this.itemChanged} 
                        onInputValues={this.addInputValues} />
                </div>
                <div className="col-lg-2">
                    <Title title="Resultados" />
                    <Result ref={ref => this.result = ref} />
                </div>
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
        if (this.status !== null) {
            this.status.setStatus(this.char === undefined ? undefined : this.char.stats);
        }
        if (this.skills !== null) {
            this.skills.setSkills(this.char === undefined ? [] : this.char.skills);
        }
        if (this.quests !== null) {
            this.quests.setQuest(this.char === undefined ? [] : Script.getQuests());
        }
        if (this.itensKit !== null) {
			this.itensKit.initState(Script.getSetByName(Script.sets.kit));
		}
		if (this.itensSet !== null) {
			this.itensSet.initState(Script.getSetByName(Script.sets.set));
		}
		if (this.itensPri !== null) {
			const primario = Script.getSetByName(Script.sets.primario);
			const item = Script.getItem(radios.titles[radios.indexChecked]);
			if (item !== undefined) {
				primario.push(item);
			}
			this.itensPri.initState(primario);
		}
        this.setResult();
    }
    
    private onStatusChanged = (charStats: ICharacterStatus) => {

        if (this.char !== undefined) {
            this.char.stats = charStats;
            this.setResult();
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
                const result = this.calculateResults();
                let asNumber = Number(result.AR.value);
                if (!isNaN(asNumber)) {
                    const val = inputValue(names.arma + "-" + cod);
                    asNumber += percent ? val * value / 100 : val;
                    result.AR.value = asNumber;
                    if(this.result !== null) {
                        this.result.setResult(result);
                    }
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

        const questsDone = Script.getQuestsAt(index);
        if (level < questsDone[index].level) {
            alert("Você ainda não possui level suficiente para realizar essa quest.");
            return false;
        }

        this.bonus.quests = [];
        questsDone.forEach(q => {
            q.bonus.forEach(b => {
                if (b.cod === Script.codes.STS) {
                    newStats += b.value;
                }
                if (b.cod === Script.codes.STSp) {
                    const dif = level - q.level;
                    newStats += dif * b.value + b.value;
                }
                if (b.cod === Script.codes.HP || b.cod === Script.codes.HPadd) {
                    this.bonus.quests.push(b);
                }
            })
        })
        this.status.setQuestBonus(newStats);
        this.setResult();
        return true;
    }
    
    private onCharSelect = (name: string, index: number, char: IChar | undefined): boolean => {
        const charsDone = [Script.chars.Arqueira]
      
        const charName = char === undefined ? undefined : char.name;
        if (charName !== undefined && charsDone.indexOf(charName) < 0){
            alert ("Ainda não é possível calcular a build para " + charName + ". :("
                + "\nMas estamos trabalhando nisso. :)");
            return false;
        }
        if (this.props.onCharChanged !== undefined) {
            this.props.onCharChanged(char);
        }
		const newChar = Script.getCharDetail(charName);
		this.setChar(newChar);
		return true;
	}

    private itemChanged = (title: string, newValue: number, oldValue: number) => {
        const attrCod = Script.getCodByAttr(title);
        if (attrCod === undefined) {
            return;
        }
        const bItens = this.bonus.itens;
        const contains = bItens.find(b => {
            return b.cod === attrCod;
        })
        if (contains === undefined) {
            bItens.push({ cod: attrCod, value: newValue });
        } else {
            const index = bItens.indexOf(contains);
            bItens[index].value += newValue > oldValue 
                ? (newValue - oldValue) 
                : -(oldValue - newValue);
        }
        this.setResult();
    }

    private onSelectEquip = (index: number) => {
        const item: IItem | undefined = Script.getItem(radios.titles[index]);
		if (item !== undefined && this.itensPri !== null) {
			this.itensPri.addItem(item, radios.lastIndex);
		}
    }

    private addInputValues = (inputs: IStatusInput[]) => {
        this.inputs = this.inputs.concat(inputs);
    }

    private setResult = () => {
        if (this.result !== null) {
            const result = this.calculateResults()
            this.result.setResult(result);
        }
    }

    private calculateResults = (): IStatusResult => {
        const char = this.char;
        if (char === undefined || char.formula === undefined) {
            return Script.defResult();
        }

        const stats = char.stats;
        const AR = char.formula.AR;
        const HP = char.formula.HP;
        const MP = char.formula.MP;
        const RES = char.formula.RES;
        const DEF = char.formula.DEF;
        const ABS = char.formula.ABS;

        const def = (DEF.fLvl * stats.lvl) + (DEF.fTal * stats.tal) + (DEF.fAgi * stats.agi) + DEF.add;
        const values = {
            ABS: Math.ceil((stats.lvl / ABS.fLvl) + (stats.for / ABS.fFor) + (stats.tal / ABS.fTal)
                            + (stats.agi / ABS.fAgi) + (def / 100) + ABS.add),
            AR: Math.ceil((stats.lvl * AR.fLvl) + (stats.tal * AR.fTal) + (stats.agi * AR.fAgi) + AR.add),
            DEF: Math.ceil(def),
            HP: Math.ceil((HP.fLvl * stats.lvl) + (HP.fAgi * stats.agi) + (HP.fVit * stats.vit) + HP.add),
            MP: Math.ceil((MP.fLvl * stats.lvl) + (MP.fInt * stats.int) + MP.add),
            RES: Math.ceil((RES.fLvl * stats.lvl) + (RES.fFor * stats.for) + (RES.fTal * stats.tal)
                + (stats.int) + (RES.fVit * stats.vit) + RES.add),
        }

        const applyBonus = (bonus: IBonus) => {
            switch (bonus.cod) {
                case Script.itens.AR.cod: values.AR += bonus.value; break;
                case Script.itens.DEF.cod: values.DEF += bonus.value; break;
                case Script.itens.ABS.cod: values.ABS += bonus.value; break;
                case Script.itens.HP.cod: values.HP += bonus.value; break;
                case Script.itens.HPadd.cod: values.HP += bonus.value; break;
                case Script.itens.MP.cod: values.MP += bonus.value; break;
                case Script.itens.MPadd.cod: values.MP += bonus.value; break;
                case Script.itens.RES.cod: values.RES += bonus.value; break;
                case Script.itens.RESadd.cod: values.RES += bonus.value; break;
            }
        }
        console.log(this.bonus.quests);
        this.bonus.quests.forEach(b => {
            applyBonus(b);
        })
        this.bonus.itens.forEach(b => {
            applyBonus(b);
        })
        return Script.defResult(values);
    }
}

export default CharDetail;