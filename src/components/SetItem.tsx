import * as React from 'react';

import IItem from '../interfaces/IItem';
import Item from './Item';

interface ISetItem { onItemChanged: (title: string, value: number, oldValue: number ) => void }

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

    public render() {

        const itens = this.state.itens;
        if (itens.length === 0) {
            return null;
        }
        
        const lastsItens: string[] = [];
        return (
            <div className="col">
                <div className="row">
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
                            />;
                        })
                    }
                </div>
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
}
export default SetItem;