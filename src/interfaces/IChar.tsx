import ICharacterStatus from './ICharacterStatus';
import IFormula from './IFormula';
import ISkills from './ISkills';
import IStatus from './IStatus';

interface IChar {
    asSkills: (stats: ICharacterStatus) => IStatus[],
    formula: IFormula,
    name: string,
    skills: ISkills[],
    stats: ICharacterStatus,
}

export default IChar;