import IItem from '../../interfaces/IItem';
// import BonusItens from './BonusItens';

enum codes {
    ABS, ABSadd, AGI, AP, APmax, APmin, APadd, AR, ARadd, DEF, DEFadd, EP, FOR,
    HP, HPadd, INT, LVL, MP, MPadd, RES, RESadd, SP, STS, STSp, TAL, VIT, KIT
}

const itensCode = {
    ABS: { cod: codes.ABS, title: "Absorção" },
    ABSadd: { cod: codes.ABSadd, title: "Absorção(add)" },
    AGI: { cod: codes.AGI, title: "Agilidade" },
    AP: { cod: codes.AP, title: "Poder de Ataque" },
    APadd: { cod: codes.APadd, title: "Poder de Ataque(add)" },
    APmax: { cod: codes.APmax, title: "Poder de Ataque(max)" },
    APmin: { cod: codes.APmin, title: "Poder de Ataque(min)" },
    AR: { cod: codes.AR, title: "Taxa de Ataque" },
    ARadd: { cod: codes.ARadd, title: "Taxa de Ataque(add)" },
    DEF: { cod: codes.DEF, title: "Defesa" },
    DEFadd: { cod: codes.DEFadd, title: "Defesa(add)" },
    EP: { cod: codes.EP, title: "Pontos de Elite" },
    FOR: { cod: codes.FOR, title: "Força" },
    HP: { cod: codes.HP, title: "HP" },
    HPadd: { cod: codes.HPadd, title: "HP adicional" },
    INT: { cod: codes.INT, title: "Inteligência" },
    KIT: { cod: codes.KIT, title: "'kit-shelton-1'" },
    LVL: { cod: codes.LVL, title: "Level" },
    MP: { cod: codes.MP, title: "MP" },
    MPadd: { cod: codes.MPadd, title: "MP adicional" },
    RES: { cod: codes.RES, title: "RES" },
    RESadd: { cod: codes.RESadd, title: "RES adicional" },
    SP: { cod: codes.SP, title: "Pontos Especiais" },
    STS: { cod: codes.STS, title: "Status" },
    STSP: { cod: codes.STSp, title: "Status (bonus)" },
    TAL: { cod: codes.TAL, title: "Talento" },
    VIT: { cod: codes.VIT, title: "Vitalidade" },
}

const itensList = [

    { cod: codes.ABS, title: "Absorção" },
    { cod: codes.ABSadd, title: "Absorção(add)" },
    { cod: codes.AGI, title: "Agilidade" },
    { cod: codes.AP, title: "Poder de Ataque" },
    { cod: codes.APadd, title: "Poder de Ataque(add)" },
    { cod: codes.APmax, title: "Poder de Ataque(max)" },
    { cod: codes.APmin, title: "Poder de Ataque(min)" },
    { cod: codes.AR, title: "Taxa de Ataque" },
    { cod: codes.ARadd, title: "Taxa de Ataque(add)" },
    { cod: codes.DEF, title: "Defesa" },
    { cod: codes.DEFadd, title: "Defesa(add)" },
    { cod: codes.EP, title: "Pontos de Elite" },
    { cod: codes.FOR, title: "Força" },
    { cod: codes.HP, title: "HP" },
    { cod: codes.HPadd, title: "HP adicional" },
    { cod: codes.INT, title: "Inteligência" },
    { cod: codes.KIT, title: "'kit-shelton-1'" },
    { cod: codes.LVL, title: "Level" },
    { cod: codes.MP, title: "MP" },
    { cod: codes.MPadd, title: "MP adicional" },
    { cod: codes.RES, title: "RES" },
    { cod: codes.RESadd, title: "RES adicional" },
    { cod: codes.SP, title: "Pontos Especiais" },
    { cod: codes.STS, title: "Status" },
    { cod: codes.STSp, title: "Status (bonus)" },
    { cod: codes.TAL, title: "Talento" },
    { cod: codes.VIT, title: "Vitalidade" },
]

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
const status = [itensCode.LVL, itensCode.FOR, itensCode.INT, itensCode.TAL, itensCode.AGI, itensCode.VIT, itensCode.STS]

const result = [itensCode.AR, itensCode.AP, itensCode.DEF, itensCode.ABS, itensCode.HP, itensCode.MP, itensCode.RES]

const itens: IItem[] = [
    { name: itensName.amuleto, item: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.anel, item: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.arma, item: [itensCode.APmin, itensCode.APmax, itensCode.AR, itensCode.APadd, itensCode.ARadd] },
    { name: itensName.armadura, item: [itensCode.DEF, itensCode.ABS, itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.bota, item: [itensCode.DEF, itensCode.ABS, itensCode.ABSadd] },
    { name: itensName.bracel, item: [itensCode.AR, itensCode.DEF, itensCode.ARadd] },
    { name: itensName.escudo, item: [itensCode.DEF, itensCode.ABS, itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.luva, item: [itensCode.DEF, itensCode.ABS, itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.orbital, item: [itensCode.DEF, itensCode.ABS, itensCode.ABSadd] },
    { name: itensName.shelton, item: [itensCode.KIT], },
]

const values = {
    "codes": codes,
    "itens": itens,
    "itensList": itensList,
    "itensName": itensName,
    "result": result,
    "status": status,
}

export default values;