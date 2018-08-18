import IBonus from "../../interfaces/IBonus";
import ICodTitle from "../../interfaces/ICodTitle";
import IForces from "../../interfaces/IForces";
import IItem from "../../interfaces/IItem";
import ILanguage from "../../interfaces/ILanguage";
import IMixes from "../../interfaces/IMixes";
import IQuest from "../../interfaces/IQuest";
import BonusItens from "./BonusItens";
import BonusMixes from "./BonusMixes";
import Codes from "./Codes";

export default class Values {
 
    public static quests (language: ILanguage): IQuest[] {
        const quests = language.translations.quests;
        return [
            { level: -1, title: "-", bonus: [] },
            { level: 20, title: quests.q20, bonus: [] },
            { level: 30, title: quests.q30, bonus: [{ cod: Codes.STS, value: 5 }] },
            { level: 40, title: quests.q40, bonus: [{ cod: Codes.HP, value: 15 }] },
            { level: 55, title: quests.q55, bonus: [{ cod: Codes.SP, value: 1 }] },
            { level: 60, title: quests.q60, bonus: [] },
            { level: 70, title: quests.q70, bonus: [{ cod: Codes.SP, value: 1 }, { cod: Codes.STS, value: 5 }] },
            { level: 80, title: quests.q80a, bonus: [] },
            { level: 80, title: quests.q80b, bonus: [{ cod: Codes.SP, value: 2 }, { cod: Codes.STS, value: 5 }] },
            { level: 80, title: quests.q80c, bonus: [{ cod: Codes.STSp, value: 2 }] },
            { level: 85, title: quests.q85, bonus: [] },
            { level: 90, title: quests.q90a, bonus: [{ cod: Codes.HP, value: 40 }] },
            { level: 90, title: quests.q90b, bonus: [{ cod: Codes.STSp, value: 3 }] },
            { level: 100, title: quests.q100, bonus: [] },
            { level: 110, title: quests.q110, bonus: [{ cod: Codes.EP, value: 2 }] },
            { level: 118, title: quests.q118, bonus: [{ cod: Codes.EP, value: 3 }] },
            { level: 123, title: quests.q123, bonus: [{ cod: Codes.STS, value: 10 }, { cod: Codes.EP, value: 3 }] },
        ];
    }

    public static statsCodes (language: ILanguage) {
        const stats = language.translations.stats;
        return {
            ABS: { cod: Codes.ABS, title: stats.Absorption.name, value: 0 },
            ABSadd: { cod: Codes.ABSadd, title: stats.AbsorptionAdd.name, value: 0 },
            AGI: { cod: Codes.AGI, title: stats.Agility.name, value: 0 },
            AP: { cod: Codes.AP, title: stats.AttkPower.name, value: 0 },
            APadd: { cod: Codes.APadd, title: stats.AttkPowerAdd.name, value: 0 },
            APmax: { cod: Codes.APmax, title: stats.AttkPowerMax.name, value: 0 },
            APmin: { cod: Codes.APmin, title: stats.AttkPowerMin.name, value: 0 },
            AR: { cod: Codes.AR, title: stats.AttkRating.name, value: 0 },
            ARadd: { cod: Codes.ARadd, title: stats.AttkRatingAdd.name, value: 0 },
            DEF: { cod: Codes.DEF, title: stats.Defense.name, value: 0 },
            DEFadd: { cod: Codes.DEFadd, title: stats.DefenseAdd.name, value: 0 },
            EP: { cod: Codes.EP, title: stats.ElitePts.name, value: 0 },
            FOR: { cod: Codes.FOR, title: stats.Strength.name, value: 0 },
            HP: { cod: Codes.HP, title: stats.HP.name, value: 0 },
            HPadd: { cod: Codes.HPadd, title: stats.HPAdd.name, value: 0 },
            INT: { cod: Codes.INT, title: stats.Spirit.name, value: 0 },
            LVL: { cod: Codes.LVL, title: stats.Level.name, value: 0 },
            MP: { cod: Codes.MP, title: stats.MP.name, value: 0 },
            MPadd: { cod: Codes.MPadd, title: stats.MPAdd.name, value: 0 },
            RES: { cod: Codes.RES, title: stats.RES.name, value: 0 },
            RESadd: { cod: Codes.RESadd, title: stats.RESAdd.name, value: 0 },
            SP: { cod: Codes.SP, title: stats.SpecialPts.name, value: 0 },
            STS: { cod: Codes.STS, title: stats.Stats.name, value: 0 },
            STSP: { cod: Codes.STSp, title: stats.StatsP.name, value: 0 },
            TAL: { cod: Codes.TAL, title: stats.Talent.name, value: 0 },
            VIT: { cod: Codes.VIT, title: stats.Health.name, value: 0 },
        }
    }

