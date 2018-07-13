import IChar from '../../interfaces/IChar';
import IForces from '../../interfaces/IForces';
import IItem from '../../interfaces/IItem';
import IMixes from '../../interfaces/IMixes';
import IQuest from '../../interfaces/IQuest';
import IStatusResult from '../../interfaces/IStatusResult';
import BonusMixes from './BonusMixes';
import CharacterStatus from './CharacterStatus';
import QuestList from './QuestList';
import Values from './Values';

class Script {

    public static sets = { kit: "Kit", primario: "Primario", set: "Set" }
    public static codes = Values.codes;
    public static status = Values.statsCode;
    public static chars = CharacterStatus.names;
    public static itensName = Values.itensName;
    public static stats = [
        Script.status.LVL.title,
        Script.status.FOR.title,
        Script.status.INT.title,
        Script.status.TAL.title,
        Script.status.AGI.title,
        Script.status.VIT.title,
        Script.status.STS.title
    ]

    public static defResult = (values?: { ABS: number, APmin: number, APmax: number, AR: number, DEF: number, HP: number, MP: number, RES: number }): IStatusResult => {

        if (values === undefined) {
            return {
                ABS: { title: Script.status.ABS.title, value: val() },
                AP: { title: Script.status.AP.title, value: val() },
                AR: { title: Script.status.AR.title, value: val() },
                DEF: { title: Script.status.DEF.title, value: val() },
                HP: { title: Script.status.HP.title, value: val() },
                MP: { title: Script.status.MP.title, value: val() },
                RES: { title: Script.status.RES.title, value: val() },
            }
        }
        const min = val(values.APmin);
        const max = val(values.APmax);
        return {
            ABS: { title: Script.status.ABS.title, value: val(values.ABS) },
            AP: { title: Script.status.AP.title, value: min + "-" + max },
            AR: { title: Script.status.AR.title, value: val(values.AR) },
            DEF: { title: Script.status.DEF.title, value: val(values.DEF) },
            HP: { title: Script.status.HP.title, value: val(values.HP) },
            MP: { title: Script.status.MP.title, value: val(values.MP) },
            RES: { title: Script.status.RES.title, value: val(values.RES) },
        }
    }

    public static getMixesByItem(item: string): IMixes | undefined {

        return BonusMixes.find(bonus => {
            return bonus.item === item;
        });
    }

    public static getItem(name: string): IItem | undefined {
        return Values.itens.find(i => {
            return i.name === name;
        });
    }

    public static getCodByAttr(attr: string): number | undefined {

        const item = Values.statsList.find(i => {
            return i.title === attr;
        });
        return item === undefined ? undefined : item.cod;
    }
    
    public static getCharDetail(charName?: string): IChar | undefined {
        if (charName === undefined) {
            return undefined;
        }
        return CharacterStatus.charDetail.find(c => {
            return c.name === charName;
        });
    }

    public static getQuestsAt(index: number): IQuest[] {
        return QuestList.filter((q, i) => {
            return i <= index;
        });
    }

    public static getQuests(): IQuest[] {
        return QuestList;
    }

    public static getBonusAP(): { forces: IForces[] }  {
        return { forces: Values.forces };
    }

    public static getChars(): IChar[] {
        return CharacterStatus.charDetail;
    }
}

function val(v?: number): string | number {
    return v === undefined || v < 0 ? "-" : Math.trunc(v);
}

export default Script;