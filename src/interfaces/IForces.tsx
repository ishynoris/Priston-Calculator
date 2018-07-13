import IBonus from './IBonus';

interface IForces { 
    force: {cod:number, title: string }, 
    bonus: IBonus[],
}

export default IForces;