
import IItem from '../../interfaces/IItem';
// import ISet from '../../interfaces/ISet';
// import Item from '../../components/Item'

// last 18
const codes = {
    ABS: 0,
    AGI: 1,
    APmax: 2,
    APmin: 3,
    AR: 4,
    DEF: 6,
    EP: 17,
    FOR: 7,
    HP: 8,
    INT: 9,
    LVL: 10,
    MP: 11,
    RES: 12,
    SP: 16,
    STS: 13,
    STSP: 18,
    TAL: 14,
    VIT: 15,
}

const status = [
    { cod: codes.LVL, status: "Level" },
    { cod: codes.FOR, status: "Força" },
    { cod: codes.INT, status: "Inteligência" },
    { cod: codes.TAL, status: "Talento" },
    { cod: codes.AGI, status: "Agilidade" },
    { cod: codes.VIT, status: "Vitalidade" },
    { cod: codes.STS, status: "Status" },
]

const result = [
    { cod: codes.AR, result: "Taxa de Ataque" },
    { cod: codes.APmin, result: "Poder de Ataque" },
    { cod: codes.DEF, result: "Defesa" },
    { cod: codes.ABS, result: "Absorção" },
    { cod: codes.HP, result: "HP" },
    { cod: codes.MP, result: "MP" },
    { cod: codes.RES, result: "RES" },
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

const desc = {
    abs: 'Absorção',
    absP: 'Abosorção (add)',
    addHP: 'HP adicional',
    addMP: 'MP adicional',
    addRES: 'RES adicional',
    atkPwr: 'Poder de ataque',
    atkPwrP: 'Poder de ataque (add)',
    atkRtn: 'Taxa de ataque',
    atkRtnP: 'Taxa de ataque (add)',
    blk: 'Bloqueio',
    blkP: 'Bloqueio (add)',
    def: 'Defesa',
    defP: 'Defesa (add)',
};

const itens: IItem[] = [
    { name: itensName.amuleto, titles: [desc.addHP, desc.addMP, desc.addRES] },
    { name: itensName.anel, titles: [desc.addHP, desc.addMP, desc.addRES], },
    { name: itensName.arma, titles: [desc.atkPwr, desc.atkRtn, desc.atkPwrP, desc.atkRtnP], },
    { name: itensName.armadura, titles: [desc.def, desc.abs, desc.defP, desc.absP], },
    { name: itensName.bota, titles: [desc.def, desc.abs, desc.absP], },
    { name: itensName.bracel, titles: [desc.atkRtn, desc.def, desc.atkRtnP], },
    { name: itensName.escudo, titles: [desc.def, desc.abs, desc.defP, desc.absP], },
    { name: itensName.luva, titles: [desc.def, desc.abs, desc.defP, desc.absP], },
    { name: itensName.orbital, titles: [desc.def, desc.abs, desc.absP], },
    { name: itensName.shelton, titles: ['kit-shelton-1'], },
]

const values = {
    "codes": codes,
    "desc": desc,
    "itens": itens,
    "itensName": itensName,
    "result": result,
    "status": status,
}

export default values;