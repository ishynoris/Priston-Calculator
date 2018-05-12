
import IChar from '../../interfaces/IChar';
import IItem from '../../interfaces/IItem';
import IMixes from '../../interfaces/IMixes';
import IStatus from '../../interfaces/IStatus';
import Values from '../js/Values';
import BonusMixes from './BonusMixes';
import CharacterStatus from './CharacterStatus';
import QuestList from './QuestList';

class Script {

    public static sets = {
        kit: "Kit", primario: "Primario", set: "Set"
    }

    public static chars = CharacterStatus.names;

    public static codes = Values.codes;

    public getMixesByItem(item: string): IMixes | undefined {
        const bonusMixes: IMixes[] = BonusMixes;
        let type: IMixes | undefined;
        bonusMixes.forEach(i => {
            if (i.item === item) {
                type = i;
            }
        })
        return type;
    }

    public getItem(name: string): IItem | undefined {
        const item: IItem | undefined = Values.itens.find(i => {
            return i.name === name;
        });
        return item;
    }

    public getSetByName(name: string): IItem[] {
        const itens = Values.itens;
        const names = Values.itensName;

        if (name === Script.sets.kit) {

            return itens.filter(i => {
                return (i.name === names.amuleto) || (i.name === names.anel) || (i.name === names.shelton);
            });

        } else if (name === Script.sets.primario) {

            return itens.filter(item => {
                return (item.name === names.arma) || (item.name === names.armadura) || (item.name === names.orbital);
            });
        } else if (name === Script.sets.set) {
            return itens.filter(item => {
                return (item.name === names.luva) || (item.name === names.bracel) || (item.name === names.bota);
            })
        }
        return [];
    }

    public getResult(): IStatus {

        const values = Values.result.map(r => {
            return { default: 10, disable: true, name: r.title }
        });
        return { values };
    }

    public getCharDetail(char: string | undefined): IChar | undefined {
        if (char === undefined) {
            return undefined;
        }
        return CharacterStatus.status.find(c => {
            return c.name === char;
        });
    }

    public getQuests(): Array<{ value: string, option: string }> {
        const values = QuestList.map(q => {
            return { value: JSON.stringify(q.bonus), option: q.title }
        })
        return values;
    }

    public getChars(): Array<{ value: string, option: string }> {
        const chars = [ this.asValueOption("-") ];
        CharacterStatus.names.forEach(n => {
            chars.push(this.asValueOption(n.name));
        })
        return chars;
    }

    private asValueOption = (text: string) => {
        return { value: text, option: text };
    }
}

export default Script;