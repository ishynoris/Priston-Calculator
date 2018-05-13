import * as React from 'react';

import Image from './Image'
import InputText from './InputText';
import Mixing from './Mixing';

interface IItem { name: string, titles: string[], onlyImage?: boolean};

class Item extends React.Component<IItem>{

    public render() {

        let classValue: string = "";
        if (this.props.titles.length > 0) {
            classValue = "inner-border padding";
        }

        const classes = "item-size background outter-border padding";
        if(this.props.onlyImage){
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
                        return <InputText key={key++} title={t + ":"} onChangeValue={this.onChangeValue}/>
                    })
                }
                </div>
            </div>
        );
    }

    private onChangeValue = (title: string, value: string) => {
        // alert("Item " + this.props.name + " " + title + " " + value);
    }
}

export default Item;