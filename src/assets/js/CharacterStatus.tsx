import IChar from "../../interfaces/IChar";
import ILanguage from "../../interfaces/ILanguage";
import Codes from './Codes';

export default class CharacterStatus {
    
    public static chars(language: ILanguage): IChar[] {
        const AS = language.translations.chars.AS;
        const ASS = language.translations.chars.ASS;
        const ATS = language.translations.chars.ATS;
        const KS = language.translations.chars.KS;
        const WS = language.translations.chars.WS;
        const FS = language.translations.chars.FS;
        const MGS = language.translations.chars.MGS;
        const MS = language.translations.chars.MS;
        const PS = language.translations.chars.PS;
        const PRS = language.translations.chars.PRS;
        const XS = language.translations.chars.XS;
        return [
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.AGI, fDiv:40, attrDiv: [Codes.TAL], min: 4, max: 6 },
                    HP: { fLvl: 2.1, fAgi: 0.5, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                name: AS.name,
                skills: [
                    { codBonus: Codes.AP, name: AS.skills.ShootMaster, percent: true, values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40] },
                    { codBonus: Codes.AR, name: AS.skills.DionEye, percent: true, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }, // Taxa do Arco
                ],
                stats: { lvl: 1, for: 17, int: 11, tal: 21, agi: 27, vit: 23 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                name: ASS.name,
                skills: [
                    { codBonus: Codes.AP, name: ASS.skills.BladeMaster, percent: true, values: [0, 5, 7, 9, 11, 14, 17, 20, 23, 27, 31] },
                    { codBonus: Codes.ARtotal, name: ASS.skills.AttkMaster, percent: true, values: [0, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62] },
                    { codBonus: -1, name: ASS.skills.FatalMaster, values: [] },
                ],
                stats: { lvl: 1, for: 25, int: 10, tal: 22, agi: 20, vit: 22 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.AGI, fDiv:40, attrDiv: [Codes.TAL], min: 4, max: 6 },
                    HP: { fLvl: 2.1, fAgi: 0.5, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                name: ATS.name,
                skills: [
                    { codBonus: Codes.AP, name: ATS.skills.ThrowMaster, percent: true, values: [0, 18, 22, 26, 30, 34, 38, 41, 44, 47, 50] }
                ],
                stats: { lvl: 1, for: 23, int: 15, tal: 19, agi: 19, vit: 23 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                name: KS.name,
                skills: [
                    { codBonus: Codes.RES, name: KS.skills.PhisicalTrain, percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 28, 30] },
                    { codBonus: Codes.AP, name: KS.skills.SwordMaster, percent: true, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
                ],
                stats: { lvl: 1, for: 26, int: 13, tal: 17, agi: 19, vit: 24 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                name: WS.name,
                skills: [ 
                    { codBonus: Codes.AP, name: WS.skills.StrMaster, percent: true, values: [0, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46] },
                    { codBonus: Codes.RES, name: WS.skills.PhisicalMaster, percent: true, values: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60] }
                ],
                stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 20, vit: 24}
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                name: FS.name,
                skills: [
                    { codBonus: Codes.AP, name: FS.skills.WeaponMaster, percent: true, values: [0, 6, 10, 14, 18, 21, 24, 26, 28, 30, 32] },
                    // { codBonus: Codes.HP, name: "Bônus de Vitalidade", values: [] },
                ],
                stats: { lvl: 1, for: 28, int: 6, tal: 21, agi: 17, vit: 27 },
            },
            {
                formula: {
                    AP: { fFator: 150, attrFator: Codes.INT, fDiv:30, attrDiv: [Codes.TAL], min: 2, max: 4 },
                    HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
                    MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
                },
                name: MGS.name,
                skills: [
                    { codBonus: Codes.MP, name: MGS.skills.MentalMaster, percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] }
                ],
                stats: { lvl: 1, for: 16, int: 29, tal: 19, agi: 14, vit: 21 },
            },
            {
                formula: {
                    AP: { fFator: 150, attrFator: Codes.FOR, fDiv:45, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.6, fVit: 2.2, add: -5 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                name: MS.name,
                skills: [
                    { codBonus: Codes.AP, name: MS.skills.MechMaster, percent: true, values: [0, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41] }
                ],
                stats: { lvl: 1, for: 24, int: 8, tal: 25, agi: 18, vit: 24 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                name: PS.name,
                skills: [],
                stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 19, vit: 25 },
            },
            {
                formula: {
                    AP: { fFator: 170, attrFator: Codes.INT, fDiv:30, attrDiv: [Codes.TAL], min: 2, max: 4 },
                    HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
                    MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
                },
                name: PRS.name,
                skills: [],
                stats: { lvl: 1, for: 15, int: 28, tal: 21, agi: 15, vit: 20 },
            },
            {
                formula: {
                    AP: { fFator: 150, attrFator: Codes.INT, fDiv: 30, attrDiv: [Codes.TAL], min: 2, max: 4 },
                    HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
                    MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
                },
                name: XS.name,
                skills: [
                    { codBonus: Codes.MP, name: XS.skills.InnerPeace, percent: true, values: [0, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31] },
                    { codBonus: Codes.HP, name: XS.skills.DivineLife, percent: true, values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] },
                ],
                stats: { lvl: 1, for: 15, int: 27, tal: 20, agi: 15, vit: 22 },
            },
        ]
    }
}
