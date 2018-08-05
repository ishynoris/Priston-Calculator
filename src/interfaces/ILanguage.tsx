export default interface ILanguage {
    title: string,
    translations: {
        boosters: {
            BigHeadPotion: string, CastleCrown: string
        }
        chars: {
            AS: string, ASS: string, ATS: string, FS: string, KS: string, 
            MGS: string, MS: string, PRS: string, PS: string, XS: string, WS: string, 
        },
        forces: {
            Bellum: string, Celesto: string, Devine: string, Enigma: string, Fadeo: string,
            Inferna: string, Ira: string, Lucidy: string, Mirage: string, Murky: string,
            Raident: string, Sereno: string, Sparky: string, Tera: string, Transparo: string,
            Vita: string,
        },
        itens: {
            Amulet: string, Armlet: string, Armor: string, Boots: string, Gauntlets: string, 
            Orbital: string, Rings: string, Shield: string, Weapon: string, 
        },
        select: {
            title: string,
        }
        stats: {
            Absorption: string, AbsorptionAdd: string, Agility: string, AttkPower: string, 
            AttkPowerAdd: string, AttkPowerMax: string, AttkPowerMin: string, AttkRating: string, 
            AttkRatingAdd: string, Defense: string, DefenseAdd: string, ElitePts: string, 
            HP: string, HPAdd: string, Health: string, Level: string, MP: string, MPAdd: string, 
            RES: string, RESAdd: string, SpecialPts: string, Spirit: string, Stats: string, 
            StatsP: string, Strength: string, Talent: string, 
        },
        titles: { 
            BonusAdds: string, Char: string, Equips: string, Results: string, 
            SelectChar: string, TwoHand: string,
            
        }
    },
    value: string
}