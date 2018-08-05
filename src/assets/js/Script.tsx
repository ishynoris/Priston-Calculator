import IChar from '../../interfaces/IChar';
import IForces from '../../interfaces/IForces';
import IItem from '../../interfaces/IItem';
import IItensChar from '../../interfaces/IItensChar';
import IKeyValue from '../../interfaces/IKeyValue';
import ILanguage from '../../interfaces/ILanguage';
import IMixes from '../../interfaces/IMixes';
import IQuest from '../../interfaces/IQuest';
import IStatusResult from '../../interfaces/IStatusResult';
import CharacterStats from './CharacterStatus';
import Codes from './Codes';
import Langs from './Langs';
import Values from './Values';


export default class Script {

    public static Codes = Codes;
    public static DefaultLanguage = Langs.default;

    public static defaultResult (language: ILanguage, values?: { ABS: number, APmin: number, APmax: number, AR: number, DEF: number, HP: number, MP: number, RES: number }): IStatusResult {

        const statsCode = language.translations.stats;
        if (values === undefined) {
            return {
                ABS: { title: statsCode.Absorption, value: ceilVal() },
                AP: { title: statsCode.AttkPower, value: truncVal() },
                AR: { title: statsCode.AttkRating, value: truncVal() },
                DEF: { title: statsCode.Defense, value: truncVal() },
                HP: { title: statsCode.HP, value: truncVal() },
                MP: { title: statsCode.MP, value: truncVal() },
                RES: { title: statsCode.RES, value: truncVal() },
            }
        }
        const min = truncVal(values.APmin);
        const max = truncVal(values.APmax);
        return {
            ABS: { title: statsCode.Absorption, value: ceilVal(values.ABS) },
            AP: { title: statsCode.AttkPower, value: min + "-" + max },
            AR: { title: statsCode.AttkRating, value: truncVal(values.AR) },
            DEF: { title: statsCode.Defense, value: truncVal(values.DEF) },
            HP: { title: statsCode.HP, value: truncVal(values.HP) },
            MP: { title: statsCode.MP, value: truncVal(values.MP) },
            RES: { title: statsCode.RES, value: truncVal(values.RES) },
        }
    }

    public static chars(language: ILanguage): IChar[] {
        return CharacterStats.chars(language);
    }
    public static charDetail = (language: ILanguage, charName?: string): IChar | undefined => {
        if (charName === undefined) {
            return undefined;
        }
        return Script.chars(language).find(c => {
            return c.name === charName;
        });
    }

    public static defaultLanguage(): { index: number, language: ILanguage } | undefined {
        let position = -1;
        let lang;
        Langs.langs.forEach((l, i) => {
            if (l.value === Langs.default) {
                lang = l;
                position = i;
            }
        })
        return lang === undefined ? undefined : { index: position, language: lang }
    }

    public static language(val: string): ILanguage | undefined {
        return Langs.langs.find(l => {
            return l.value === val;
        })
    }

    public static languages(): ILanguage[] {
        return Langs.langs;
    }

    public static langsDesc(): IKeyValue[] {
        return Langs.langsDesc();
    }

    public static statsDesc(language: ILanguage): string[] {
        const stats = language.translations.stats
        return [stats.Level, stats.Strength, stats.Spirit, stats.Talent, stats.Agility, stats.Health, stats.Stats]
    }

    public static itens(language: ILanguage): IItem[] {
        return Values.itens(language);
    }

    public static getItem(language: ILanguage, name: string): IItem | undefined {
        return Script.itens(language).find(i => {
            return i.name === name;
        })
    }

    public static itensChar(language: ILanguage): IItensChar {
        return Values.itensChar(language);
    }

    public static quests(): IQuest[] {
        return Values.quests();
    }

    public static questsAt(index: number): IQuest[] {
        return Script.quests().filter((q, i) => {
            return i <= index;
        });
    }

    public static boostersAP(language: ILanguage): IForces[] {
        return Values.boostersAP(language);
    }

    public static forces(language: ILanguage): IForces[] {
        return Values.forces(language);
    }

    public static mixesByItem (language: ILanguage,  item: string): IMixes | undefined {
        return Values.bonusMixes(language).find(bonus => {
            return bonus.item === item;
        });
    }

    public static codByAttr (language: ILanguage, attr: string): number | undefined {
        const statsList = Values.statsList(language);
        const item = statsList.find(i => {
            return i.title === attr;
        });
        return item === undefined ? undefined : item.cod;
    }
}

const truncVal = (v?: number): string | number => {
    return v === undefined || v < 0 ? "-" : Math.trunc(v);
}

const ceilVal = (v?: number): string | number => {
    return v === undefined || v < 0 ? "-" : Math.ceil(v);
}