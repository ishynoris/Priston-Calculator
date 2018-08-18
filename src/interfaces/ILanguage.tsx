interface IStatsName { name: string, short: string }

export default interface ILanguage {
    contact: string,
    developed: string,
    title: string,
    translations: {
        boosters: {
            BigHeadPotion: string, CastleCrown: string
        }
        chars: {
            AS: { name: string, skills: { DionEye: string, ShootMaster: string } }, 
            ASS: { name: string, skills: { BladeMaster: string, AttkMaster: string, FatalMaster: string } }, 
            ATS: { name: string, skills: { ThrowMaster: string } }, 
            FS: { name: string, skills: { WeaponMaster: string } }, 
            KS: { name: string, skills: { PhisicalTrain: string, SwordMaster: string } }, 
            MGS: { name: string, skills: { MentalMaster: string } }, 
            MS: { name: string, skills: { MechMaster: string } }, 
            PRS: { name: string, skills: { } }, 
            PS: { name: string, skills: { } }, 
            WS: { name: string, skills: { StrMaster: string, PhisicalMaster: string } }, 
            XS: { name: string, skills: { InnerPeace: string, DivineLife: string } }, 
        },
        forces: {
            Bellum: string, Celesto: string, Devine: string, Enigma: string, Fadeo: string,
            Inferna: string, Ira: string, Lucidy: string, Mirage: string, Murky: string, Ordo: string
            Raident: string, Sereno: string, Sparky: string, Tera: string, Transparo: string,
            Vita: string,
        },
        itens: {
            Amulet: string, Armlet: string, Armor: string, Boots: string, Gauntlets: string, 
            Orbital: string, Rings: string, Shield: string, Weapon: string, 
        },
        quests:{
            q20: string, q30: string, q40: string, q55: string, q60: string, q70: string,
            q80a: string, q80b: string, q80c: string, q85: string, q90a: string, q90b: string, 
            q100: string, q110: string, q118: string, q123: string
        },
        stats: {
            Absorption: IStatsName, AbsorptionAdd: IStatsName, Agility: IStatsName, AttkPower: IStatsName, 
            AttkPowerAdd: IStatsName, AttkPowerMax: IStatsName, AttkPowerMin: IStatsName, AttkRating: IStatsName, 
            AttkRatingAdd: IStatsName, Defense: IStatsName, DefenseAdd: IStatsName, ElitePts: IStatsName, 
            HP: IStatsName, HPAdd: IStatsName, Health: IStatsName, Level: IStatsName, MP: IStatsName, MPAdd: IStatsName, 
            RES: IStatsName, RESAdd: IStatsName, SpecialPts: IStatsName, Spirit: IStatsName, Stats: IStatsName, 
            StatsP: IStatsName, Strength: IStatsName, Talent: IStatsName, 
        },
        titles: { 
            BonusAdds: string,  BonusAP: string, CalcBtn: string, Char: string, Equips: string, FormulaBtn: string,            LastQuest: string, Quests: string, ReleasesBtn: string, Results: string, SelectChar: string, 
            SelectLang: string, Skills: string, TwoHand: string, 
        }
    },
    value: string
}