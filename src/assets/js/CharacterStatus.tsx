import IChar from '../../interfaces/IChar';
import IDefaultStatus from '../../interfaces/IDefaultStatus';
import IStatus from '../../interfaces/IStatus';

import Script from './Script';
import Values from './Values';

const chars = {
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
    { name: chars.Arqueira },
    { name: chars.Assassina },
    { name: chars.Atalanta },
    { name: chars.Cavaleiro },
    { name: chars.Lutador },
    { name: chars.Mago },
    { name: chars.Mecanico },
    { name: chars.Pikeman },
    { name: chars.Sacerdotisa },
    { name: chars.Xama },
]

function toSkills(stats: IDefaultStatus) {
    const codes = Script.codes;
    return Values.status.map(s => {
        const defValue = s.cod === codes.LVL ? 1
            : s.cod === codes.FOR ? stats.for
            : s.cod === codes.INT ? stats.int
            : s.cod === codes.AGI ? stats.agi
            : s.cod === codes.TAL ? stats.tal
            : s.cod === codes.VIT ? stats.vit
            : -1;
        return {
            default: defValue,
            disable: (s.cod === codes.STS),
            name: s.title,
        }
    }) as IStatus[];
}

const charsValues: IChar[] = [
    {
        asSkills: toSkills,
        defaultStats: { for: 17, int: 11, tal: 21, agi: 27, vit: 23 },
        name: chars.Arqueira,
        skills: [
            { name: "Mestra do Tiro", percent: true, values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40] },
            { name: "Olho de Dion", percent: true, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 25, int: 10, tal: 22, agi: 20, vit: 22 },
        name: chars.Assassina,
        skills: [
            { name: "Maestria em Adagas", percent: true, values: [] },
            { name: "Maestria do Ataque", values: [] },
            { name: "Maestria Fatal", values: [] },
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 23, int: 15, tal: 19, agi: 19, vit: 23 },
        name: chars.Atalanta,
        skills: [
            { name: "Maestra do Arremesso", percent: true, values: [] }
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 26, int: 13, tal: 17, agi: 19, vit: 24 },
        name: chars.Cavaleiro,
        skills: [
            { name: "Treinamento Físico", values: [] }, // TODO
            { name: "Mestre das Espadas", percent: true, values: [] },
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 28, int: 6, tal: 21, agi: 18, vit: 27 },
        name: chars.Lutador,
        skills: [
            { name: "Mestre das Armas", percent: true, values: [] },
            { name: "Bônus de Vitalidade", values: [] },
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 16, int: 29, tal: 19, agi: 14, vit: 21 },
        name: chars.Mago,
        skills: [{ name: "Mestre da Mente", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] }]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 24, int: 8, tal: 25, agi: 18, vit: 24 },
        name: chars.Mecanico,
        skills: [
            { name: "Resistência a Veneno", values: [] },
            { name: "Mestre dos Mecânicos", percent: true, values: [] }
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 26, int: 9, tal: 20, agi: 19, vit: 25 },
        name: chars.Pikeman,
        skills: [
            { name: "Resistência de Gelo", values: [] },
            { name: "Mestre da Defesa", values: [] },
            { name: "Mestre do Ataque Crítico", values: [] },
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 15, int: 28, tal: 21, agi: 15, vit: 20 },
        name: chars.Sacerdotisa,
        skills: [
            { name: "Meditação", values: [] }, // TODO
        ]
    },
    {
        asSkills: toSkills,
        defaultStats: { for: 15, int: 27, tal: 20, agi: 15, vit: 22 },
        name: chars.Xama,
        skills: [
            { name: "Paz Interior", percent: true, values: [0, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31] },
            { name: "Vida Divina", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] },
        ]
    },
]

const values = {
    nameChar: chars,
    names: nameList,
    status: charsValues
}

export default values;