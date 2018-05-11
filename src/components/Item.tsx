import * as React from 'react';

import Image from './Image'
import InputText from './InputText';
import Mixing from './Mixing';

interface IItem { name: string, titles: string[], onlyImage?: boolean};

class Item extends React.Component<IItem>{

    public renderValue = (key: number, title: string) => {
        title += ":";
        return <InputText key={key} title={title}/>
    }

    public render() {

        let key = 0;
        let classValue: string = "";
        if (this.props.titles.length > 0) {
            classValue = "inner-border padding";
        }

        if(this.props.onlyImage){
            return (
                <div className="block-size background outter-border padding">    
                    <Image item={this.props.name} />
                </div>
            )
        }


        return (
            <div className="it-size background outter-border padding">
                <Image item={this.props.name} />
                <Mixing item={this.props.name} />
                <div className={classValue}>
                {
                    this.props.titles.map((t) => {
                        return this.renderValue(key++, t);
                    })
                }
                </div>
            </div>
        );
    }
}

export default Item;