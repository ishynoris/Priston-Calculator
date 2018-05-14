
import IChar from '../../interfaces/IChar';
import IItem from '../../interfaces/IItem';
import IMixes from '../../interfaces/IMixes';
import IQuest from '../../interfaces/IQuest';
import IStatus from '../../interfaces/IStatus';
import Values from '../js/Values';
import BonusMixes from './BonusMixes';
import CharacterStatus from './CharacterStatus';
import QuestList from './QuestList';

class Script {

    public static sets = { kit: "Kit", primario: "Primario", set: "Set" }
    public static codes = Values.codes;
    public static chars = CharacterStatus.names;

    public getMixesByItem(item: string): IMixes | undefined {
        
        return BonusMixes.find(bonus => {
            return bonus.item === item;
        });
    }

    public getItem(name: string): IItem | undefined {
        return Values.itens.find(i => {
            return i.name === name;
        });
    }

    public getBonusByItem(name: string){
        // const vals = [ {cod: 1, val: 1} ]
    }

    public getSetByName(name: string): IItem[] {
        const itens = Values.itens;
        const names = Values.itensName;

        const kit = [names.amuleto, names.anel, names.shelton];
        const primario = [names.arma, names.armadura, names.orbital];
        const set = [names.luva, names.bracel, names.bota];

        return itens.filter(i => {
            
            return name === Script.sets.kit ? existsIn(i.name, kit)
                : name === Script.sets.primario ? existsIn(i.name, primario)
                : name === Script.sets.set ? existsIn(i.name, set)
                : false;
        });
    }

    public getResult(): IStatus[] {
        return Values.result.map(r => {
            return { default: 10, disable: true, name: r.title }
        });
    }

    public getCharDetail(char: string | undefined): IChar | undefined {
        if (char === undefined) {
            return undefined;
        }
        return CharacterStatus.status.find(c => {
            return c.name === char;
        });
    }

    public getQuests(): IQuest[] {
        return QuestList;
    }

    public getChars(): Array<{ value: string, option: string }> {
        const chars = [asValueOption("-")];
        CharacterStatus.names.forEach(n => {
            chars.push(asValueOption(n.name));
        })
        return chars;
    }
}

function asValueOption(text: string): { value: string, option: string } {
    return { value: text, option: text }
}

function existsIn(name: string, values: string[]): boolean {
    return values.indexOf(name) > -1;
}

export default Script;