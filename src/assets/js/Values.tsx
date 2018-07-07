import IItem from '../../interfaces/IItem';
// import BonusItens from './BonusItens';

enum codes {
    ABS, ABSadd, AGI, AP, APmax, APmin, APadd, AR, ARadd, DEF, DEFadd, EP, FOR,
    HP, HPadd, INT, LVL, MP, MPadd, RES, RESadd, SP, STS, STSp, TAL, VIT, KIT,
    Amuleto, Aneis, Arma, Armadura, Bota, Bracel, Escudo, Luva, Orbital, Shelton
}

const itensCode = {
    ABS: { cod: codes.ABS, title: "Absorção" },
    ABSadd: { cod: codes.ABSadd, title: "Absorção (+add)" },
    AGI: { cod: codes.AGI, title: "Agilidade" },
    AP: { cod: codes.AP, title: "Poder de Ataque" },
    APadd: { cod: codes.APadd, title: "Poder de Ataque (+add)" },
    APmax: { cod: codes.APmax, title: "Poder de Ataque (max)" },
    APmin: { cod: codes.APmin, title: "Poder de Ataque (min)" },
    AR: { cod: codes.AR, title: "Taxa de Ataque" },
    ARadd: { cod: codes.ARadd, title: "Taxa de Ataque (+add)" },
    DEF: { cod: codes.DEF, title: "Defesa" },
    DEFadd: { cod: codes.DEFadd, title: "Defesa (+add)" },
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

    { cod: codes.ABS, title: itensCode.ABS.title },
    { cod: codes.ABSadd, title: itensCode.ABSadd.title },
    { cod: codes.AGI, title: itensCode.AGI.title },
    { cod: codes.AP, title: itensCode.AP.title },
    { cod: codes.APadd, title: itensCode.APadd.title },
    { cod: codes.APmax, title: itensCode.APmax.title },
    { cod: codes.APmin, title: itensCode.APmin.title },
    { cod: codes.AR, title: itensCode.AR.title },
    { cod: codes.ARadd, title: itensCode.ARadd.title },
    { cod: codes.DEF, title: itensCode.DEF.title },
    { cod: codes.DEFadd, title: itensCode.DEFadd.title },
    { cod: codes.EP, title: itensCode.EP.title },
    { cod: codes.FOR, title: itensCode.FOR.title },
    { cod: codes.HP, title: itensCode.HP.title },
    { cod: codes.HPadd, title: itensCode.HPadd.title },
    { cod: codes.INT, title: itensCode.INT.title },
    { cod: codes.KIT, title: itensCode.KIT.title },
    { cod: codes.LVL, title: itensCode.LVL.title },
    { cod: codes.MP, title: itensCode.MP.title },
    { cod: codes.MPadd, title: itensCode.MPadd.title },
    { cod: codes.RES, title: itensCode.RES.title },
    { cod: codes.RESadd, title: itensCode.RESadd.title },
    { cod: codes.SP, title: itensCode.SP.title },
    { cod: codes.STS, title: itensCode.STS.title },
    { cod: codes.STSp, title: itensCode.STSP.title },
    { cod: codes.TAL, title: itensCode.TAL.title },
    { cod: codes.VIT, title: itensCode.VIT.title },
]

const itensName = {
    amuleto: { cod: codes.Amuleto, title: codes.Amuleto.toString() },
    anel: { cod: codes.Aneis, title: codes.Aneis.toString() },
    arma: { cod: codes.Arma, title: codes.Arma.toString() },
    armadura: { cod: codes.Armadura, title: codes.Armadura.toString() },
    bota: { cod: codes.Bota, title: codes.Bota.toString() },
    bracel: { cod: codes.Bracel, title: codes.Bracel.toString() },
    escudo: { cod: codes.Escudo, title: codes.Escudo.toString() },
    luva: { cod: codes.Luva, title: codes.Luva.toString() },
    orbital: { cod: codes.Orbital, title: codes.Orbital.toString() },
    shelton: { cod: codes.Shelton, title: codes.Shelton.toString() },
}
const status = [itensCode.LVL, itensCode.FOR, itensCode.INT, itensCode.TAL, itensCode.AGI, itensCode.VIT, itensCode.STS]

const result = [itensCode.AR, itensCode.AP, itensCode.DEF, itensCode.ABS, itensCode.HP, itensCode.MP, itensCode.RES]

const itens: IItem[] = [
    { name: itensName.amuleto.title, item: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.anel.title, item: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.arma.title, item: [itensCode.APmin, itensCode.APmax, itensCode.AR, itensCode.APadd, itensCode.ARadd] },
    { name: itensName.armadura.title, item: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.bota.title, item: [itensCode.DEF, itensCode.ABSadd] },
    { name: itensName.bracel.title, item: [itensCode.AR, itensCode.DEF, itensCode.ARadd] },
    { name: itensName.escudo.title, item: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.luva.title, item: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.orbital.title, item: [itensCode.DEF, itensCode.ABSadd] },
    { name: itensName.shelton.title, item: [itensCode.KIT], },
]

const values = {
    "codes": codes,
    "itens": itens,
    "itensCode": itensCode,
    "itensList": itensList,
    "itensName": itensName,
    "result": result,
    "status": status,
}

export default values;