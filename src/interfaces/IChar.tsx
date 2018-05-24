import ICharacterStatus from './ICharacterStatus';
import IFormula from './IFormula';
import ISkills from './ISkills';
import IStatus from './IStatus';
import IStatusResult from './IStatusResult';

interface IChar {
    asSkills: (stats: ICharacterStatus) => IStatus[],
    formula?: IFormula,
    name: string,
    result?: IStatusResult[]
    skills: ISkills[],
    stats: ICharacterStatus,
}

export default IChar;