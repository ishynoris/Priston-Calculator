import * as React from 'react';

import Item from './Item';

interface IItem { name: string, titles: string[] }
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
                        return <Item key={key++} name={item.name} titles={item.titles} onlyImage={repeated} />;
                    })
                }
            </div>
        );
    }
}
export default SetItem;