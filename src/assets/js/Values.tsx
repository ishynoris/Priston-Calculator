import IBonus from '../../interfaces/IBonus';
import IItem from '../../interfaces/IItem';

enum CODES {
    ABS, ABSadd, AGI, AP, APmax, APmin, APadd, AR, ARadd, DEF, DEFadd, EP, FOR,
    HP, HPadd, INT, LVL, MP, MPadd, RES, RESadd, SP, STS, STSp, TAL, VIT, KIT
}

const itemList = {
    ABS: { cod: CODES.ABS, title: "Absorção" },
    ABSadd: { cod: CODES.ABSadd, title: "Absorção(add)" },
    AGI: { cod: CODES.AGI, title: "Agilidade" },
    AP: { cod: CODES.AP, title: "Poder de Ataque" },
    APadd: { cod: CODES.APadd, title: "Poder de Ataque(add)" },
    APmax: { cod: CODES.APmax, title: "Poder de Ataque(max)" },
    APmin: { cod: CODES.APmin, title: "Poder de Ataque(min)" },
    AR: { cod: CODES.AR, title: "Taxa de Ataque" },
    ARadd: { cod: CODES.ARadd, title: "Taxa de Ataque(add)" },
    DEF: { cod: CODES.DEF, title: "Defesa" },
    DEFadd: { cod: CODES.DEFadd, title: "Defesa(add)" },
    EP: { cod: CODES.EP, title: "Pontos de Elite" },
    FOR: { cod: CODES.FOR, title: "Força" },
    HP: { cod: CODES.HP, title: "HP" },
    HPadd: { cod: CODES.HPadd, title: "HP adicional" },
    INT: { cod: CODES.INT, title: "Inteligência" },
    KIT: {cod :CODES.KIT, title: "'kit-shelton-1'"},
    LVL: { cod: CODES.LVL, title: "Level" },
    MP: { cod: CODES.MP, title: "MP" },
    MPadd: { cod: CODES.MPadd, title: "MP adicional" },
    RES: { cod: CODES.RES, title: "RES" },
    RESadd: { cod: CODES.RESadd, title: "RES adicional" },
    SP: { cod: CODES.SP, title: "Pontos Especiais" },
    STS: { cod: CODES.STS, title: "Status" },
    STSP: { cod: CODES.STSp, title: "Status (bonus)" },
    TAL: { cod: CODES.TAL, title: "Talento" },
    VIT: { cod: CODES.VIT, title: "Vitalidade" },
}

const itensName = {
    amuleto: 'Amuleto',
    anel: 'Anel',
    arma: 'Arma',
    armadura: 'Armadura',
    bota: 'Bota',
    bracel: 'Bracel',
    escudo: 'Escudo',
    luva: 'Luva',
    orbital: 'Orbital',
    shelton: 'Shelton',
}
const status = [itemList.LVL, itemList.FOR, itemList.INT, itemList.TAL, itemList.AGI, itemList.VIT, itemList.STS]

const result = [itemList.AR, itemList.AP, itemList.DEF, itemList.ABS, itemList.HP, itemList.MP, itemList.RES]

const bonusByItem: Array<{ name: string, bonus: IBonus[] }> = [
    {
        bonus: [{ cod: CODES.HP, value: 0 }, { cod: CODES.MP, value: 0 }, { cod: CODES.RES, value: 0 }],
        name: itensName.amuleto
    },
    {
        bonus: [{ cod: CODES.HP, value: 0 }, { cod: CODES.MP, value: 0 }, { cod: CODES.RES, value: 0 }],
        name: itensName.anel
    },
    {
        bonus: [{ cod: CODES.HP, value: 0 }, { cod: CODES.MP, value: 0 }, { cod: CODES.RES, value: 0 }],
        name: itensName.arma
    }
]

const itens: IItem[] = [
    { name: itensName.amuleto, item: [itemList.HPadd, itemList.MPadd, itemList.RESadd] },
    { name: itensName.anel, item: [itemList.HPadd, itemList.MPadd, itemList.RESadd] },
    { name: itensName.arma, item: [itemList.APmin, itemList.APmax, itemList.AR, itemList.APadd, itemList.ARadd] },
    { name: itensName.armadura, item: [itemList.DEF, itemList.ABS, itemList.DEFadd, itemList.ABSadd] },
    { name: itensName.bota, item: [itemList.DEF, itemList.ABS, itemList.ABSadd] },
    { name: itensName.bracel, item: [itemList.AR, itemList.DEF, itemList.ARadd] },
    { name: itensName.escudo, item: [itemList.DEF, itemList.ABS, itemList.DEFadd, itemList.ABSadd] },
    { name: itensName.luva, item: [itemList.DEF, itemList.ABS, itemList.DEFadd, itemList.ABSadd] },
    { name: itensName.orbital, item: [itemList.DEF, itemList.ABS, itemList.ABSadd] },
    { name: itensName.shelton, item: [itemList.KIT], },
]

const values = {
    "bonusByItem": bonusByItem,
    "codes": CODES,
    "itens": itens,
    "itensName": itensName,
    "result": result,
    "status": status,
}

export default values;