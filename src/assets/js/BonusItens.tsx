import IBonus from '../../interfaces/IBonus';
import ILanguage from '../../interfaces/ILanguage';
import Codes from './Codes';

export default class BonusItens {

    public static bonus(language: ILanguage): Array<{ name: string, bonus: IBonus[] }> {
        const itensName = language.translations.itens;
        return [
            {
                bonus: [
                    { cod: Codes.HPadd, value: 0 },
                    { cod: Codes.MPadd, value: 0 },
                    { cod: Codes.RESadd, value: 0 }
                ],
                name: itensName.Amulet
            },
            {
                bonus: [
                    { cod: Codes.HPadd, value: 0 },
                    { cod: Codes.MPadd, value: 0 },
                    { cod: Codes.RESadd, value: 0 }
                ],
                name: itensName.Rings
            },
            {
                bonus: [
                    { cod: Codes.APmin, value: 0 },
                    { cod: Codes.APmax, value: 0 },
                    { cod: Codes.AR, value: 0 },
                    { cod: Codes.APadd, value: 0 },
                    { cod: Codes.ARadd, value: 0 },
                ],
                name: itensName.Weapon
            },
            {
                bonus: [
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ABS, value: 0 },
                    { cod: Codes.DEFadd, value: 0 },
                    { cod: Codes.ABSadd, value: 0 },
                ],
                name: itensName.Armor
            },
            {
                bonus: [
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ABS, value: 0 },
                    { cod: Codes.ABSadd, value: 0 },
                ],
                name: itensName.Boots
            },
            {
                bonus: [
                    { cod: Codes.AR, value: 0 },
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ARadd, value: 0 },
                ],
                name: itensName.Armlet
            },
            {
                bonus: [
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ABS, value: 0 },
                    { cod: Codes.DEFadd, value: 0 },
                    { cod: Codes.ABSadd, value: 0 },
                ],
                name: itensName.Shield
            },
            {
                bonus: [
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ABS, value: 0 },
                    { cod: Codes.DEFadd, value: 0 },
                    { cod: Codes.ABSadd, value: 0 },
                ],
                name: itensName.Gauntlets
            },
            {
                bonus: [
                    { cod: Codes.DEF, value: 0 },
                    { cod: Codes.ABS, value: 0 },
                    { cod: Codes.ABSadd, value: 0 },
                ],
                name: itensName.Orbital
            },
            {
                bonus: [], name: itensName.Shelton
            },
        ]
    }
}