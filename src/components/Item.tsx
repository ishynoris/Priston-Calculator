import * as React from 'react';

import Script from '../assets/js/Script';
import IMix from '../interfaces/IMix';
import IStatusInput from '../interfaces/IStatusInput';
import Image from './Image'
import InputText from './InputText';
import Mixing from './Mixing';

interface IItem { 
    name: string, 
    titles: string[], 
    onlyImage?: boolean
    onChangeValue?: (title: string, value: number, oldValue: number) => void,
    onMixSelected?: (cod: string, mix: IMix | undefined) => void,
    onInputsCreated?: (inputs: IStatusInput[]) => void,
};

class Item extends React.Component<IItem>{

    private inputs: IStatusInput[];
    
    constructor (props: IItem){
        super(props);
        this.inputs = [];
    }

    public render() {

        const putAtIndex = (text: string, item: InputText | null, index: number) => {
            const element = { 
                element: item,
                title: this.props.name + "-" + Script.getCodByAttr(text)
            };
            if (this.inputs.length <= index) {
                this.inputs.push(element);
            } else {
                this.inputs[index] = element;
            }
        }
        
        const inputs = () => {
            return this.props.titles.map((t, i) => {
                return <InputText 
                    ref={ref => putAtIndex(t, ref, i)}
                    key={i} 
                    title={t + ":"} 
                    onChangeValue={this.onChangeValue} />
            })
        };
        const mixes = Script.getMixesByItem(this.props.name);
        const attrClass = this.props.titles.length > 0 ? "inner-border padding" : "";

        return (
            <div className={"item-size background outter-border padding"}>
                <Image item={this.props.name} />
                {(() => {
                    if (this.props.onlyImage) {
                        return null;
                    }
                    return <div>
                        <Mixing 
                            name={this.props.name} 
                            mixes={mixes !== undefined ? mixes.type : []}
                            onMixSelected={this.onMixSelected} />
                        <div className={attrClass}>
                            { inputs() }
                        </div>
                    </div>
                })()}
            </div>
        );
    }

    public componentDidMount () {
        if(this.props.onInputsCreated !== undefined) {
            this.props.onInputsCreated(this.inputs);
        }
    }

    private onChangeValue = (title: string, value: number, oldValue: number) => {
        if(this.props.onChangeValue !== undefined){
            this.props.onChangeValue(title.replace(":", ""), value, oldValue);
        }
    }

    private onMixSelected = (name: string, mix: IMix) => {
        if (this.props.onMixSelected !== undefined) {
            this.props.onMixSelected(name, mix);
        }
    }
}

export default Item;