import * as React from 'react';

import IAttr from '../interfaces/IAttr';
import IItem from '../interfaces/IItem';
import IMix from '../interfaces/IMix';
import Item from './Item';

interface ISetItem { 
    onItemChanged: (title: string, attr: IAttr, oldValue: number ) => void,
    onMixSelected: (name: string, mix: IMix) => void,
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
        const titles = (attrs: IAttr[] ) => {
            const vals: string[] = []
            attrs.forEach(a => {
                vals.push(a.title);
            })
            return vals;
        };
        
        const lastsItens: string[] = [];
        return <div className="row item-row">
            {
                itens.map((item, index) => {
                    const repeated = lastsItens.indexOf(item.name) > -1;
                    if (!repeated) {
                        lastsItens.push(item.name);
                    }
                    return <Item
                        key={index}
                        name={item.name}
                        titles={titles(item.attrs)}
                        onlyImage={repeated}
                        onChangeValue={this.onChanged}
                        onMixSelected={this.onMixSelected} />;
                })
            }
        </div>
    }

    public shouldComponentUpdate(nextProps: {}, nextState: { itens: IItem[] }) {
        return nextState !== this.state;
    }

    private onChanged = (title: string, attr: IAttr, oldValue: number) => {
        if (this.props.onItemChanged !== undefined) {
            this.props.onItemChanged(title, attr, oldValue);
        }
    }
    
    private onMixSelected = (name: string, mix: IMix) => {
        if (this.props.onMixSelected !== undefined) {
            this.props.onMixSelected(name, mix);
        }
    }
}
export default SetItem;