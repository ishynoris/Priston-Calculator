import IMixes from '../../interfaces/IMixes';
import Values from './Values';

const codes = Values.codes;
const itens = {
    arma: Values.itensName.arma.title,
    armadura: Values.itensName.armadura.title,
    escudo: Values.itensName.escudo.title,
    orbital: Values.itensName.orbital.title,
}

const mixArmadura: IMixes = {
    item: itens.armadura,
    type: [
        {   
            bonus: [{ cod: codes.DEF, value: 20 }],
            title: 'Defesa +20'
        },
        {
            bonus: [{ cod: codes.ABS, value: 0.6 }],
            title: 'Absorção +0.6'
        },
        {
            bonus: [{ cod: codes.RES, value: 10 }],
            title: 'RES +10',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10, percent: true }],
            title: 'Defesa +10%',
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }],
            title: 'Defesa +20',
        },
        {
            bonus: [{ cod: codes.DEF, value: 15, percent: true }],
            title: 'Defesa +15%',
        },
        {
            bonus: [{ cod: codes.DEF, value: 30 }, { cod: codes.ABS, value: 0.6 }],
            title: 'Defesa +30 / Absorção +0.6',
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }, { cod: codes.ABS, value: 0.4 }],
            title: 'Defesa +40 / Absorção +0.4',
        },
        {
            bonus: [{ cod: codes.DEF, value: 45 }, { cod: codes.ABS, value: 1 }],
            title: 'Defesa +45 / Absorção +1.0',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10 }, { cod: codes.ABS, value: 1.5 }],
            title: 'Defesa +10 / Absorção +1.5',
        },
        {
            bonus: [{ cod: codes.ABS, value: 2 }],
            title: 'Absorção +2.0',
        },
        {
            bonus: [{ cod: codes.ABS, value: 3 }],
            title: 'Absorção +3.0',
        },
        {
            bonus: [{ cod: codes.ABS, value: 3.5 }],
            title: 'Absorção +3.5',
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }, { cod: codes.ABS, value: 3 }],
            title: 'Defesa +40 / Absorção +3.0',
        },
        {
            bonus: [{ cod: codes.ABS, value: 30, percent: true }],
            title: 'Absorção +30%',
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }, { cod: codes.ABS, value: 3.4 }],
            title: 'Defesa +20 / Absorção +3.4',
        },
        {
            bonus: [{ cod: codes.HP, value: 40 }],
            title: 'HP +40',
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }, { cod: codes.MP, value: 30 }],
            title: 'Defesa +40 / MP + 30',
        },
        {
            bonus: [{ cod: codes.ABS, value: 3.5 }, { cod: codes.HP, value: 20 }],
            title: 'Absorção +3.5 / HP +20',
        },
        {
            bonus: [{ cod: codes.DEF, value: 50 }],
            title: 'Defesa +50',
        },
        {
            bonus: [{ cod: codes.HP, value: 50 }],
            title: 'HP +50',
        },
        {
            bonus: [{ cod: codes.DEF, value: 50 }, { cod: codes.MP, value: 40 }],
            title: 'Defesa +50 / MP + 40',
        },
        {
            bonus: [{ cod: codes.ABS, value: 4 }, { cod: codes.HP, value: 25 }],
            title: 'Absorção +4.0 / HP +25',
        },
        {
            bonus: [{ cod: codes.DEF, value: 50 }, { cod: codes.ABS, value: 4 }],
            title: 'Defesa +50 / Absorção +4.0',
        },
        {
            bonus: [{ cod: codes.DEF, value: 60 }, { cod: codes.MP, value: 50 }],
            title: 'Defesa +60 / MP +50',
        },
        {
            bonus: [{ cod: codes.ABS, value: 4 }, { cod: codes.HP, value: 40 }],
            title: 'Absorção +4.0 / HP +40',
        },
    ],
};

