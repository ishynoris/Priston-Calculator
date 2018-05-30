import * as React from 'react';

import Image from './Image'
import InputText from './InputText';
import Mixing from './Mixing';

interface IItem { 
    name: string, 
    titles: string[], 
    onlyImage?: boolean
    onChangeValue?: (title: string, value: number, oldValue: number) => void,
};

class Item extends React.Component<IItem>{

    public render() {

        const inputs = () => {
            return this.props.titles.map((t, i) => {
                return <InputText key={i} title={t + ":"} onChangeValue={this.onChangeValue} />
            })
        };

        const attrClass = this.props.titles.length > 0 ? "inner-border padding" : "";
        return (
            <div className={"item-size background outter-border padding"}>
                <Image item={this.props.name} />
                {(() => {
                    if (this.props.onlyImage) {
                        return null;
                    }
                    return <div>
                        <Mixing item={this.props.name} />
                        <div className={attrClass}>
                            { inputs() }
                        </div>
                    </div>
                })()}
            </div>
        );
    }

    private onChangeValue = (title: string, value: number, oldValue: number) => {
        if(this.props.onChangeValue !== undefined){
            this.props.onChangeValue(title.replace(":", ""), value, oldValue);
        }
    }
}

export default Item;