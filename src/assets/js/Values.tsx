import IItem from '../../interfaces/IItem';

// last 18
const codes = {
    ABS: { cod: 0, title: "Absorção" },
    AGI: { cod: 1, title: "Agilidade" },
    APmax: { cod: 2, title: "Poder de Ataque" },
    APmin: { cod: 3, title: "Poder de Ataque" },
    AR: { cod: 4, title: "Taxa de Ataque" },
    DEF: { cod: 6, title: "Defesa" },
    EP: { cod: 17, title: "Pontos de Elite" },
    FOR: { cod: 7, title: "Força" },
    HP: { cod: 8, title: "HP" },
    INT: { cod: 9, title: "Inteligência" },
    LVL: { cod: 10, title: "Level" },
    MP: { cod: 11, title: "MP" },
    RES: { cod: 12, title: "RES" },
    SP: { cod: 16, title: "Pontos Especiais" },
    STS: { cod: 13, title: "Status" },
    STSP: { cod: 18, title: "Status (bonus)" },
    TAL: { cod: 14, title: "Talento" },
    VIT: { cod: 15, title: "Vitalidade" },
}

const status = [codes.LVL, codes.FOR, codes.INT, codes.TAL, codes.AGI, codes.VIT, codes.STS]

const result = [codes.AR, codes.APmin, codes.DEF, codes.ABS, codes.HP, codes.MP, codes.RES]

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