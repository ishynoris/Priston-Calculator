import IQuest from '../../interfaces/IQuest';
import Values from './Values';

const codes = Values.codes;

const quests: IQuest[] = [
    {
        
        bonus: [{ cod: -1, value: -1 }],
        title: "-",
    },
    {
        bonus: [],
        title: "Quest level 20 (1º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.STS.cod, value: 5 }],
        title: "Quest level 30 - Por Ela",
    },
    {
        bonus: [{ cod: codes.HP.cod, value: 15 }],
        title: "Quest level 40 (2º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP.cod, value: 1 }],
        title: "Quest level 55 - A Caverna",
    },
    {
        bonus: [],
        title: "Quest level 60 (3º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP.cod, value: 1 }, { cod: codes.STS.cod, value: 5 }],
        title: "Quest level 70 - A Amizade de Michelle",
    },
    {
        bonus: [],
        title: "Quest level 80 (4º desafio de classe)",
    },
    {
        bonus: [{ cod: codes.SP.cod, value: 2 }, { cod: codes.STS.cod, value: 5 }],
        title: "Quest level 80 - O Fúria Aprisionado",
    },
    {
        bonus: [{ cod: codes.STS.cod, value: 7 }],
        title: "Quest level 80 - O Teste da Realeza",
    },
    {
        bonus: [],
        title: "Quest level 85 - As Lágrimas de Calliar",
    },
    {
        bonus: [{ cod: codes.HP.cod, value: 40 }],
        title: "Quest level 90 - A Vila Eura",
    },
    {
        bonus: [{ cod: codes.STSP.cod, value: 10 }],
        title: "Quest level 90 - Teste Amargo",
    },
    {
        bonus: [],
        title: "Quest level 100 - Fantasma do Fúria",
    },
    {
        bonus: [{ cod: codes.EP.cod, value: 2 }],
        title: "Quest level 110",
    },
    {
        bonus: [{ cod: codes.EP.cod, value: 3 }],
        title: "Quest level 118",
    },
    {
        bonus: [{ cod: codes.STS.cod, value: 10 }, { cod: codes.EP.cod, value: 3 }],
        title: "Quest level 123",
    },
]

export default quests;