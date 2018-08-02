import IChar from '../../interfaces/IChar';
import ICharacterStatus from '../../interfaces/ICharacterStatus';
import IStatus from '../../interfaces/IStatus';

import Values from './Values';

const names = {
    Arqueira: "Arqueira",
    Assassina: "Assassina",
    Atalanta: "Atalanta",
    Cavaleiro: "Cavaleiro",
    Guerreira: "Guerreira",
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

const codes = Values.codes;
const charDetail: IChar[] = [
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.AGI, attrDiv: [codes.TAL], min: 4, max: 6 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fAgi: 0.5, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 0, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Arqueira,
        skills: [
            { codBonus: codes.AP, name: "Mestra do Tiro", percent: true, values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40] },
            { codBonus: codes.AR, name: "Olho de Dion", percent: true, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }, // Taxa do Arco
        ],
        stats: { lvl: 1, for: 17, int: 11, tal: 21, agi: 27, vit: 23 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Assassina,
        skills: [
            { codBonus: codes.AP, name: "Maestria em Adagas", percent: true, values: [0, 5, 7, 9, 11, 14, 17, 20, 23, 27, 31] },
            { codBonus: codes.ARtotal, name: "Maestria do Ataque", percent: true, values: [0, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62] },
            { codBonus: -1, name: "Maestria Fatal", values: [] },
        ],
        stats: { lvl: 1, for: 25, int: 10, tal: 22, agi: 20, vit: 22 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.AGI, attrDiv: [codes.TAL], min: 4, max: 6 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fAgi: 0.5, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Atalanta,
        skills: [
            { codBonus: codes.AP, name: "Maestra do Arremesso", percent: true, values: [0, 18, 22, 26, 30, 34, 38, 41, 44, 47, 50] }
        ],
        stats: { lvl: 1, for: 23, int: 15, tal: 19, agi: 19, vit: 23 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Cavaleiro,
        skills: [
            { codBonus: codes.RES, name: "Treinamento Físico", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 28, 30] },
            { codBonus: codes.AP, name: "Mestre das Espadas", percent: true, values: [0, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38] },
        ],
        stats: { lvl: 1, for: 26, int: 13, tal: 17, agi: 19, vit: 24 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Guerreira,
        skills: [ 
            { codBonus: codes.AP, name: "Maestria em Força", percent: true, values: [0, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46] },
            { codBonus: codes.RES, name: "Maestria em Resistência", percent: true, values: [0, 6, 12] }
        ],
        stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 20, vit: 24}
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 130, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Lutador,
        skills: [
            { codBonus: codes.AP, name: "Mestre das Armas", percent: true, values: [0, 6, 10, 14, 18, 21, 24, 26, 28, 30, 32] },
            // { codBonus: codes.HP, name: "Bônus de Vitalidade", values: [] },
        ],
        stats: { lvl: 1, for: 28, int: 6, tal: 21, agi: 17, vit: 27 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 150, attrFator: codes.INT, attrDiv: [codes.TAL], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
            MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Mago,
        skills: [
            { codBonus: codes.MP, name: "Mestre da Mente", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] }
        ],
        stats: { lvl: 1, for: 16, int: 29, tal: 19, agi: 14, vit: 21 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: -1, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 3, max: 5 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.6, fVit: 2.2, add: -5 },
            MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Mecanico,
        skills: [
            { codBonus: codes.AP, name: "Mestre dos Mecânicos", percent: true, values: [0, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41] }
        ],
        stats: { lvl: 1, for: 24, int: 8, tal: 25, agi: 18, vit: 24 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: -1, attrFator: codes.FOR, attrDiv: [codes.TAL, codes.AGI], min: 3, max: 5 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -5 },
            MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Pikeman,
        skills: [],
        stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 19, vit: 25 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: 170, attrFator: codes.INT, attrDiv: [codes.TAL], min: 2, max: 4 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
            MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Sacerdotisa,
        skills: [],
        stats: { lvl: 1, for: 15, int: 28, tal: 21, agi: 15, vit: 20 },
    },
    {
        asSkills: toSkills,
        formula: {
            ABS: { fLvl: 0.1, fFor: 0.025, fTal: 0.025, add: 0 },
            AP: { fFator: -1, attrFator: codes.INT, attrDiv: [codes.TAL], min: 1, max: 3 },
            AR: { fLvl: 1.9, fTal: 1.5, fAgi: 3.1, add: 0 },
            DEF: { fLvl: 1.4, fTal: 0.25, fAgi: 0.5, add: 0 },
            HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
            MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
            RES: { fLvl: 2.3, fFor: 0.5, fInt: 1, fTal: 0.5, fVit: 1.4, add: 80 }
        },
        name: names.Xama,
        skills: [
            { codBonus: codes.MP, name: "Paz Interior", percent: true, values: [0, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31] },
            { codBonus: codes.HP, name: "Vida Divina", percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] },
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