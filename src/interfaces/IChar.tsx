import ICharacterStatus from './ICharacterStatus';
import IFormula from './IFormula';
import ISkills from './ISkills';

interface IChar {
    formula: IFormula,
    name: string,
    skills: ISkills[],
    stats: ICharacterStatus,
}

export default IChar;