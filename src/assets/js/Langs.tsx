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
                Shelton: "Shelton",
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
                Bonus: "Bonus / Adicionais",
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
        },
        value: "ptbr",  
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