import * as React from 'react';

import IChar from '../interfaces/IChar';
import SelectTitle from './SelectTitle';

interface ICharSelect {
    title: string,
    name: string,
    chars: IChar[]
    disabled?: boolean
    onCharSelect?: (index: number, char: IChar | undefined) => boolean
}

class CharSelect extends React.Component<ICharSelect>{

    public render() {
        const chars = this.charsAsValues();

        return <SelectTitle
            title={this.props.title}
            name={this.props.name}
            values={chars}
            onSelectedCallback={this.onCharSelect} />
    }

    private charsAsValues(): Array<{ value: string, option: string }> {
        const chars: Array<{ value: string, option: string }> = [];
        chars.push({ value: "-", option: "-" });
        this.props.chars.forEach(c => {
            chars.push({ value: c.name, option: c.name });
        })
        return chars;
    }

    private onCharSelect = (index: number, value: string): boolean => {
        if (this.props.onCharSelect === undefined) {
            return false;
        }

        if (index === 0) {
            return this.props.onCharSelect(index, undefined);
        } 
        return this.props.onCharSelect(index, this.props.chars[index]);
    }

}
export default CharSelect;