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
        name: itensName.amuleto
    },
    {
        bonus: [
            { cod: codes.HPadd, value: 0 }, 
            { cod: codes.MPadd, value: 0 }, 
            { cod: codes.RESadd, value: 0 }
        ],
        name: itensName.anel
    },
    {
        bonus: [
            { cod: codes.APmin, value: 0 }, 
            { cod: codes.APmax, value: 0 }, 
            { cod: codes.AR, value: 0 }, 
            { cod: codes.APadd, value: 0 }, 
            { cod: codes.ARadd, value: 0 }, 
        ],
        name: itensName.arma
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.armadura
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.bota
    },
    {
        bonus: [
            { cod: codes.AR, value: 0 }, 
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ARadd, value: 0 },
        ],
        name: itensName.bracel
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.escudo
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.DEFadd, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.luva
    },
    {
        bonus: [
            { cod: codes.DEF, value: 0 }, 
            { cod: codes.ABS, value: 0 }, 
            { cod: codes.ABSadd, value: 0 },
        ],
        name: itensName.orbital
    },
    {
        bonus: [], name: itensName.shelton
    },
]

export default {"bonus": bonusByItem}