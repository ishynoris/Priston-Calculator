import IItem from '../../interfaces/IItem';

enum codes {
    ABS, ABSadd, AGI, AP, APmax, APmin, APadd, AR, ARadd, DEF, DEFadd, EP, FOR,
    HP, HPadd, INT, LVL, MP, MPadd, RES, RESadd, SP, STS, STSp, TAL, VIT, KIT,
    Amuleto, Aneis, Arma, Armadura, Bota, Bracel, Escudo, Luva, Orbital, Shelton, BonusAdd
}

const statsCode = {
    ABS: { cod: codes.ABS, title: "Absorção", value: 0 },
    ABSadd: { cod: codes.ABSadd, title: "Absorção (+add)", value: 0 },
    AGI: { cod: codes.AGI, title: "Agilidade", value: 0 },
    AP: { cod: codes.AP, title: "Poder de Ataque", value: 0 },
    APadd: { cod: codes.APadd, title: "Poder de Ataque (+add)", value: 0 },
    APmax: { cod: codes.APmax, title: "Poder de Ataque (max)", value: 0 },
    APmin: { cod: codes.APmin, title: "Poder de Ataque (min)", value: 0 },
    AR: { cod: codes.AR, title: "Taxa de Ataque", value: 0 },
    ARadd: { cod: codes.ARadd, title: "Taxa de Ataque (+add)", value: 0 },
    BonusAdd: { cod: codes.BonusAdd, title: "Bônus/Adicionais", value: 0 },
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

const statsList = [

    { cod: codes.ABS, title: statsCode.ABS.title },
    { cod: codes.ABSadd, title: statsCode.ABSadd.title },
    { cod: codes.AGI, title: statsCode.AGI.title },
    { cod: codes.AP, title: statsCode.AP.title },
    { cod: codes.APadd, title: statsCode.APadd.title },
    { cod: codes.APmax, title: statsCode.APmax.title },
    { cod: codes.APmin, title: statsCode.APmin.title },
    { cod: codes.AR, title: statsCode.AR.title },
    { cod: codes.ARadd, title: statsCode.ARadd.title },
    { cod: codes.BonusAdd, title: statsCode.BonusAdd.title },
    { cod: codes.DEF, title: statsCode.DEF.title },
    { cod: codes.DEFadd, title: statsCode.DEFadd.title },
    { cod: codes.EP, title: statsCode.EP.title },
    { cod: codes.FOR, title: statsCode.FOR.title },
    { cod: codes.HP, title: statsCode.HP.title },
    { cod: codes.HPadd, title: statsCode.HPadd.title },
    { cod: codes.INT, title: statsCode.INT.title },
    { cod: codes.KIT, title: statsCode.KIT.title },
    { cod: codes.LVL, title: statsCode.LVL.title },
    { cod: codes.MP, title: statsCode.MP.title },
    { cod: codes.MPadd, title: statsCode.MPadd.title },
    { cod: codes.RES, title: statsCode.RES.title },
    { cod: codes.RESadd, title: statsCode.RESadd.title },
    { cod: codes.SP, title: statsCode.SP.title },
    { cod: codes.STS, title: statsCode.STS.title },
    { cod: codes.STSp, title: statsCode.STSP.title },
    { cod: codes.TAL, title: statsCode.TAL.title },
    { cod: codes.VIT, title: statsCode.VIT.title },
]

const itensName = {
    amuleto: { cod: codes.Amuleto, title: "Amuleto" },
    anel: { cod: codes.Aneis, title: "Aneis" },
    arma: { cod: codes.Arma, title: "Arma" },
    armadura: { cod: codes.Armadura, title: "Armadura" },
    bonus: { cod: codes.BonusAdd, title: statsCode.BonusAdd.title },
    bota: { cod: codes.Bota, title: "Bota" },
    bracel: { cod: codes.Bracel, title: "Bracel" },
    escudo: { cod: codes.Escudo, title: "Escudo" },
    luva: { cod: codes.Luva, title: "Luva" },
    orbital: { cod: codes.Orbital, title: "Orbital" },
    shelton: { cod: codes.Shelton, title: "Shelton" },
}
const status = [statsCode.LVL, statsCode.FOR, statsCode.INT, statsCode.TAL, statsCode.AGI, statsCode.VIT, statsCode.STS]

const result = [statsCode.AR, statsCode.AP, statsCode.DEF, statsCode.ABS, statsCode.HP, statsCode.MP, statsCode.RES]

const itens: IItem[] = [
    { name: itensName.amuleto.title, attrs: [statsCode.HPadd, statsCode.MPadd, statsCode.RESadd] },
    { name: itensName.anel.title, attrs: [statsCode.HPadd, statsCode.MPadd, statsCode.RESadd] },
    { name: itensName.arma.title, attrs: [statsCode.APmin, statsCode.APmax, statsCode.AR, statsCode.APadd, statsCode.ARadd] },
    { name: itensName.armadura.title, attrs: [statsCode.DEFadd, statsCode.ABSadd] },
    { name: itensName.bonus.title, attrs: [statsCode.HPadd, statsCode.MPadd, statsCode.RESadd, statsCode.AR, statsCode.DEFadd, statsCode.ABSadd] },
    { name: itensName.bota.title, attrs: [statsCode.DEFadd, statsCode.ABSadd] },
    { name: itensName.bracel.title, attrs: [statsCode.DEFadd, statsCode.AR, statsCode.ARadd] },
    { name: itensName.escudo.title, attrs: [statsCode.DEFadd, statsCode.ABSadd] },
    { name: itensName.luva.title, attrs: [statsCode.DEFadd, statsCode.ABSadd] },
    { name: itensName.orbital.title, attrs: [statsCode.DEF, statsCode.ABSadd] },
    { name: itensName.shelton.title, attrs: [statsCode.KIT], },
]

const values = {
    "codes": codes,
    "itens": itens,
    "itensName": itensName,
    "result": result,
    "statsCode": statsCode,
    "statsList": statsList,
    "status": status,
}

export default values;