import * as React from 'react';

import IMix from '../interfaces/IMix';
import CheckBox from './CheckBox';
import Select from './Select';

interface IItem { 
    name: string, 
    mixes: IMix[],
    onMixSelected?: (name: string, mix: IMix | undefined) => void
};

class Mixing extends React.Component<IItem>{
    
    public state: { checked: boolean }
    private selectMix: Select | null;

    constructor (props: IItem){
        super(props)
        this.state = { checked: true }
        this.selectMix = null;
    }

    public render(){
        if(this.props.mixes.length === 0){
            return null;
        }
        const values = (() => {
            const vals: Array<{value: string, option: string}> = [];
            vals.push({ value: "-", option: "-" });
            this.props.mixes.forEach(m => {
                vals.push({ value: JSON.stringify(m.bonus), option: m.title })
            });
            return vals;
        })();
        return <div className="row padding">
            <div className="col-sm-4">
                <CheckBox text={"Mix?"} onChangeCallback={this.onChecked} />
            </div>
            <div className="col-sm-8">
            <Select 
                ref={ref => this.selectMix = ref}
                name={this.props.name} 
                values={values} 
                disabled={this.state.checked}
                onSelectedCallback={this.onSelected}/>
            </div>
        </div>
    }

    public componentDidUpdate() {
        if (this.selectMix !== null) {
            this.selectMix.changeValue(0);
        }
    }

    private onChecked = (title: string, check: boolean): boolean => {
        
        if (this.props.onMixSelected !== undefined) {
            this.props.onMixSelected(this.props.name, undefined);
        }
        if (this.selectMix !== null) {
            this.selectMix.changeValue(0);
        }
        this.setState({ checked: !check });
        return true;
    }

    private onSelected = (name: string, index: number, value: string): boolean => {
        if (this.props.onMixSelected !== undefined) {
            const mix = index === 0 ? undefined : this.props.mixes[index - 1];
            this.props.onMixSelected(this.props.name, mix);
        }
        return true;
    }
}

export default Mixing;