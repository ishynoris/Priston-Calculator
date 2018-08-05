import IBonus from "../../interfaces/IBonus";
import ICodTitle from "../../interfaces/ICodTitle";
import IForces from "../../interfaces/IForces";
import IItem from "../../interfaces/IItem";
import IItensChar from "../../interfaces/IItensChar";
import ILanguage from "../../interfaces/ILanguage";
import IMixes from "../../interfaces/IMixes";
import IQuest from "../../interfaces/IQuest";
import BonusItens from "./BonusItens";
import BonusMixes from "./BonusMixes";
import Codes from "./Codes";

export default class Values {
 
    public static quests (): IQuest[] {
        return [
            { level: -1, title: "-", bonus: [] },
            { level: 20, title: "Quest level 20 (1º desafio de classe)", bonus: [] },
            { level: 30, title: "Quest level 30 - Por Ela", bonus: [{ cod: Codes.STS, value: 5 }] },
            { level: 40, title: "Quest level 40 (2º desafio de classe)", bonus: [{ cod: Codes.HP, value: 15 }] },
            { level: 55, title: "Quest level 55 - A Caverna", bonus: [{ cod: Codes.SP, value: 1 }] },
            { level: 60, title: "Quest level 60 (3º desafio de classe)", bonus: [] },
            { level: 70, title: "Quest level 70 - A Amizade de Michelle", bonus: [{ cod: Codes.SP, value: 1 }, { cod: Codes.STS, value: 5 }] },
            { level: 80, title: "Quest level 80 (4º desafio de classe)", bonus: [] },
            { level: 80, title: "Quest level 80 - O Fúria Aprisionado", bonus: [{ cod: Codes.SP, value: 2 }, { cod: Codes.STS, value: 5 }] },
            { level: 80, title: "Quest level 80 - O Teste da Realeza", bonus: [{ cod: Codes.STSp, value: 2 }] },
            { level: 85, title: "Quest level 85 - As Lágrimas de Calliar", bonus: [] },
            { level: 90, title: "Quest level 90 - A Vila Eura", bonus: [{ cod: Codes.HP, value: 40 }] },
            { level: 90, title: "Quest level 90 - Desafio Amargo", bonus: [{ cod: Codes.STSp, value: 3 }] },
            { level: 100, title: "Quest level 100 - Fantasma do Fúria", bonus: [] },
            { level: 110, title: "Quest level 110", bonus: [{ cod: Codes.EP, value: 2 }] },
            { level: 118, title: "Quest level 118", bonus: [{ cod: Codes.EP, value: 3 }] },
            { level: 123, title: "Quest level 123", bonus: [{ cod: Codes.STS, value: 10 }, { cod: Codes.EP, value: 3 }] },
        ];
    }

    public static statsCodes (language: ILanguage) {
        const stats = language.translations.stats;
        return {
            ABS: { cod: Codes.ABS, title: stats.Absorption, value: 0 },
            ABSadd: { cod: Codes.ABSadd, title: stats.AbsorptionAdd, value: 0 },
            AGI: { cod: Codes.AGI, title: stats.Agility, value: 0 },
            AP: { cod: Codes.AP, title: stats.AttkPower, value: 0 },
            APadd: { cod: Codes.APadd, title: stats.AttkPowerAdd, value: 0 },
            APmax: { cod: Codes.APmax, title: stats.AttkPowerMax, value: 0 },
            APmin: { cod: Codes.APmin, title: stats.AttkPowerMin, value: 0 },
            AR: { cod: Codes.AR, title: stats.AttkRating, value: 0 },
            ARadd: { cod: Codes.ARadd, title: stats.AttkRatingAdd, value: 0 },
            BonusAdd: { cod: Codes.BonusAdd, title: stats.Bonus, value: 0 },
            DEF: { cod: Codes.DEF, title: stats.Defense, value: 0 },
            DEFadd: { cod: Codes.DEFadd, title: stats.DefenseAdd, value: 0 },
            EP: { cod: Codes.EP, title: stats.ElitePts, value: 0 },
            FOR: { cod: Codes.FOR, title: stats.Strength, value: 0 },
            HP: { cod: Codes.HP, title: stats.HP, value: 0 },
            HPadd: { cod: Codes.HPadd, title: stats.HPAdd, value: 0 },
            INT: { cod: Codes.INT, title: stats.Spirit, value: 0 },
            KIT: { cod: Codes.KIT, title: "'kit-shelton-1'", value: 0 },
            LVL: { cod: Codes.LVL, title: stats.Level, value: 0 },
            MP: { cod: Codes.MP, title: stats.MP, value: 0 },
            MPadd: { cod: Codes.MPadd, title: stats.MPAdd, value: 0 },
            RES: { cod: Codes.RES, title: stats.RES, value: 0 },
            RESadd: { cod: Codes.RESadd, title: stats.RESAdd, value: 0 },
            SP: { cod: Codes.SP, title: stats.SpecialPts, value: 0 },
            STS: { cod: Codes.STS, title: stats.Stats, value: 0 },
            STSP: { cod: Codes.STSp, title: stats.StatsP, value: 0 },
            TAL: { cod: Codes.TAL, title: stats.Talent, value: 0 },
            VIT: { cod: Codes.VIT, title: stats.Health, value: 0 },
        }
    }
    
