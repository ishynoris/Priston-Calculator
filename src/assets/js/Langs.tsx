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
            quests:{
                q100: "Nível 100 - Fantasma do Fúria", 
                q110: "Nível 110", 
                q118: "Nível 118", 
                q123: "Nível 123",
                q20: "Nível 20 (1º desafio de classe)", 
                q30: "Nível 30 - Por Ela", 
                q40: "Nível 40 (2º desafio de classe)", 
                q55: "Nível 55 - A Caverna", 
                q60: "Nível 60 (3º desafio de classe)", 
                q70: "Nível 70 - A Amizade de Michelle",
                q80a: "Nível 80 (4º desafio de classe)", 
                q80b: "Nível 80 - O Fúria Aprisionado", 
                q80c: "Nível 80 - O Teste da Realeza", 
                q85: "Nível 85 - As Lágrimas de Calliar", 
                q90a: "Nível 90 - A Vila Eura", 
                q90b: "Nível 90 - Desafio Amargo", 
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
                BonusAP: "Bonus de Dano", BonusAdds: "Bonus e adicionais", CalcBtn: "Voltar para calculadora", 
                Char: "Personagens", Equips: "Equipamentos", LastQuest: "Ultima quest realizada", Quests: "Quests", 
                ReleasesBtn: "Notas de atualizações", Results: "Resultados", SelectChar: "Selecione um personagem", 
                SelectLang: "Selecione um idioma", Skills: "Habilidades", TwoHand: "Duas mãos", 
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
            quests:{
                q100: "Level 100 - Illusion of Fury", 
                q110: "Level 110", 
                q118: "Level 118", 
                q123: "Level 123",
                q20: "Level 20 (1st Job Quest)", 
                q30: "Level 30 - For Her", 
                q40: "Level 40 (2nd Job Quest)", 
                q55: "Level 55 - The Cave", 
                q60: "Level 60 (3rd Job Quest)", 
                q70: "Level 70 - Friendship With Michell",
                q80a: "Level 80 (4th Job Quest)", 
                q80b: "Level 80 - Sealed Fury", 
                q80c: "Level 80 - Test of Kingdom", 
                q85: "Level 85 - Tears of Kalia", 
                q90a: "Level 90 - Eura Village", 
                q90b: "Level 90 - Bitter Ordeal", 
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
                BonusAP: "Damage Boosters", BonusAdds: "Bonus adds", CalcBtn: "Back to Calculator", Char: "Characters", Equips: "Equipments",  
                LastQuest: "Last Quest", Quests: "Quests", ReleasesBtn: "Release Notes", Results: "Results", 
                SelectChar: "Select a char", SelectLang: "Select Language", Skills: "Skills", TwoHand: "Two hands", 
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