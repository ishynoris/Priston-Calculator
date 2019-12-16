import IChar from "../../interfaces/IChar";
import ILanguage from "../../interfaces/ILanguage";
import Codes from './Codes';

export default class CharacterStatus {
    
    public static chars(language: ILanguage): IChar[] {
        const attr = (name: string) => {
            const stats = language.translations.stats;
            return name === AS.name || name === ATS.name ? stats.Agility.short
                : name === MGS.name || name === PRS.name || name === XS.name ? stats.Spirit.short
                : stats.Strength.short;
        } 
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
                mainAttr: attr(AS.name),
                name: AS.name,
                skills: [
					{ 
						adds: [
							{
								cod: Codes.AP,
								percent: true,
								values: [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
							}
						], 
						name: AS.skills.ShootMaster, 
					},
					{ 
						adds: [{
							cod: Codes.AR, 
							percent: true,
							values: [ 0, 22, 44, 66, 88, 110, 132, 154, 176, 198, 220 ]
						}], 
						name: AS.skills.DionEye,
					},
                ],
                stats: { lvl: 1, for: 17, int: 11, tal: 21, agi: 27, vit: 23 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                mainAttr: attr(ASS.name),
                name: ASS.name,
                skills: [
					{ 
						adds: [{
							cod: Codes.AP, 
							percent: true,
							values: [ 0, 5, 7, 9, 11, 14, 17, 20, 23, 27, 31 ]
						}],
						name: ASS.skills.BladeMaster
					},
					{ 
						adds: [{
							cod: Codes.ARtotal, 
							percent: true,
							values: [0, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62 ]
						}],
						name: ASS.skills.AttkMaster
					},
					{ 
						adds: [],
						name: ASS.skills.FatalMaster, 
					}
                ],
                stats: { lvl: 1, for: 25, int: 10, tal: 22, agi: 20, vit: 22 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.AGI, fDiv:40, attrDiv: [Codes.TAL], min: 4, max: 6 },
                    HP: { fLvl: 2.1, fAgi: 0.5, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                mainAttr: attr(ATS.name),
                name: ATS.name,
                skills: [
					{ 
						adds: [{
							cod: Codes.AP, 
							percent: true, 
							values: [ 0, 18, 22, 26, 30, 34, 38, 41, 44, 47, 50 ]
						}],
						name: ATS.skills.ThrowMaster,  }
				],
                stats: { lvl: 1, for: 23, int: 15, tal: 19, agi: 19, vit: 23 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.7, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                mainAttr: attr(KS.name),
                name: KS.name,
                skills: [
					{ 
						adds: [{
							cod: Codes.RES, 
							percent: true, 
							values: [ 0, 5, 8, 11, 14, 17, 20, 23, 26, 28, 30 ]
						}],
						name: KS.skills.PhisicalTrain, 
					},
					{ 
						adds: [{
							cod: Codes.AP, 
							percent: true, 
							values: [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
						}],
						name: KS.skills.SwordMaster, 
					},
				],
                stats: { lvl: 1, for: 26, int: 13, tal: 17, agi: 19, vit: 24 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                mainAttr: attr(WS.name),
                name: WS.name,
                skills: [ 
					{ 
						adds: [{
							cod: Codes.AP, 
							percent: true,  
							values: [0, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46] 
						}],
						name: WS.skills.StrMaster
					},
					{
						adds: [{
							cod: Codes.RES, 
							percent: true, 
							values: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
						}],
						name: WS.skills.PhisicalMaster, 
					}
                ],
                stats: { lvl: 1, for: 26, int: 9, tal: 20, agi: 20, vit: 24}
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                mainAttr: attr(FS.name),
                name: FS.name,
                skills: [
					{
						adds: [{
							cod: Codes.AP, 
							percent: true, 
							values: [ 0, 6, 10, 14, 18, 21, 24, 26, 28, 30, 32 ]
						}],
						name: FS.skills.WeaponMaster
					},
					{
						adds:[{
							cod: Codes.HP,
							values: [] 
						}],
						name: "Bônus de Vitalidade", 
					},
                ],
                stats: { lvl: 1, for: 28, int: 6, tal: 21, agi: 17, vit: 27 },
            },
            {
                formula: {
                    AP: { fFator: 150, attrFator: Codes.INT, fDiv:30, attrDiv: [Codes.TAL], min: 2, max: 4 },
                    HP: { fLvl: 1.5, fInt: 0.5, fVit: 2.2, add: -10 },
                    MP: { fLvl: 1.5, fInt: 3.8, add: 0 },
                },
                mainAttr: attr(MGS.name),
                name: MGS.name,
                skills: [
					{
						adds: [{
							cod: Codes.MP, 
							percent: true, 
							values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] 
						}],
						name: MGS.skills.MentalMaster, 
					}
                ],
                stats: { lvl: 1, for: 16, int: 29, tal: 19, agi: 14, vit: 21 },
            },
            {
                formula: {
                    AP: { fFator: 150, attrFator: Codes.FOR, fDiv:45, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.6, fVit: 2.2, add: -5 },
                    MP: { fLvl: 0.9, fInt: 2.7, add: 0 },
                },
                mainAttr: attr(MS.name),
                name: MS.name,
                skills: [
					{
						adds: [{
							cod: Codes.AP,
							percent: true,
							values: [ 0, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41 ]
						}],
						name: MS.skills.MechMaster,
					}
                ],
                stats: { lvl: 1, for: 24, int: 8, tal: 25, agi: 18, vit: 24 },
            },
            {
                formula: {
                    AP: { fFator: 130, attrFator: Codes.FOR, fDiv:40, attrDiv: [Codes.TAL, Codes.AGI], min: 2, max: 4 },
                    HP: { fLvl: 2.1, fFor: 0.8, fVit: 2.4, add: -10 },
                    MP: { fLvl: 0.6, fInt: 2.2, add: 0 },
                },
                mainAttr: attr(PS.name),
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
                mainAttr: attr(PRS.name),
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
                mainAttr: attr(XS.name),
                name: XS.name,
                skills: [
					{
						adds: [{
							cod: Codes.MP,
							percent: true,
							values: [ 0, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31 ]
						}],
						name: XS.skills.InnerPeace,
					},
					{
						adds: [{
							cod: Codes.HP,
							percent: true,
							values: [0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32] 
						}],
						name: XS.skills.DivineLife, 
					},
                ],
                stats: { lvl: 1, for: 15, int: 27, tal: 20, agi: 15, vit: 22 },
            },
        ]
    }
}
