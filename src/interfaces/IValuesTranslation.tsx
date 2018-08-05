import ICodTitle from "./ICodTitle";
import ICodTitleValue from "./ICodTitleValue";
import IForces from "./IForces";
import IItem from "./IItem";
import IItensChar from "./IItensChar";
import IStats from "./IStats";

export default interface IValuesTranslation {
    booster: IForces[]
    forces: IForces[],
    itens: IItem[],
    itensChar: IItensChar,
    result: ICodTitle[]
    stats: IStats,
    statsDesc: string[],
    statsList: ICodTitle[],
    status: ICodTitleValue[],
}