const mixArma: IMixes = {
    item: itens.arma,
    type: [
        {
            bonus: [{ cod: codes.AR, value: 50 }],
            title: 'Taxa de Ataque +50'
        },
        {
            bonus: [{ cod: codes.RES, value: 20 }],
            title: 'RES +20'
        },
        {
            bonus: [{ cod: codes.AR, value: 20, percent: true }],
            title: 'Taxa de ataque +20%'
        },
        {
            bonus: [{ cod: codes.AR, value: 40, percent: true }],
            title: 'Taxa de ataque +40%'
        },
        {
            bonus: [{ cod: codes.AR, value: 10 }, { cod: codes.APmin, value: 1 }],
            title: 'Taxa de ataque +10 / Poder de ataque Mín +1',
        },
        {
            bonus: [{ cod: codes.AR, value: 10 }, { cod: codes.APmax, value: 1 }],
            title: 'Taxa de ataque +10 / Poder de ataque Máx +1',
        },
        {
            bonus: [{ cod: codes.AR, value: 20 }, { cod: codes.APmin, value: 1 }, { cod: codes.APmax, value: 1 }],
            title: 'Taxa de ataque +20 / Poder de ataque Mín.,Máx. +1',
        },
        {
            bonus: [{ cod: codes.AR, value: 100, percent: true }],
            title: 'Taxa de ataque +100%',
        },
        {
            bonus: [{ cod: codes.APmin, value: 1 }],
            title: 'Poder de ataque Mín. +1',
        },
        {
            bonus: [{ cod: codes.APmax, value: 2 }],
            title: 'Poder de ataque Máx. +2',
        },
        {
            bonus: [{ cod: codes.APmin, value: 1 }, { cod: codes.APmax, value: 1 }],
            title: 'Crítico +2% / Poder de ataque Min. e Max. +1',
        },
        {
            bonus: [{ cod: codes.APmax, value: 4 }],
            title: 'Poder de ataque Máx. +4',
        },
        {
            bonus: [{ cod: codes.AR, value: 10, percent: true }, { cod: codes.APmax, value: 4 }],
            title: 'Taxa de ataque +10% / Poder de ataque Máx. +4',
        },
        {
            bonus: [{ cod: codes.APmin, value: 1 }, { cod: codes.APmax, value: 3 }],
            title: 'Poder de ataque Mín. +1 / Poder de ataque Máx. +3',
        },
        {
            bonus: [{ cod: codes.APmin, value: 2 }, { cod: codes.APmax, value: 2 }],
            title: 'Poder de ataque Mín. +2 / Poder de ataque Máx. +2',
        },
        {
            bonus: [{ cod: codes.APmin, value: 3 }, { cod: codes.APmax, value: 3 }],
            title: 'Crítico +4% / Poder de ataque Mín.,Máx. +3',
        },
        {
            bonus: [{ cod: codes.AR, value: 10, percent: true }, { cod: codes.APmin, value: 1 }, { cod: codes.APmax, value: 4 }],
            title: 'Taxa de ataque +10% / Poder de ataque Mín. +1 / Poder de ataque Máx. +4',
        },
        {
            bonus: [{ cod: codes.AR, value: 40 }, { cod: codes.APmin, value: 3 }, { cod: codes.APmax, value: 5 }],
            title: 'Taxa de ataque +40 / Poder de ataque Mín. +3 / Poder de ataque Máx. +5',
        },
        {
            bonus: [{ cod: codes.AR, value: 60, percent: true }, { cod: codes.APmax, value: 6 }],
            title: 'Crítico +4% / Taxa de ataque +60% / Poder de ataque Máx. +6',
        },
        {
            bonus: [{ cod: codes.AR, value: 80 }, { cod: codes.APmin, value: 4 }, { cod: codes.APmax, value: 4 }],
            title: 'Taxa de ataque +80 / Crítico +2% / Poder de ataque Mín.,Máx. +4',
        },
        {
            bonus: [{ cod: codes.MP, value: 20 }, { cod: codes.APmin, value: 6 }, { cod: codes.APmax, value: 6 }],
            title: 'Crítico +4% / MP +20 / Poder de ataque Mín.,Máx. +6',
        },
        {
            bonus: [{ cod: codes.AR, value: 60 }, { cod: codes.HP, value: 20 }, { cod: codes.APmin, value: 6 }, { cod: codes.APmax, value: 6 }],
            title: 'Taxa de ataque +60 / HP +20 / Poder de ataque Mín.,Máx. +6',
        },
        {
            bonus: [{ cod: codes.AR, value: 100 }, { cod: codes.APmin, value: 6 }, { cod: codes.APmax, value: 6 }],
            title: 'Taxa de ataque +100 / Crítico +3% / Poder de ataque Mín.,Máx. +6',
        },
        {
            bonus: [{ cod: codes.AR, value: 80 }, { cod: codes.HP, value: 30 }, { cod: codes.APmin, value: 7 }, { cod: codes.APmax, value: 7 }],
            title: 'Taxa de ataque +80 / HP +30 / Poder de ataque Mín.,Máx. +7',
        },
        {
            bonus: [{ cod: codes.MP, value: 30 }, { cod: codes.APmin, value: 7 }, { cod: codes.APmax, value: 7 }],
            title: 'Crítico +5% / MP +30 / Poder de ataque Mín.,Máx. +7',
        },
        {
            bonus: [{ cod: codes.MP, value: 50 }, { cod: codes.APmin, value: 7 }, { cod: codes.APmax, value: 7 }],
            title: 'Crítico +4% / MP +50 / Poder de ataque Mín.,Máx. +7',
        },
        {
            bonus: [{ cod: codes.HP, value: 50 }, { cod: codes.APmin, value: 7 }, { cod: codes.APmax, value: 7 }],
            title: 'Crítico +4% / HP +50 / Poder de ataque Mín.,Máx. +7',
        },
        {
            bonus: [{ cod: codes.AR, value: 80 }, { cod: codes.APmin, value: 7 }, { cod: codes.APmax, value: 7 }],
            title: 'Taxa de ataque +80 / Crítico +5% / Poder de ataque Mín.,Máx. +7',
        },
    ]
};

