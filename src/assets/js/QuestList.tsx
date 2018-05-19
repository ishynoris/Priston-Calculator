import IQuest from '../../interfaces/IQuest';
import Values from './Values';

const codes = Values.codes;

const quests: IQuest[] = [
    {
        bonus: [{ cod: -1, value: -1 }],
        level: -1,
        title: "-",
    },
    {
        bonus: [],
        level: 20,
        title: "Quest level 20 (1º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.STS, value: 5 }],
        level: 30,
        title: "Quest level 30 - Por Ela",
    },
    {
        bonus: [{ cod: codes.HP, value: 15 }],
        level: 40,
        title: "Quest level 40 (2º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP, value: 1 }],
        level: 55,
        title: "Quest level 55 - A Caverna",
    },
    {
        bonus: [],
        level: 60,
        title: "Quest level 60 (3º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP, value: 1 }, { cod: codes.STS, value: 5 }],
        level: 70,
        title: "Quest level 70 - A Amizade de Michelle",
    },
    {
        bonus: [],
        level: 80,
        title: "Quest level 80 (4º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP, value: 2 }, { cod: codes.STS, value: 5 }],
        level: 80,
        title: "Quest level 80 - O Fúria Aprisionado",
    },
    {
        bonus: [{ cod: codes.STSp, value: 2 }],
        level: 80,
        title: "Quest level 80 - O Teste da Realeza",
    },
    {
        bonus: [],
        level: 85,
        title: "Quest level 85 - As Lágrimas de Calliar",
    },
    {
        bonus: [{ cod: codes.HP, value: 40 }],
        level: 90,
        title: "Quest level 90 - A Vila Eura",
    },
    {
        bonus: [{ cod: codes.STSp, value: 3 }],
        level: 90,
        title: "Quest level 90 - Desafio Amargo",
    },
    {
        bonus: [],
        level: 100,
        title: "Quest level 100 - Fantasma do Fúria",
    },
    {
        bonus: [{ cod: codes.EP, value: 2 }],
        level: 110,
        title: "Quest level 110",
    },
    {
        bonus: [{ cod: codes.EP, value: 3 }],
        level: 118,
        title: "Quest level 118",
    },
    {
        bonus: [{ cod: codes.STS, value: 10 }, { cod: codes.EP, value: 3 }],
        level: 123,
        title: "Quest level 123",
    },
]

export default quests;