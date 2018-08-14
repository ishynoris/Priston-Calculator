import * as React from 'react';

import SelectTitle from './SelectTitle';

interface ICharSelect {
    title: string,
    name: string,
    chars: string[]
    disabled?: boolean
    onCharSelect?: (name: string | undefined, index: number) => boolean
}

class CharSelect extends React.Component<ICharSelect>{

    public state: { char: string | undefined }
    private select: SelectTitle | null;

    constructor (props: ICharSelect) {
        super(props);
        this.state = { char: undefined }
    }

    public getValue (): { index: number, value: string } | undefined {
        return this.select === null ? undefined : this.select.getValue();
    }

    public render() {
        const chars = this.charsAsValues();
        return <SelectTitle
            ref={ref => this.select = ref}
            title={this.props.title}
            name={this.props.name}
            values={chars}
            onSelectedCallback={this.onCharSelect} />
    }

    private charsAsValues(): Array<{ value: string, option: string }> {
        const chars: Array<{ value: string, option: string }> = [];
        chars.push({ value: "-", option: "-" });
        this.props.chars.forEach(c => {
            chars.push({ value: c, option: c });
        })
        return chars;
    }

    private onCharSelect = (name: string, index: number, value: string): boolean => {
        if (this.props.onCharSelect === undefined) {
            return false;
        }
        this.setState({ char: value });
        index--; // first index is "-"
        const charName = index < 0 ? undefined : value;
        return this.props.onCharSelect(charName, index);
    }

}
export default CharSelect;