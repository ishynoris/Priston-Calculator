import IVersion from "../../interfaces/IVersion";

export default class Versions {

    public static current(): IVersion {
        const versions = Versions.versions();
        return versions[versions.length -1];
    }

    public static description(version: IVersion): string {
        return "v" + version.v + (version.subV !== undefined ? "." + version.subV : "") 
            + " - " + version.tag
            + " - " + version.date;
    }


    public static versions (): IVersion[] {
        return [
            {
                date: "18/07/2018",
                descriptions: ["Liberada todas as fórmulas para Arqueira, Sacerdotisa e Cavaleiro."],
                tag: "alfa",
                v: 0.1,
            }, {
                date: "27/07/2018",
                descriptions: ["Liberada as fórmulas de AR, DEF, ABS, HP, MP e RES para todos os personagens (incluindo Guerreira)."],
                tag: "alfa",
                v: 0.2,
            }, {
                date: "28/07/2018",
                descriptions: ["Adicionado as fórmulas de AP para Atalanta, Assassina e Guerreira."],
                tag: "alfa",
                v: 0.3,
            }, {
                date: "29/07/2018",
                descriptions: [
                    "Adicionado as fórmulas de AP para Mago e Lutador.", 
                    "A fórmula para Sacerdotisa foi corrigida."
                ],
                subV: 1,
                tag: "alfa",
                v: 0.3,
            }, {
                date: "02/08/2018",
                descriptions: [ "Adicionado seleção de idiomas." ],
                tag: "alfa",
                v: 0.4,
            }, {
                date: "03/08/2018",
                descriptions: [ "Notas de cada nova atualização." ],
                tag: "alfa",
                v: 0.5,
            }, {
                date: "03/08/2018",
                descriptions: [ 
                    "Correção de erro ao acessar Notas de atualização.",
                    "Novas traduções."
                ],
                subV: 1,
                tag: "alfa",
                v: 0.5,
            }, {
                date: "05/08/2018",
                descriptions: [ 
                    "Liberada as fórmulas de AP para e Mecânico, Pikeman e Xama.",
                    "Revisão geral das fórmulas dos personagens e correção de alguns erros.",
                    "Novas traduções.",
                ],
                tag: "alfa",
                v: 0.6,
            }, {
                date: "10/08/2018",
                descriptions: [ 
                    "Liberado o adicional dos boosters de Poder de Ataque",
                    "Liberado as fórmulas bases de todos os personagens."
                ],
                tag: "alfa",
                v: 0.7,
            }, {
                date: "27/03/2019",
                descriptions: [ "Data dos versionamentos." ],
                subV: 1,
                tag: "alfa",
                v: 0.7,
			}, 
			{
				date: "12/01/2020",
				descriptions: [ 
					"Ajusta habilidades para receber mais de um atributo.",
					"Corrige erros ao calcular a ABS do personagem."
				],
				subV: 2,
				tag: "alfa",
				v: 0.7,
            }
        ]
    }
}