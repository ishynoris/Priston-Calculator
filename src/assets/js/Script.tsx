import IChar from '../../interfaces/IChar';
import IForces from '../../interfaces/IForces';
import IItem from '../../interfaces/IItem';
import IKeyValue from '../../interfaces/IKeyValue';
import ILanguage from '../../interfaces/ILanguage';
import IMixes from '../../interfaces/IMixes';
import IQuest from '../../interfaces/IQuest';
import IStatusResult from '../../interfaces/IStatusResult';
import IVersion from '../../interfaces/IVersion';
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
    public static nameChars(language: ILanguage): string[] {
        const names: string[] = [];
        chars(language).forEach(c => {
            names.push(c.name);
        });
        return names;
    }

    public static charDetail = (language: ILanguage, charName?: string): IChar | undefined => {
        if (charName === undefined) {
            return undefined;
        }
        return chars(language).find(c => {
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

    public static quests(language: ILanguage): IQuest[] {
        return Values.quests(language);
    }

    public static questsAt(language: ILanguage, index: number): IQuest[] {
        return Script.quests(language).filter((q, i) => {
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
    public static getVersions(): IVersion[] {
        return [
            {
                descriptions: ["Liberada todas as fórmulas para Arqueira, Sacerdotisa e Cavaleiro."],
                tag: "alfa",
                v: 0.1,
            }, {
                descriptions: ["Liberada as fórmulas de AR, DEF, ABS, HP, MP e RES para todos os personagens (incluindo Guerreira)."],
                tag: "alfa",
                v: 0.2,
            }, {
                descriptions: ["Adicionado as fórmulas de AP para Atalanta, Assassina e Guerreira."],
                tag: "alfa",
                v: 0.3,
            }, {
                descriptions: [
                    "Adicionado as fórmulas de AP para Mago e Lutador.", 
                    "A fórmula para Sacerdotisa foi corrigida."
                ],
                subV: 1,
                tag: "alfa",
                v: 0.3,
            }, {
                descriptions: [ "Adicionado seleção de idiomas." ],
                tag: "alfa",
                v: 0.4,
            }, {
                descriptions: [ "Notas de cada nova atualização." ],
                tag: "alfa",
                v: 0.5,
            }, {
                descriptions: [ 
                    "Correção de erro ao acessar Notas de atualização.",
                    "Novas traduções."
                ],
                subV: 1,
                tag: "alfa",
                v: 0.5,
            }, {
                descriptions: [ 
                    "Liberada as fórmulas de AP para e Mecânico, Pikeman e Xama.",
                    "Revisão geral das fórmulas dos personagens e correção de alguns erros.",
                    "Novas traduções.",
                ],
                tag: "alfa",
                v: 0.6,
            }
        ]
    }

    public static descriptionVersion(version: IVersion): string {
        return "v" + version.v + (version.subV !== undefined ? "." + version.subV : "") 
            + " - " + version.tag;
    }

    public static currentVersion(): IVersion {
        const versions = Script.getVersions();
        return versions[versions.length -1];
    }
}

const chars = (language: ILanguage): IChar[] => {
    return CharacterStats.chars(language);
}

const truncVal = (v?: number): string | number => {
    return v === undefined || v < 0 ? "-" : Math.trunc(v);
}

const ceilVal = (v?: number): string | number => {
    return v === undefined || v < 0 ? "-" : Math.ceil(v);
}