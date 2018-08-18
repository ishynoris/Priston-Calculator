import ICharacterStatus from './ICharacterStatus';
import IFormula from './IFormula';
import ISkills from './ISkills';

interface IChar {
    formula: IFormula,
    mainAttr: string,
    name: string,
    skills: ISkills[],
    stats: ICharacterStatus,
}

export default IChar;