const mixEscudo: IMixes = {
    item: itens.escudo,
    type: [
        {
            bonus: [{ cod: codes.DEF, value: 10 }],
            title: 'Defesa +10'
        },
        {
            bonus: [{ cod: codes.HP, value: 10 }],
            title: 'HP +10'
        },
        {
            bonus: [{ cod: codes.DEF, value: 10, percent: true }],
            title: 'Defesa +10%'
        },
        {
            bonus: [{ cod: codes.DEF, value: 15 }, { cod: codes.ABS, value: 0.3 }],
            title: 'Defesa +15 / Absorção +0.3'
        },
        {
            bonus: [{ cod: codes.ABS, value: 0.3 }],
            title: 'Absorção +0.3'
        },
        {
            bonus: [{ cod: codes.DEF, value: 10 }, { cod: codes.ABS, value: 0.6 }],
            title: 'Defesa +10 / Absorção +0.6'
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }, { cod: codes.ABS, value: 0.3 }],
            title: 'Defesa +20 / Absorção +0.3'
        },
        {
            bonus: [{ cod: codes.ABS, value: 0.6 }],
            title: 'Absorção +0.6 / Taxa de bloqueio +4%'
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }],
            title: 'Defesa +40 / Taxa de bloqueio +2%'
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }],
            title: 'Defesa +20 / Taxa de bloqueio +4%'
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }, { cod: codes.MP, value: 10 }, { cod: codes.RES, value: 50 }],
            title: 'Defesa +40 / MP +10 / RES +50'
        },
        {
            bonus: [{ cod: codes.HP, value: 20 }],
            title: 'Taxa de bloqueio +3% / HP +20'
        },
        {
            bonus: [{ cod: codes.ABS, value: 1 }, { cod: codes.MP, value: 20 }],
            title: 'Absorção +1.0 / MP +20'
        },
        {
            bonus: [{ cod: codes.ABS, value: 0.6 }, { cod: codes.HP, value: 40 }],
            title: 'Absorção +0.6 / HP +40'
        },
        {
            bonus: [{ cod: codes.HP, value: 40 }],
            title: 'HP +40'
        },
        {
            bonus: [{ cod: codes.DEF, value: 50 }, { cod: codes.MP, value: 20 }, { cod: codes.RES, value: 60 }],
            title: 'Defesa +50 / MP +20 / RES +60'
        },
        {
            bonus: [{ cod: codes.HP, value: 30 }],
            title: 'Taxa de bloqueio +4% / HP +30'
        },
        {
            bonus: [{ cod: codes.ABS, value: 2 }, { cod: codes.MP, value: 30 }],
            title: 'Absorção +2.0 / MP +30'
        },
        {
            bonus: [{ cod: codes.DEF, value: 60 }],
            title: 'Defesa +60 / Taxa de bloqueio +5%'
        },
        {
            bonus: [{ cod: codes.ABS, value: 2 }, { cod: codes.HP, value: 20 }, { cod: codes.MP, value: 20 }],
            title: 'Absorção +2.0 / HP +20 / MP +20'
        },
        {
            bonus: [{ cod: codes.HP, value: 50 }],
            title: 'Taxa de bloqueio +4% / HP +50'
        },
    ]
};

