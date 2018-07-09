import * as React from 'react';

import IItem from '../interfaces/IItem';
import IMix from '../interfaces/IMix';
import IStatusInput from '../interfaces/IStatusInput';
import Item from './Item';

interface ISetItem { 
    onItemChanged: (title: string, value: number, oldValue: number ) => void,
    onMixSelected: (name: string, mix: IMix) => void,
    onInputValues?: (inputs: IStatusInput[]) => void,
}

class SetItem extends React.Component<ISetItem>{

    public state: { itens: IItem[] }

    constructor(props: ISetItem) {
        super(props);
        this.state = { itens: [] };
    }

    public initState(newItens: IItem[]) {
        this.setState({ itens: newItens });
    }

    public addItem(item: IItem, index?: number) {
        const mItens = this.state.itens;

        if (index === undefined || index > mItens.length) {
            mItens.push(item);
        } else {
            mItens[index] = item;
        }

        this.setState({ itens: mItens });
    }

    public removeItem(index?: number) {
        const mItens = this.state.itens;
        const position = index !== undefined ? index : mItens.length - 1;
        mItens.splice(position, 1);
        this.setState({ itens: mItens });
    }
    
    public render() {

        const itens = this.state.itens;
        if (itens.length === 0) {
            return null;
        }
        
        const lastsItens: string[] = [];
        return (
                <div className="row item-row">
                    {
                        itens.map((item, index) => {
                            const repeated = lastsItens.indexOf(item.name) > -1;
                            if (!repeated) {
                                lastsItens.push(item.name);
                            }
                            return <Item
                                key={index}
                                name={item.name}
                                titles={this.getTitles(item)}
                                onlyImage={repeated}
                                onChangeValue={this.onChanged}
                                onInputsCreated={this.inputs} 
                                onMixSelected={this.onMixSelected}
							/>;
                        })
                    }
                </div>
        );
    }
    public shouldComponentUpdate(nextProps: {}, nextState: { itens: IItem[] }) {
        return nextState !== this.state;
    }

    private getTitles = (item: IItem): string[] => {
        const titles: string[] = [];
        item.item.forEach(i => {
            titles.push(i.title);
        })
        return titles;
    }

    private onChanged = (title: string, value: number, oldValue: number) => {
        if (this.props.onItemChanged !== undefined) {
            this.props.onItemChanged(title, value, oldValue);
        }
    }

    private inputs = (inputs: IStatusInput[]) => {
        if (this.props.onInputValues !== undefined) {
            this.props.onInputValues(inputs);
        }
    }

    private onMixSelected = (name: string, mix: IMix) => {
        if (this.props.onMixSelected !== undefined) {
            this.props.onMixSelected(name, mix);
        }
    }
}
export default SetItem;