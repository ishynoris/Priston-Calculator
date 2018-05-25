import IChar from '../../interfaces/IChar';
import ICharacterStatus from '../../interfaces/ICharacterStatus';
import IStatus from '../../interfaces/IStatus';

import Values from './Values';

const names = {
    Arqueira: "Arqueira",
    Assassina: "Assassina",
    Atalanta: "Atalanta",
    Cavaleiro: "Cavaleiro",
    Lutador: "Lutador",
    Mago: "Mago",
    Mecanico: "Mecânico",
    Pikeman: "Pikeman",
    Sacerdotisa: "Sacerdotisa",
    Xama: "Xamã"
}

const nameList = [
    { name: names.Arqueira },
    { name: names.Assassina },
    { name: names.Atalanta },
    { name: names.Cavaleiro },
    { name: names.Lutador },
    { name: names.Mago },
    { name: names.Mecanico },
    { name: names.Pikeman },
    { name: names.Sacerdotisa },
    { name: names.Xama },
]

function toSkills(stats: ICharacterStatus) {

    return Values.status.map(s => {
        const defValue = s.cod === Values.codes.LVL ? stats.lvl
            : s.cod === Values.codes.FOR ? stats.for
            : s.cod === Values.codes.INT ? stats.int
            : s.cod === Values.codes.AGI ? stats.agi
            : s.cod === Values.codes.TAL ? stats.tal
            : s.cod === Values.codes.VIT ? stats.vit
            : -1;
        return {
            default: defValue,
            disable: (s.cod === Values.codes.STS),
            name: s.title,
        }
    }) as IStatus[];
}

const charDetail: IChar[] = [
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 10, fFor: 40, fTal: 36.36, fAgi: 200, add: 0 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 0, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Arqueira,
        skills: [
            { name: "Mestra do Tiro", percent: true, values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40] },
            { name: "Olho de Dion", percent: true, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
        ],
        stats: { lvl: 113, for: 80, int: 66, tal: 85, agi: 510, vit: 23 },
    },
    {
        asSkills: toSkills,
        name: names.Assassina,
        skills: [
            { name: "Maestria em Adagas", percent: true, values: [] },
            { name: "Maestria do Ataque", values: [] },
            { name: "Maestria Fatal", values: [] },
        ],
        stats: { lvl: 1, for: 25, int: 10, tal: 22, agi: 20, vit: 22 },
    },
    {
        asSkills: toSkills,
        name: names.Atalanta,
        skills: [
            { name: "Maestra do Arremesso", percent: true, values: [] }
        ],
        stats: { lvl: 1, for: 23, int: 15, tal: 19, agi: 19, vit: 23 },
    },
    {
        asSkills: toSkills,
        name: names.Cavaleiro,
        skills: [
            { name: "Treinamento Físico", values: [] }, // TODO
            { name: "Mestre das Espadas", percent: true, values: [] },
        ],
        stats: { lvl: 1, for: 26, int: 13, tal: 17, agi: 19, vit: 24 },
    },
    {
        asSkills: toSkills,
        name: names.Lutador,
        skills: [
            { name: "Mestre das Armas", percent: true, values: [] },
            { name: "Bônus de Vitalidade", values: [] },
        ],
        stats: { lvl: 1, for: 28, int: 6, tal: 21, agi: 18, vit: 27 },
    },
    {
        asSkills: toSkills,
        name: names.Mago,
        skills: [
            { name: "Mestre da Mente", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] }
        ],
        stats: { lvl: 1, for: 16, int: 29, tal: 19, agi: 14, vit: 21 },
    },
    {
        asSkills: toSkills,
        name: names.Mecanico,
        skills: [
            { name: "Resistência a Veneno", values: [] },
            { name: "Mestre dos Mecânicos", percent: true, values: [] }
        ],
        stats: { lvl: 1, for: 24, int: 8, tal: 25, agi: 18, vit: 24 },
    },
    {
        asSkills: toSkills,
        name: names.Pikeman,
        skills: [
            { name: "Resistência de Gelo", values: [] },
            { name: "Mestre da Defesa", values: [] },
            { name: "Mestre do Ataque Crítico", values: [] },
        ],
        stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 19, vit: 25 },
    },
    {
        asSkills: toSkills,
        name: names.Sacerdotisa,
        skills: [
            { name: "Meditação", values: [] }, // TODO
        ],
        stats: { lvl: 1, for: 15, int: 28, tal: 21, agi: 15, vit: 20 },
    },
    {
        asSkills: toSkills,
        name: names.Xama,
        skills: [
            { name: "Paz Interior", percent: true, values: [0, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31] },
            { name: "Vida Divina", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] },
        ],
        stats: { lvl: 1, for: 15, int: 27, tal: 20, agi: 15, vit: 22 },
    },
]

const values = {
    "charDetail": charDetail,
    "names": names,
    "namesList": nameList,
}

export default values;