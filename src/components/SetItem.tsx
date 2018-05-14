import * as React from 'react';

import IItem from '../interfaces/IItem';
import Item from './Item';

interface IGroup { itens: IItem[] }

class SetItem extends React.Component<IGroup>{

    public state: {
        itens: IItem[]
    }

    constructor(props: IGroup) {
        super(props);
        this.state = { itens: props.itens };
    }

    public setItem(item: IItem, index?: number) {
        let mItens: IItem[] = this.state.itens;
        if (mItens !== undefined) {
            if (index === undefined || index > mItens.length) {
                mItens.push(item);
            } else {
                mItens[index] = item;
            }
        } else {
            mItens = [];
            mItens.push(item);
        }
        this.setState({ itens: mItens });
    }

    public render() {

        let key = 10;
        const itens = this.state.itens;
        if (itens === undefined || itens.length === 0) {
            return null;
        }

        const lastsItens = [""];
        return (
            <div className="row">
                {
                    itens.map(item => {
                        const repeated = lastsItens.indexOf(item.name) > -1;
                        if (repeated) {
                            return null;
                        }
                        lastsItens.push(item.name);
                        const titles = this.getTitles(item)
                        return <Item key={key++} name={item.name} titles={titles} onlyImage={repeated} />;
                    })
                }
            </div>
        );
    }

    private getTitles = (item: IItem): string[] => {
        const titles: string[] = [];
        item.item.forEach(i => {
            titles.push(i.title);
        })
        return titles;
    }
}
export default SetItem;