    public static itensChar (language: ILanguage): IItensChar {
        const allItens = language.translations.itens;
        const stats = language.translations.stats;
        return {
            Amulet: { cod: Codes.Amuleto, title: allItens.Amulet },
            Armlet: { cod: Codes.Bracel, title: allItens.Armlet },
            Armor: { cod: Codes.Armadura, title: allItens.Armor },
            Bonus: { cod: Codes.BonusAdd, title: stats.Bonus },
            Boots: { cod: Codes.Bota, title: allItens.Boots },
            Gauntlets: { cod: Codes.Luva, title: allItens.Gauntlets },
            Orbital: { cod: Codes.Orbital, title: allItens.Orbital },
            Rings: { cod: Codes.Aneis, title: allItens.Rings },
            Shelton: { cod: Codes.Shelton, title: allItens.Shelton },
            Shield: { cod: Codes.Escudo, title: allItens.Shield },
            Weapon: { cod: Codes.Arma, title: allItens.Weapon },
        }
    }

    public static itens(language: ILanguage): IItem[] {
        const itens = language.translations.itens;
        const stats = language.translations.stats;
        const stsCodes = this.statsCodes(language);
        return [
            { name: itens.Amulet, attrs: [stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Rings, attrs: [stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Weapon, attrs: [stsCodes.APmin, stsCodes.APmax, stsCodes.AR, stsCodes.APadd, stsCodes.ARadd] },
            { name: itens.Armor, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: stats.Bonus, attrs: [stsCodes.AR, stsCodes.DEFadd, stsCodes.ABSadd, stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Boots, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.ABSadd] },
            { name: itens.Armlet, attrs: [stsCodes.DEF, stsCodes.AR, stsCodes.ARadd] },
            { name: itens.Shield, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: itens.Gauntlets, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: itens.Orbital, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.MPadd, stsCodes.ABSadd] },
            { name: itens.Shelton, attrs: [stsCodes.KIT], },
        ]
    }

    public static boostersAP (language: ILanguage): IForces[] {
        const boosters = language.translations.boosters;
        return [
            {
                bonus: [{ cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Cabeção, title: boosters.BigHeadPotion },
            },
            {
                bonus: [{ cod: Codes.CoroaBC, value: 10, percent: true }],
                force: { cod: Codes.CoroaBC, title: boosters.CastleCrown },
            },
        ]
    }

    public static forces (language: ILanguage): IForces[] {
        const forces = language.translations.forces;
        return [
            {
                bonus: [{ cod: Codes.AP, value: 2 }],
                force: { cod: Codes.Lucidy, title: forces.Lucidy },
            },
            {
                bonus: [{ cod: Codes.AP, value: 4 }],
                force: { cod: Codes.Sereno, title: forces.Sereno },
            },
            {
                bonus: [{ cod: Codes.AP, value: 7 }],
                force: { cod: Codes.Fadeo, title: forces.Fadeo },
            },
            {
                bonus: [{ cod: Codes.AP, value: 10 }],
                force: { cod: Codes.Sparky, title: forces.Sparky },
            },
            {
                bonus: [{ cod: Codes.AP, value: 15 }],
                force: { cod: Codes.Raident, title: forces.Raident },
            },
            {
                bonus: [{ cod: Codes.AP, value: 25 }],
                force: { cod: Codes.Transparo, title: forces.Transparo },
            },
            {
                bonus: [{ cod: Codes.AP, value: 40 }, { cod: Codes.AP, value: 10, percent: true }],
                force: { cod: Codes.Murky, title: forces.Murky },
            },
            {
                bonus: [{ cod: Codes.AP, value: 60 }, { cod: Codes.AP, value: 10, percent: true }],
                force: { cod: Codes.Devine, title: forces.Devine },
            },
            {
                bonus: [{ cod: Codes.AP, value: 80 }, { cod: Codes.AP, value: 10, percent: true }],
                force: { cod: Codes.Celesto, title: forces.Celesto },
            },
            {
                bonus: [{ cod: Codes.AP, value: 100 }, { cod: Codes.AP, value: 10, percent: true }],
                force: { cod: Codes.Mirage, title: forces.Mirage },
            },
            {
                bonus: [{ cod: Codes.AP, value: 120 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Inferna, title: forces.Inferna },
            },
            {
                bonus: [{ cod: Codes.AP, value: 140 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Enigma, title: forces.Enigma },
            },
            {
                bonus: [{ cod: Codes.AP, value: 160 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Bellum, title: forces.Bellum },
            },
            {
                bonus: [{ cod: Codes.AP, value: 120 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Vita, title: forces.Vita },
            },
            {
                bonus: [{ cod: Codes.AP, value: 150 }, { cod: Codes.AP, value: 20, percent: true }],
                force: { cod: Codes.Ira, title: forces.Ira },
            },
            {
                bonus: [{ cod: Codes.AP, value: 200 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Tera, title: forces.Tera },
            },
        ]
    }

    public static statsList(language: ILanguage): ICodTitle[] {
        const stats = language.translations.stats;
        return [
            { cod: Codes.ABS, title: stats.Absorption },
            { cod: Codes.ABSadd, title: stats.AbsorptionAdd },
            { cod: Codes.AGI, title: stats.Agility },
            { cod: Codes.AP, title: stats.AttkPower },
            { cod: Codes.APadd, title: stats.AttkPowerAdd },
            { cod: Codes.APmax, title: stats.AttkPowerMax },
            { cod: Codes.APmin, title: stats.AttkPowerMin },
            { cod: Codes.AR, title: stats.AttkRating },
            { cod: Codes.ARadd, title: stats.AttkRatingAdd },
            { cod: Codes.BonusAdd, title: stats.Bonus },
            { cod: Codes.DEF, title: stats.Defense },
            { cod: Codes.DEFadd, title: stats.DefenseAdd },
            { cod: Codes.EP, title: stats.ElitePts },
            { cod: Codes.FOR, title: stats.Strength },
            { cod: Codes.HP, title: stats.HP },
            { cod: Codes.HPadd, title: stats.HPAdd },
            { cod: Codes.INT, title: stats.Spirit },
            { cod: Codes.KIT, title: "KIT" },
            { cod: Codes.LVL, title: stats.Level },
            { cod: Codes.MP, title: stats.MP },
            { cod: Codes.MPadd, title: stats.MPAdd },
            { cod: Codes.RES, title: stats.RES },
            { cod: Codes.RESadd, title: stats.RESAdd },
            { cod: Codes.SP, title: stats.SpecialPts },
            { cod: Codes.STS, title: stats.Stats },
            { cod: Codes.STSp, title: stats.StatsP },
            { cod: Codes.TAL, title: stats.Talent },
            { cod: Codes.VIT, title: stats.Health },
        ]
    }
    
    public static bonusItens (language: ILanguage): Array<{ name: string, bonus: IBonus[]} > {
        return BonusItens.bonus(language);
    }

    public static bonusMixes (language: ILanguage): IMixes[] {
        return BonusMixes.bonus(language);
    }
}