    public static itens(language: ILanguage): IItem[] {
        const itens = language.translations.itens;
        const titles = language.translations.titles
        const stsCodes = this.statsCodes(language);
        return [
            { name: itens.Amulet, attrs: [stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Rings, attrs: [stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Weapon, attrs: [stsCodes.APmin, stsCodes.APmax, stsCodes.AR, stsCodes.APadd, stsCodes.ARadd] },
            { name: itens.Armor, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: titles.BonusAdds, attrs: [stsCodes.AR, stsCodes.DEFadd, stsCodes.ABSadd, stsCodes.HPadd, stsCodes.MPadd, stsCodes.RESadd] },
            { name: itens.Boots, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.ABSadd] },
            { name: itens.Armlet, attrs: [stsCodes.DEF, stsCodes.AR, stsCodes.ARadd] },
            { name: itens.Shield, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: itens.Gauntlets, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.DEFadd, stsCodes.ABSadd] },
            { name: itens.Orbital, attrs: [stsCodes.DEF, stsCodes.ABS, stsCodes.MPadd, stsCodes.ABSadd] },
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
                bonus: [{ cod: Codes.AP, value: 180 }, { cod: Codes.AP, value: 15, percent: true }],
                force: { cod: Codes.Ordo, title: forces.Ordo },
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
            { cod: Codes.ABS, title: stats.Absorption.name },
            { cod: Codes.ABSadd, title: stats.AbsorptionAdd.name },
            { cod: Codes.AGI, title: stats.Agility.name },
            { cod: Codes.AP, title: stats.AttkPower.name },
            { cod: Codes.APadd, title: stats.AttkPowerAdd.name },
            { cod: Codes.APmax, title: stats.AttkPowerMax.name },
            { cod: Codes.APmin, title: stats.AttkPowerMin.name },
            { cod: Codes.AR, title: stats.AttkRating.name },
            { cod: Codes.ARadd, title: stats.AttkRatingAdd.name },
            { cod: Codes.DEF, title: stats.Defense.name },
            { cod: Codes.DEFadd, title: stats.DefenseAdd.name },
            { cod: Codes.EP, title: stats.ElitePts.name },
            { cod: Codes.FOR, title: stats.Strength.name },
            { cod: Codes.HP, title: stats.HP.name },
            { cod: Codes.HPadd, title: stats.HPAdd.name },
            { cod: Codes.INT, title: stats.Spirit.name },
            { cod: Codes.LVL, title: stats.Level.name },
            { cod: Codes.MP, title: stats.MP.name },
            { cod: Codes.MPadd, title: stats.MPAdd.name },
            { cod: Codes.RES, title: stats.RES.name },
            { cod: Codes.RESadd, title: stats.RESAdd.name },
            { cod: Codes.SP, title: stats.SpecialPts.name },
            { cod: Codes.STS, title: stats.Stats.name },
            { cod: Codes.STSp, title: stats.StatsP.name },
            { cod: Codes.TAL, title: stats.Talent.name },
            { cod: Codes.VIT, title: stats.Health.name },
        ]
    }
    
    public static bonusItens (language: ILanguage): Array<{ name: string, bonus: IBonus[]} > {
        return BonusItens.bonus(language);
    }

    public static bonusMixes (language: ILanguage): IMixes[] {
        return BonusMixes.bonus(language);
    }
}