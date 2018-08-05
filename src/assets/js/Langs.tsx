import IKeyValue from '../../interfaces/IKeyValue';
import ILanguage from "../../interfaces/ILanguage";

const add = " (+add)"
const langs: ILanguage[] = [
    { 
        title: "Português", 
        translations: {
            boosters: {
                BigHeadPotion: "Cabeção", CastleCrown: "Coroa Castelo Bless",
            },
            chars: {
                AS: "Arqueira", ASS: "Assassina", ATS: "Atalanta", FS: "Lutador", KS: "Cavaleiro", 
                MGS: "Mago", MS: "Mecânico", PRS: "Sacerdotisa", PS: "Pikeman", WS: "Guerreira", XS: "Xama", 
            },
            forces: {
                Bellum: "Bellum",
                Celesto: "Celesto",
                Devine: "Devine",
                Enigma: "Enigma",
                Fadeo: "Fadeo",
                Inferna: "Inferna",
                Ira: "Ira",
                Lucidy: "Lucidy",
                Mirage: "Mirage",
                Murky: "Murky",
                Raident: "Raident",
                Sereno: "Sereno",
                Sparky: "Sparky",
                Tera: "Tera",
                Transparo: "Transparo",
                Vita: "Vita",
            },
            itens: {
                Amulet: "Amuleto",
                Armlet: "Bracelete",
                Armor: "Armadura",
                Boots: "Bota",
                Gauntlets: "Luva",
                Orbital: "Orbital",
                Rings: "Aneis",
                Shield: "Escudo",
                Weapon: "Arma"
            },
            select: {
                title: "Selecione um idioma"
            },
            stats: {
                Absorption: "Absorção",
                AbsorptionAdd: "Absorção" + add,
                Agility: "Agilidade",
                AttkPower: "Poder de Ataque",
                AttkPowerAdd: "Poder de Ataque" + add,
                AttkPowerMax: "Poder de Ataque (max)",
                AttkPowerMin: "Poder de Ataque (min)",
                AttkRating: "Taxa de Ataque",
                AttkRatingAdd: "Taxa de Ataque" + add,
                Defense: "Defesa",
                DefenseAdd: "Defesa" + add,
                ElitePts: "Pontos de Elite",
                HP: "HP",
                HPAdd: "HP" + add,
                Health: "Vitalidade",
                Level: "Nível",
                MP: "MP",
                MPAdd: "MP" + add,
                RES: "RES",
                RESAdd: "RES" + add,
                SpecialPts: "Pontos Especiais",
                Spirit: "Inteligência",
                Stats: "Status",
                StatsP: "Status (bonus)",
                Strength: "Força",
                Talent: "Talento",
            },
            titles: {
                BonusAdds: "Bonus e adicionais", Char: "Personagens", Equips: "Equipamentos", 
                Results: "Resultados", SelectChar: "Selecione um personagem", TwoHand: "Duas mãos", 
            }
        },
        value: "ptbr",  
    },
    {
        title: "English", 
        translations: {
            boosters: {
                BigHeadPotion: "Big Head Potion", CastleCrown: "Bless Castle Crown",
            },
            chars: {
                AS: "Archer", ASS: "Assassin", ATS: "Atalanta", FS: "Fighter", KS: "Knight", MGS: "Mage", 
                MS: "Mechanician", PRS: "Priestess", PS: "Pikeman", WS: "Warrior", XS: "Shaman", 
            },
            forces: {
                Bellum: "Bellum",
                Celesto: "Celesto",
                Devine: "Devine",
                Enigma: "Enigma",
                Fadeo: "Fadeo",
                Inferna: "Inferna",
                Ira: "Ira",
                Lucidy: "Lucidy",
                Mirage: "Mirage",
                Murky: "Murky",
                Raident: "Raident",
                Sereno: "Sereno",
                Sparky: "Sparky",
                Tera: "Tera",
                Transparo: "Transparo",
                Vita: "Vita",
            },
            itens: {
                Amulet: "Amulet",
                Armlet: "Armlet",
                Armor: "Armor",
                Boots: "Boots",
                Gauntlets: "Gauntlets",
                Orbital: "Orbital",
                Rings: "Rings",
                Shield: "Shield",
                Weapon: "Weapon"
            },
            select: {
                title: "Select a language"
            },
            stats: {
                Absorption: "Absorption",
                AbsorptionAdd: "Absorption" + add,
                Agility: "Agility",
                AttkPower: "Attack Power",
                AttkPowerAdd: "Attack Power" + add,
                AttkPowerMax: "Attack Power (max)",
                AttkPowerMin: "Attack Power (min)",
                AttkRating: "Attack Rating",
                AttkRatingAdd: "Attack Rating" + add,
                Defense: "Defense",
                DefenseAdd: "Defense" + add,
                ElitePts: "Elite Points",
                HP: "HP",
                HPAdd: "HP" + add,
                Health: "Health",
                Level: "Level",
                MP: "MP",
                MPAdd: "MP" + add,
                RES: "RES",
                RESAdd: "RES" + add,
                SpecialPts: "Special Points",
                Spirit: "Spirit",
                Stats: "Status",
                StatsP: "Status (bonus)",
                Strength: "Strength",
                Talent: "Talent",
            },
            titles: {
                BonusAdds: "Bonus adds", Char: "Characters", Equips: "Equipments",  
                Results: "Results", SelectChar: "Select a char", TwoHand: "Two hands", 
            }
        },
        value: "en",  
    },
]
const getLang = (langValue: string): ILanguage | undefined => {
    return langs.find(l => {
        return l.value === langValue;
    })
}
const langsDesc = (): IKeyValue[] => {
    const desc: IKeyValue[] = []
    langs.forEach(l => {
        desc.push({ key: l.title, value: l.value })
    })
    return desc
};

export default { 
    "default": "ptbr",
    "getLang": getLang,
    "langs": langs,
    "langsDesc": langsDesc,
}