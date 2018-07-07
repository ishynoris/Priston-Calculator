import IBonus from '../../interfaces/IBonus';
import Values from './Values';

const codes = Values.codes;
const itensName = Values.itensName;

const bonusByItem: Array<{ name: string, bonus: IBonus[] }> = [
    {
        bonus: [
            { cod: codes.HPadd, value: 0 }, 
            { cod: codes.MPadd, value: 0 }, 
            { cod: codes.RESadd, value: 0 }
        ],
        name: itensName.amuleto.title
    },
    {
        bonus: [
            { cod: codes.HPadd, value: 0 }, 
            { cod: codes.MPadd, value: 0 }, 
            { cod: codes.RESadd, value: 0 }
        ],
        name: itensName.anel.title
    },
    {
        bonus: [
            { cod: codes.APmin, value: 0 }, 
            { cod: codes.APmax, value: 0 }, 
            { cod: codes.AR, value: 0 }, 
            { cod: codes.APadd, value: 0 }, 
            { cod: codes.ARadd, value: 0 }, 
        ],
        name: itensName.arma.title
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.armadura.title
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.bota.title
    },
    {
        bonus: [
            { cod: codes.AR, value: 0 }, 
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ARadd, value: 0 },
        ],
        name: itensName.bracel.title
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.escudo.title
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.luva.title
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.orbital.title
    },
    {
        bonus: [], name: itensName.shelton.title
    },
]

export default {"bonus": bonusByItem}