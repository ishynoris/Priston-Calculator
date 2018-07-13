import * as React from 'react';

import Script from '../assets/js/Script';
import IAttr from '../interfaces/IAttr';
import IBonus from '../interfaces/IBonus';
import IChar from '../interfaces/IChar';
import ICharacterStatus from '../interfaces/ICharacterStatus';
import IForces from '../interfaces/IForces';
import IItem from '../interfaces/IItem';
import IMix from '../interfaces/IMix';
import ISkills from '../interfaces/ISkills';
import IStatusResult from '../interfaces/IStatusResult';
import BonusAP from './BonusAP';
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
const radioTitles = ['Duas mãos', 'Escudo', 'Orbital'];
const radios = {
    indexChecked: 0,
    lastIndex: radioTitles.length - 1,
    name: 'Status',
    titles: radioTitles,
}

class CharDetail extends React.Component<ICharDetail>{

    public state: { hasChar: boolean }
    private char: IChar | undefined;
    private bonus: { skills: IBonus[], quests: IBonus[], mixes: Array<{ item: string, mix: IMix }> };
    private itens: { kit: IItem[], set: IItem[], prim: IItem[], bonus: IItem[] }
    private detail: { status: Status | null, skills: Skills | null, quests: Quests | null, result: Result | null }
    private sets: { kit: SetItem | null, pri: SetItem | null, set: SetItem | null, bonus: SetItem | null }

