import * as React from 'react';

import IBonus from '../interfaces/IBonus';
import IItem from '../interfaces/IItem';
import Item from './Item';

class SetItem extends React.Component<{}>{

    public state: { itens: IItem[], bonus: IBonus[] }

    constructor(props: {}) {
        super(props);
        this.state = { itens: [], bonus: [] };
    }


    public initState(newItens: IItem[]) {
        this.setState({ itens: newItens, bonus: this.state.bonus });
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
        let key = 10;
        const lastsItens = [""];
        return (
            <div className="row">
                {
                    itens.map(item => {
                        const repeated = lastsItens.indexOf(item.name) > -1;
                        if (!repeated) {
                            lastsItens.push(item.name);
                        }
                        return <Item
                            key={key++}
                            name={item.name}
                            titles={this.getTitles(item)}
                            onlyImage={repeated}
                            onChangeValue={this.onChanged} />;
                    })
                }
            </div>
        );
    }
    public shouldComponentUpdate(nextProps: {}, nextState: { itens: IItem[], bonus: IBonus[] }) {
        console.log(JSON.stringify(this.state.itens));
        return nextState !== this.state;
    }

    private getTitles = (item: IItem): string[] => {
        const titles: string[] = [];
        item.item.forEach(i => {
            titles.push(i.title);
        })
        return titles;
    }

    private onChanged = (newBonus: IBonus[]) => {
        // console.log("newBonus:\n" + JSON.stringify(newBonus) + "\nstate:\n" + JSON.stringify(this.state.bonus));

        if (this.state.bonus.length === 0) {

            // this.setState({ bonus: newBonus });

        } else {
            const bonus = this.state.bonus;
            newBonus.forEach(n => {
                const flag: IBonus | undefined = bonus.find(b => {
                    return b.cod === n.cod;
                });

                if (flag === undefined) {
                    // bonus.push(n);
                }

                // alert("flag: " + JSON.stringify(flag) + " " + JSON.stringify(n) + JSON.stringify(bonus));
            })
        }
    }
}
export default SetItem;