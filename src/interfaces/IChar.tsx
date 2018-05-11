
import IDefaultStatus from './IDefaultStatus';
import ISkills from './ISkills';
import IStatus from './IStatus';

interface IChar {
    asSkills: (stats: IDefaultStatus) => IStatus,
    defaultStats: IDefaultStatus,
    name: string,
    skills: ISkills[],
}

export default IChar;