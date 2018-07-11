import IItem from '../../interfaces/IItem';

enum codes {
    ABS, ABSadd, AGI, AP, APmax, APmin, APadd, AR, ARadd, DEF, DEFadd, EP, FOR,
    HP, HPadd, INT, LVL, MP, MPadd, RES, RESadd, SP, STS, STSp, TAL, VIT, KIT,
    Amuleto, Aneis, Arma, Armadura, Bota, Bracel, Escudo, Luva, Orbital, Shelton
}

const itensCode = {
    ABS: { cod: codes.ABS, title: "Absorção", value: 0 },
    ABSadd: { cod: codes.ABSadd, title: "Absorção (+add)", value: 0 },
    AGI: { cod: codes.AGI, title: "Agilidade", value: 0 },
    AP: { cod: codes.AP, title: "Poder de Ataque", value: 0 },
    APadd: { cod: codes.APadd, title: "Poder de Ataque (+add)", value: 0 },
    APmax: { cod: codes.APmax, title: "Poder de Ataque (max)", value: 0 },
    APmin: { cod: codes.APmin, title: "Poder de Ataque (min)", value: 0 },
    AR: { cod: codes.AR, title: "Taxa de Ataque", value: 0 },
    ARadd: { cod: codes.ARadd, title: "Taxa de Ataque (+add)", value: 0 },
    DEF: { cod: codes.DEF, title: "Defesa", value: 0 },
    DEFadd: { cod: codes.DEFadd, title: "Defesa (+add)", value: 0 },
    EP: { cod: codes.EP, title: "Pontos de Elite", value: 0 },
    FOR: { cod: codes.FOR, title: "Força", value: 0 },
    HP: { cod: codes.HP, title: "HP", value: 0 },
    HPadd: { cod: codes.HPadd, title: "HP adicional", value: 0 },
    INT: { cod: codes.INT, title: "Inteligência", value: 0 },
    KIT: { cod: codes.KIT, title: "'kit-shelton-1'", value: 0 },
    LVL: { cod: codes.LVL, title: "Level", value: 0 },
    MP: { cod: codes.MP, title: "MP", value: 0 },
    MPadd: { cod: codes.MPadd, title: "MP adicional", value: 0 },
    RES: { cod: codes.RES, title: "RES", value: 0 },
    RESadd: { cod: codes.RESadd, title: "RES adicional", value: 0 },
    SP: { cod: codes.SP, title: "Pontos Especiais", value: 0 },
    STS: { cod: codes.STS, title: "Status", value: 0 },
    STSP: { cod: codes.STSp, title: "Status (bonus)", value: 0 },
    TAL: { cod: codes.TAL, title: "Talento", value: 0 },
    VIT: { cod: codes.VIT, title: "Vitalidade", value: 0 },
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
    amuleto: { cod: codes.Amuleto, title: "Amuleto" },
    anel: { cod: codes.Aneis, title: "Aneis" },
    arma: { cod: codes.Arma, title: "Arma" },
    armadura: { cod: codes.Armadura, title: "Armadura" },
    bota: { cod: codes.Bota, title: "Bota" },
    bracel: { cod: codes.Bracel, title: "Bracel" },
    escudo: { cod: codes.Escudo, title: "Escudo" },
    luva: { cod: codes.Luva, title: "Luva" },
    orbital: { cod: codes.Orbital, title: "Orbital" },
    shelton: { cod: codes.Shelton, title: "Shelton" },
}
const status = [itensCode.LVL, itensCode.FOR, itensCode.INT, itensCode.TAL, itensCode.AGI, itensCode.VIT, itensCode.STS]

const result = [itensCode.AR, itensCode.AP, itensCode.DEF, itensCode.ABS, itensCode.HP, itensCode.MP, itensCode.RES]

const itens: IItem[] = [
    { name: itensName.amuleto.title, attrs: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.anel.title, attrs: [itensCode.HPadd, itensCode.MPadd, itensCode.RESadd] },
    { name: itensName.arma.title, attrs: [itensCode.APmin, itensCode.APmax, itensCode.AR, itensCode.APadd, itensCode.ARadd] },
    { name: itensName.armadura.title, attrs: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.bota.title, attrs: [itensCode.DEF, itensCode.ABSadd] },
    { name: itensName.bracel.title, attrs: [itensCode.AR, itensCode.DEF, itensCode.ARadd] },
    { name: itensName.escudo.title, attrs: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.luva.title, attrs: [itensCode.DEFadd, itensCode.ABSadd] },
    { name: itensName.orbital.title, attrs: [itensCode.DEF, itensCode.ABSadd] },
    { name: itensName.shelton.title, attrs: [itensCode.KIT], },
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