import IKeyValue from '../../interfaces/IKeyValue';
import ILanguage from "../../interfaces/ILanguage";

const add = " (+add)"
const langs: ILanguage[] = [
    { 
        contact: "Encontrou algum erro? Quer sugerir alguma alteração? Entre em contato.",
        developed: "Desenvolvido por",
        title: "Português", 
        translations: {
            boosters: {
                BigHeadPotion: "Cabeção", CastleCrown: "Coroa Castelo Bless",
            },
            chars: {
                AS: { name:"Arqueira", skills: { ShootMaster: "Mestra do Tiro", DionEye: "Olho de Dion" }}, 
                ASS: { name: "Assassina", skills: { BladeMaster: "Mestra das Laminas", AttkMaster: "Mestra do Ataque ", FatalMaster: "Mestra" } }, 
                ATS: { name: "Atalanta", skills: { ThrowMaster: "Mestra do Arremesso", } }, 
                FS: { name: "Lutador", skills: { WeaponMaster: "Mestre das Armas" } }, 
                KS: { name: "Cavaleiro", skills: { PhisicalTrain: "Treinamento Físico", SwordMaster: "Mestre das Espadas" } }, 
                MGS: { name: "Mago", skills: { MentalMaster: "Mestre da Mente" } }, 
                MS: { name: "Mecânico", skills: { MechMaster: "Mestre das Armas Mecânicas" } }, 
                PRS: { name: "Sacerdotisa", skills: {} }, 
                PS: { name: "Pikeman", skills: {} }, 
                WS: { name: "Guerreira", skills: { StrMaster: "Mestra da Força", PhisicalMaster: "Mestra em Resistência" } }, 
                XS: { name: "Xama", skills: { InnerPeace: "Paz Interior", DivineLife: "Vida Divina" } }, 
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
                Ordo: "Ordo",
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
                Absorption: { name: "Absorção", short: "ABS" },
                AbsorptionAdd: { name: "Absorção" + add, short: "ABS-ad" },
                Agility: { name: "Agilidade", short: "AGI" },
                AttkPower: { name: "Poder de Ataque", short: "PAtq-mi" },
                AttkPowerAdd: { name: "Poder de Ataque" + add, short: "PAtq-ad" },
                AttkPowerMax: { name: "Poder de Ataque (max)", short: "PAtq-ma" },
                AttkPowerMin: { name: "Poder de Ataque (min)", short: "PAtq-mi" },
                AttkRating: { name: "Taxa de Ataque", short: "TxAtq" },
                AttkRatingAdd: { name: "Taxa de Ataque" + add, short: "TxAtq-ad"},
                Defense: { name: "Defesa", short: "DEF" },
                DefenseAdd: { name: "Defesa" + add, short: "DEF-ad"},
                ElitePts: { name: "Pontos de Elite", short: "PEli" },
                HP: { name: "HP", short: "HP" },
                HPAdd: { name: "HP" + add, short: "HP-ad" },
                Health: { name: "Vitalidade", short: "VIT" },
                Level: { name: "Nível", short: "NVL" },
                MP: { name: "MP", short: "MP" },
                MPAdd: { name: "MP" + add, short: "MP-ad"},
                RES: { name: "RES", short: "RES" },
                RESAdd: { name: "RES" + add, short: "RES-ad" },
                SpecialPts: { name: "Pontos Especiais", short: "PEsp" },
                Spirit: { name: "Inteligência", short: "INT" },
                Stats: { name: "Status", short: "STS" },
                StatsP: { name: "Status (bonus)", short: "STS-bs" },
                Strength: { name: "Força", short: "FOR" },
                Talent: { name: "Talento", short: "TAL" },
            },
            titles: {
                BonusAP: "Bonus de Dano", BonusAdds: "Bonus e adicionais", CalcBtn: "Voltar para calculadora", 
                Char: "Personagens", Equips: "Equipamentos", FormulaBtn: "Fórmulas", LastQuest: "Ultima quest realizada", Quests: "Quests", 
                ReleasesBtn: "Notas de atualizações", Results: "Resultados", SelectChar: "Selecione um personagem", 
                SelectLang: "Selecione um idioma", Skills: "Habilidades", TwoHand: "Duas mãos", 
            }
        },
        value: "ptbr",  
    },
    {
        contact: "Did you found some error? Any suggestion? Contact me.",
        developed: "Developed by",
        title: "English", 
        translations: {
            boosters: {
                BigHeadPotion: "Big Head Potion", CastleCrown: "Bless Castle Crown",
            },
            chars: {
                AS: { name:"Archer", skills: { ShootMaster: "Shooting Master", DionEye: "Dion's Eye" }}, 
                ASS: { name: "Assassin", skills: { BladeMaster: "Blade Master", AttkMaster: "Attack Master ", FatalMaster: "Fatal Master" } }, 
                ATS: { name: "Atalanta", skills: { ThrowMaster: "Throwing Master", } }, 
                FS: { name: "Fighter", skills: { WeaponMaster: "Weapon Master" } }, 
                KS: { name: "Knight", skills: { PhisicalTrain: "Phisical Training", SwordMaster: "Sword Master" } }, 
                MGS: { name: "Mage", skills: { MentalMaster: "Mental Master" } }, 
                MS: { name: "Mechanician", skills: { MechMaster: "Mechanican Master" } }, 
                PRS: { name: "Priestess", skills: {} }, 
                PS: { name: "Pikeman", skills: {} }, 
                WS: { name: "Warrior", skills: { StrMaster: "Strength Master", PhisicalMaster: "Phisical Master" } }, 
                XS: { name: "Shaman", skills: { InnerPeace: "Inner Peace", DivineLife: "Divine Life" } }, 
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
                Ordo: "Ordo",
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
                Absorption: { name: "Absorption", short: "ABS" },
                AbsorptionAdd: { name: "Absorption" + add, short: "ABS-ad" },
                Agility: { name: "Agility", short: "agi" },
                AttkPower: { name: "Attack Power", short: "AtkP" },
                AttkPowerAdd: { name: "Attack Power" + add, short: "AtkP-ad" },
                AttkPowerMax: { name: "Attack Power (max)", short: "AtkP-ma" },
                AttkPowerMin: { name: "Attack Power (min)", short: "AtkP-mi" },
                AttkRating: { name: "Attack Rating", short: "AtkR" },
                AttkRatingAdd: { name: "Attack Rating" + add, short: "AtkR-ad" },
                Defense: { name: "Defense", short: "DEF" },
                DefenseAdd: { name: "Defense" + add, short: "DEF-ad" },
                ElitePts: { name: "Elite Points", short: "EltP" },
                HP: { name: "HP", short: "HP" },
                HPAdd: { name: "HP" + add, short: "HP-ad" },
                Health: { name: "Health", short: "HLTH" },
                Level: { name: "Level", short: "LVL" },
                MP: { name: "MP", short: "MP" },
                MPAdd: { name: "MP" + add, short: "MP-ad" },
                RES: { name: "RES", short: "RES" },
                RESAdd: { name: "RES" + add, short: "RES-ad" },
                SpecialPts: { name: "Special Points", short: "SpcP" },
                Spirit: { name: "Spirit", short: "SPT" },
                Stats: { name: "Status", short: "STS" },
                StatsP: { name: "Status (bonus)", short: "STS-bs" },
                Strength: { name: "Strength", short: "STR" },
                Talent: { name: "Talent", short: "TAL" },
            },
            titles: {
                BonusAP: "Damage Boosters", BonusAdds: "Bonus adds", CalcBtn: "Back to Calculator", Char: "Characters", Equips: "Equipments",  
                FormulaBtn: "Formulas", LastQuest: "Last Quest", Quests: "Quests", ReleasesBtn: "Release Notes", Results: "Results", 
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