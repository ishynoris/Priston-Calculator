interface IFormula {
    AP: { fFator: number, attrFator: number, fDiv: number, attrDiv: number[], min: number, max: number },
    HP: { fLvl: number, fFor?: number, fInt?: number, fAgi?: number, fVit: number, add: number },
    MP: { fLvl: number, fInt: number, add: number },
}

export default IFormula;