    constructor(props: ICharDetail) {
        super(props);
        this.bonus = { skills: [], quests: [], mixes: [] };
        this.itens = { kit: [], set: [], prim: [], bonus: [] }
        this.detail = { status: null, skills: null, quests: null, result: null }
        this.sets = { kit: null, pri: null, set: null, bonus: null }
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
        const bonus: { forces: IForces[], another: IForces[] } = Script.getBonusAP();
        const details = () => {
            if (this.char === undefined){
                return null;
            }
            return <div>
                <Status
                    stats={Script.stats}
                    ref={ref => this.detail.status = ref}
                    onStatusChanged={this.onStatusChanged} />
                <Skills
                    ref={ref => this.detail.skills = ref}
                    onSkillChanged={this.onSkillChanged} />
                <Quests
                    ref={ref => this.detail.quests = ref}
                    onQuestsChanged={this.onQuestChanged} />
                <BonusAP 
                    forces={bonus.forces}
                    another={bonus.another}
                    onForceSelected={this.onForceSelected} />
            </div>
        }
        return (
            <div className="row" style={{ margin: 0 }}>
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
                        ref={ref => this.sets.kit = ref}
                        onItemChanged={this.itemChanged}
                        onMixSelected={this.mixSelected} />
                    <SetItem 
                        ref={ref => this.sets.set = ref}
                        onItemChanged={this.itemChanged}
                        onMixSelected={this.mixSelected} />
                    <ShitftEquip
                        name={radios.name}
                        titles={radios.titles}
                        default={radios.indexChecked}
                        onSelectedCallback={this.onSelectEquip} />
                    <SetItem 
                        ref={ref => this.sets.pri = ref}
                        onItemChanged={this.itemChanged}
                        onMixSelected={this.mixSelected} />
                </div>
                <div className="col-lg-2">
                    <Title title="Bonus e Adicionais" />
                    <SetItem 
                        ref={ref => this.sets.bonus = ref}
                        onItemChanged={this.itemChanged}
                        onMixSelected={this.mixSelected} />
                    <Title title="Resultados" />
                    <Result ref={ref => this.detail.result = ref} />
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
        const getItens = (names: string[]): IItem[] => {
            const itens: IItem[] = [];
            names.forEach(n => {
                const item = Script.getItem(n);
                if (item !== undefined) {
                    itens.push(item);
                }
            })
            return itens;
        }
        const getSkillValues = (skills: ISkills[]): IBonus[] => {
            const bonus: IBonus[] = [];
            skills.forEach(s => {
                bonus.push({ cod: s.codBonus, value: s.values[0], percent: s.percent })
            })
            return bonus;
        }
        if (this.detail.status !== null) {
            this.detail.status.setStatus(this.char === undefined ? undefined : this.char.stats);
        }
        if (this.detail.skills !== null) {
            const skills = this.char === undefined ? [] : this.char.skills;
            this.bonus.skills = getSkillValues(skills);
            this.detail.skills.setSkills(skills);
        }
        if (this.detail.quests !== null) {
            this.detail.quests.setQuest(this.char === undefined ? [] : Script.getQuests());
        }
        if (this.sets.kit !== null) {
            const names = [Script.itensName.amuleto.title, Script.itensName.anel.title];
            this.itens.kit = getItens(names);
			this.sets.kit.initState(this.itens.kit);
		}
		if (this.sets.set !== null) {
            const names = [Script.itensName.bracel.title, Script.itensName.luva.title, Script.itensName.bota.title ]
            this.itens.set = getItens(names)
			this.sets.set.initState(this.itens.set);
		}
		if (this.sets.pri !== null) {
            const names = [Script.itensName.arma.title, Script.itensName.armadura.title, radios.titles[radios.indexChecked]]
            this.itens.prim = getItens(names);
			this.sets.pri.initState(this.itens.prim);
        }
		if (this.sets.bonus !== null) {
            const names = [Script.itensName.bonus.title]
            this.itens.bonus = getItens(names);
			this.sets.bonus.initState(this.itens.bonus);
        }
        this.setResult();
    }
    
    private onStatusChanged = (charStats: ICharacterStatus) => {
        if (this.char !== undefined) {
            this.char.stats = charStats;
            this.setResult();
        }
    }

    private onSkillChanged = (bonus: IBonus): boolean => {
        if (this.char === undefined) {
            return false;
        }
        if (this.bonus.skills.length === 0) {
            this.bonus.skills.push(bonus);
        } else {
            const skill = this.bonus.skills.find(s => {
                return s.cod === bonus.cod;
            })
            if (skill === undefined) {
                this.bonus.skills.push(bonus);
            } else {
                skill.value = bonus.value;
            }
        }
        this.setResult();
        return true;
    }

    private onQuestChanged = (name: string, index: number, value: string): boolean => {
        let newStats = 0;
        if (this.char === undefined || this.detail.status === null) {
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
        this.detail.status.setQuestBonus(newStats);
        this.setResult();
        return true;
    }

    private onForceSelected = (bonus: IForces | undefined): boolean => {
        console.log(bonus);
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

    private itemChanged = (title: string, attr: IAttr, oldValue: number) => {
        
        const item = this.getItem(title);
        if (item === undefined) { return };
        item.attrs.forEach((a, i, t) => {
            if (a.cod === attr.cod) {
                t[i] = attr;
            }
        });
        this.setResult();
    }

    private mixSelected = (name: string, val: IMix | undefined) => {
        const mixes = this.bonus.mixes;
        const item = mixes.find(m => {
            return m.item === name;
        });

        if (item === undefined && val !== undefined) {
            mixes.push({ item: name, mix: val });
        } else if (item !== undefined && val === undefined) {
            mixes.splice(mixes.indexOf(item), 1);
        } else if (item !== undefined && val !== undefined) {
            item.mix = val;
        }
        this.setResult();
    }

    private onSelectEquip = (value: string, oldValue?: string) => {
        
        if (oldValue !== undefined) {
            this.mixSelected(oldValue, undefined);
        }
        const item: IItem | undefined = Script.getItem(value);
		if (this.sets.pri !== null) {
            if (item === undefined) {
                this.sets.pri.removeItem(radios.lastIndex);
            } else {
                this.sets.pri.addItem(item, radios.lastIndex);
            }
		}
    }

    private setResult = () => {
        if (this.detail.result !== null) {
            const result = this.calculateResults()
            this.detail.result.setResult(result);
        }
    }

    private calculateResults = (): IStatusResult => {
        const char = this.char;
        if (char === undefined || char.formula === undefined) {
            return Script.defResult();
        }
        const getStatsByCode = (code: number): number => {
            return code === Script.codes.FOR ? char.stats.for 
                : code === Script.codes.AGI ? char.stats.agi
                : code === Script.codes.INT ? char.stats.int
                : code === Script.codes.TAL ? char.stats.tal
                : code === Script.codes.VIT ? char.stats.vit
                : -1;
        }
        const attrDivs = (attrDiv: number[]): number[] => {
            const result: number[] = []
            attrDiv.forEach(a => {
                const stat = getStatsByCode(a);
                if (stat !== -1){
                    result.push(stat)
                }
            });
            return result;
        }

        const stats = char.stats;
        const f = char.formula;
        const values = { ABS: 0, APmax: 0, APmin: 0, AR: 0, DEF: 0, HP: 0, MP: 0, RES: 0 }

        const div = attrDivs(f.AP.attrDiv);
        const statAttr = getStatsByCode(f.AP.attrFator);

        const multi = (statAttr !== -1) ? (1 / f.AP.fFator * statAttr) : 0;
        const minArma = this.getAttrByCode(Script.itensName.arma.title, Script.codes.APmin);
        const maxArma = this.getAttrByCode(Script.itensName.arma.title, Script.codes.APmax);
        const maxArmaAdd = this.getAttrByCode(Script.itensName.arma.title, Script.codes.APadd);
        const sumAttrs = div.reduce((d, i) => d + i , 0);
        
        const codes = Script.codes;
        const addPercent = (bonus: IBonus, attr: number) => {
            return bonus.percent ? attr * bonus.value / 100 : bonus.value;
        }

        const applyValues = (bonus: IBonus, itemName?: string) => {
            const attr = itemName === undefined ? 0 : this.getAttrByCode(itemName, bonus.cod);
            const add = addPercent(bonus, attr);
            switch (bonus.cod) {
                case codes.AR: values.AR += add; break;
                case codes.ARadd: values.AR += bonus.value > 0 ? stats.lvl / bonus.value : 0; break;
                case codes.APmin: values.APmin += add; break;
                case codes.APmax: values.APmax += add; break;
                case codes.DEF: values.DEF += add; break;
                case codes.DEFadd: values.DEF += add; break;
                case codes.ABS: values.ABS += add; break;
                case codes.ABSadd: values.ABS += add; break;
                case codes.HP: values.HP += bonus.value; break;
                case codes.HPadd: values.HP += bonus.value; break;
                case codes.MP: values.MP += bonus.value; break;
                case codes.MPadd: values.MP += bonus.value; break;
                case codes.RES: values.RES += bonus.value; break;
                case codes.RESadd: values.RES += bonus.value; break;
            }
        }
        
        const applySkills = (bonus: IBonus) => {
            if (bonus.cod === codes.AR) {
                const arArma = this.getAttrByCode(Script.itensName.arma.title, codes.AR);
                values.AR += addPercent(bonus, arArma);
            } else if (bonus.cod === codes.AP) {
                const min = this.getAttrByCode(Script.itensName.arma.title, codes.APmin);
                const max = this.getAttrByCode(Script.itensName.arma.title, codes.APmax);
                values.APmin += addPercent(bonus, min);
                values.APmax += addPercent(bonus, max);
            } else if (bonus.cod === codes.HP || bonus.cod === codes.HPadd) {
                values.HP += addPercent(bonus, values.HP);
            } else if (bonus.cod === codes.MP || bonus.cod === codes.MPadd) {
                values.MP += addPercent(bonus, values.MP);
            } else if (bonus.cod === codes.RES || bonus.cod === codes.RESadd) {
                values.RES += addPercent(bonus, values.RES);
            }
        }
        
        this.getAllItens().forEach(i => i.attrs.forEach(a => applyValues({ cod: a.cod, value: a.value })));
        this.bonus.quests.forEach(q => applyValues(q));
        this.bonus.mixes.forEach(m => m.mix.bonus.forEach(b => applyValues(b, m.item)));
        
        values.AR += (stats.lvl * f.AR.fLvl) + (stats.tal * f.AR.fTal) + (stats.agi * f.AR.fAgi) + f.AR.add;
        values.APmin += 4 + Math.trunc(stats.lvl / 6) + Math.trunc(sumAttrs / 40) 
                    + Math.trunc((minArma + maxArma) / 16) + Math.trunc(multi * minArma);
        values.APmax += 6 + Math.trunc(stats.lvl / 6) + Math.trunc(sumAttrs / 40) 
                    + Math.trunc(maxArmaAdd > 0 ? stats.lvl / maxArmaAdd : 0) + Math.trunc(multi * maxArma);
        values.DEF += (f.DEF.fLvl * stats.lvl) + (f.DEF.fTal * stats.tal) + (f.DEF.fAgi * stats.agi) + f.DEF.add;
        values.ABS += (stats.lvl / f.ABS.fLvl) + (stats.for / f.ABS.fFor) + (stats.tal / f.ABS.fTal)
                    + (stats.agi / f.ABS.fAgi) + (values.DEF / 100) + f.ABS.add;
        values.HP += (f.HP.fLvl * stats.lvl) + (f.HP.fAgi * stats.agi) + (f.HP.fVit * stats.vit) + f.HP.add;
        values.MP += (f.MP.fLvl * stats.lvl) + (f.MP.fInt * stats.int) + f.MP.add;
        values.RES += (f.RES.fLvl * stats.lvl) + (f.RES.fFor * stats.for) + (f.RES.fTal * stats.tal)
                    + (stats.int) + (f.RES.fVit * stats.vit) + f.RES.add;

        this.bonus.skills.forEach(s => applySkills(s));
        return Script.defResult(values);
    }

    private getAllItens = (): IItem[] => {
        return this.itens.kit.concat(this.itens.set).concat(this.itens.prim).concat(this.itens.bonus);
    }

    private getItem = (name: string) => {
        const itens = this.getAllItens();
        return itens.find(i => {
            return i.name === name;
        })
    }

    private getAttrByCode = (itemName: string, code: number): number => {
        const item = this.getItem(itemName);
        if (item === undefined) {
            return 0;
        }
        const attr = item.attrs.find(a => {
            return a.cod === code;
        });
        return attr === undefined ? 0 : attr.value;
    }
}

export default CharDetail;