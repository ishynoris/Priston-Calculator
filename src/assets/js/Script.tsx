import IChar from '../../interfaces/IChar';
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
    public static itens = Values.itensCode;
    public static chars = CharacterStatus.names;
    public static itensName = Values.itensName;
    public static stats = [
        Script.itens.LVL.title,
        Script.itens.FOR.title,
        Script.itens.INT.title,
        Script.itens.TAL.title,
        Script.itens.AGI.title,
        Script.itens.VIT.title,
        Script.itens.STS.title
    ]

    public static defResult = (values?: { ABS: number, APmin: number, APmax: number, AR: number, DEF: number, HP: number, MP: number, RES: number }): IStatusResult => {

        if (values === undefined) {
            return {
                ABS: { title: Values.itensCode.ABS.title, value: val() },
                AP: { title: Values.itensCode.AP.title, value: val() },
                AR: { title: Values.itensCode.AR.title, value: val() },
                DEF: { title: Values.itensCode.DEF.title, value: val() },
                HP: { title: Values.itensCode.HP.title, value: val() },
                MP: { title: Values.itensCode.MP.title, value: val() },
                RES: { title: Values.itensCode.RES.title, value: val() },
            }
        }
        const min = val(values.APmin);
        const max = val(values.APmax);
        return {
            ABS: { title: Values.itensCode.ABS.title, value: val(values.ABS) },
            AP: { title: Values.itensCode.AP.title, value: min + "-" + max },
            AR: { title: Values.itensCode.AR.title, value: val(values.AR) },
            DEF: { title: Values.itensCode.DEF.title, value: val(values.DEF) },
            HP: { title: Values.itensCode.HP.title, value: val(values.HP) },
            MP: { title: Values.itensCode.MP.title, value: val(values.MP) },
            RES: { title: Values.itensCode.RES.title, value: val(values.RES) },
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

        const item = Values.itensList.find(i => {
            return i.title === attr;
        });
        return item === undefined ? undefined : item.cod;
    }

    public static getSetByName(name: string): IItem[] {
        const itens = Values.itens;
        const names = Script.itensName;

        const kit = [names.amuleto.title, names.anel.title, names.shelton.title];
        const primario = [names.arma.title, names.armadura.title];
        const set = [names.luva.title, names.bracel.title, names.bota.title];

        return itens.filter(i => {
            return name === Script.sets.kit ? existsIn(i.name, kit)
                : name === Script.sets.primario ? existsIn(i.name, primario)
                : name === Script.sets.set ? existsIn(i.name, set)
                : false;
        });
    }

    public static getCharDetail(char: string | undefined): IChar | undefined {
        if (char === undefined) {
            return undefined;
        }
        return CharacterStatus.charDetail.find(c => {
            return c.name === char;
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

    public static getChars(): IChar[] {
        return CharacterStatus.charDetail;
    }
}

function val(v?: number): string | number {
    return v === undefined || v < 0 ? "-" : v;
}
function existsIn(name: string, values: string[]): boolean {
    return values.indexOf(name) > -1;
}

export default Script;