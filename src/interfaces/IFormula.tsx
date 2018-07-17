interface IFormula {
    AP: { fFator: number, attrFator: number, attrDiv: number[], min: number, max: number }
    AR: { fLvl: number, fTal: number, fAgi: number, add: number },
    DEF: { fLvl: number, fTal: number, fAgi: number, add: number },
    ABS: { fLvl: number, fFor: number, fTal: number, add: number },
    HP: { fLvl: number, fFor?: number, fInt?: number, fAgi?: number, fVit: number, add: number },
    MP: { fLvl: number, fInt: number, add: number },
    RES: { fLvl: number, fFor: number, fInt: number, fTal: number, fVit: number, add: number },
}

export default IFormula;