const mixOrbital: IMixes = {
    item: itens.orbital,
    type: [
        {
            bonus: [{ cod: codes.DEF, value: 10 }],
            title: 'Defesa +10',
        },
        {
            bonus: [{ cod: codes.MP, value: 20 }],
            title: 'MP +20',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10, percent: true }],
            title: 'Defesa +10%',
        },
        {
            bonus: [{ cod: codes.DEF, value: 15 }, { cod: codes.ABS, value: 0.4 }],
            title: 'Defesa +15 / Absorção +0.4',
        },
        {
            bonus: [{ cod: codes.ABS, value: 0.8 }],
            title: 'Absorção +0.8',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10 }],
            title: 'Defesa +10 / Regen. de MP +0.4',
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }],
            title: 'Defesa +20 / Regen. de MP +0.2',
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }],
            title: 'Defesa +40',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10 }],
            title: 'Defesa +10 / Regen. de MP +0.6',
        },
        {
            bonus: [{ cod: codes.DEF, value: 50 }, { cod: codes.ABS, value: 1 }],
            title: 'Defesa +50 / Absorção 1.0',
        },
        {
            bonus: [{ cod: codes.DEF, value: 40 }],
            title: 'Defesa +40 / Regen. de MP +0.4',
        },
        {
            bonus: [{ cod: codes.MP, value: 40 }],
            title: 'Regen. de MP +0.5 / MP +40',
        },
        {
            bonus: [{ cod: codes.DEF, value: 10 }, { cod: codes.RES, value: 40 }],
            title: 'Defesa +10 / Regen. de MP +0.4 / RES +40',
        },
        {
            bonus: [{ cod: codes.MP, value: 50 }, { cod: codes.RES, value: 50 }],
            title: 'MP +50 / RES +50',
        },
        {
            bonus: [{ cod: codes.ABS, value: 1 }, { cod: codes.HP, value: 20 }],
            title: 'Absorção +1.0 / Regen. de MP +0.6 / HP +20',
        },
        {
            bonus: [{ cod: codes.MP, value: 30 }],
            title: 'MP +30',
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }, { cod: codes.RES, value: 50 }],
            title: 'Defesa +20 / Regen. de MP +0.8 / RES +50',
        },
        {
            bonus: [{ cod: codes.MP, value: 60 }, { cod: codes.RES, value: 50 }],
            title: 'MP +60 / RES +50',
        },
        {
            bonus: [{ cod: codes.ABS, value: 1.5 }, { cod: codes.HP, value: 30 }],
            title: 'Absorção +1.5 / Regen. de MP +1.0 / HP +30',
        },
        {
            bonus: [{ cod: codes.DEF, value: 30 }, { cod: codes.RES, value: 50 }],
            title: 'Defesa +30 / Regen. de MP +1.0 / RES +50',
        },
        {
            bonus: [{ cod: codes.ABS, value: 2 }, { cod: codes.HP, value: 30 }],
            title: 'Absorção +2.0 / Regen. de MP +1.2 / HP +30',
        },
        {
            bonus: [{ cod: codes.DEF, value: 20 }, { cod: codes.MP, value: 60 }],
            title: 'Defesa +20 / Regen. de MP +1.2 / MP +60',
        },
    ]
}

const bonusMixes: IMixes[] = [mixArmadura, mixArma, mixEscudo, mixOrbital];

export default bonusMixes;