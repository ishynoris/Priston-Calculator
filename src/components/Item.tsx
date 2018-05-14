import * as React from 'react';

import Script from '../assets/js/Script';
import IBonus from '../interfaces/IBonus';
import Image from './Image'
import InputText from './InputText';
import Mixing from './Mixing';

interface IItem { 
    name: string, 
    titles: string[], 
    onlyImage?: boolean
    onChangeValue?: (bonus: IBonus[]) => void,
};

class Item extends React.Component<IItem>{

    public state: { bonus: IBonus[] | undefined }
    
    private script = new Script;

    constructor(props: IItem) {
        super(props);
        this.state = { bonus: this.script.getBonusFromItem(this.props.name) };
    }

    public render() {
        let classValue: string = "";
        if (this.props.titles.length > 0) {
            classValue = "inner-border padding";
        }

        const classes = "item-size background outter-border padding";
        if (this.props.onlyImage) {
            return (
                <div className={classes}>
                    <Image item={this.props.name} />
                </div>
            )
        }

        let key = 0;
        return (
            <div className={classes}>
                <Image item={this.props.name} />
                <Mixing item={this.props.name} />
                <div className={classValue}>
                    {
                        this.props.titles.map((t) => {
                            return <InputText key={key++} title={t + ":"} onChangeValue={this.onChangeValue} />
                        })
                    }
                </div>
            </div>
        );
    }

    private onChangeValue = (title: string, value: number) => {
        
        const newBonus = this.state.bonus;
        const cod = this.script.getCodByAttr(title.replace(":", ""));

        if(cod === undefined || newBonus === undefined){
            return;
        }
        
        newBonus.forEach(b => {
            if(b.cod === cod){
                b.value = value;
            }
        });
        if(this.props.onChangeValue !== undefined){
            this.props.onChangeValue(newBonus);
        }
    }
}

export default Item;