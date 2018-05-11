import * as React from 'react';

import Script from '../assets/js/Script';
import IMix from '../interfaces/IMix';
import CheckBox from './CheckBox';
import Select from './Select';

import '../assets/css/Mixing.css';

interface IItem {item: string};

class Mixing extends React.Component<IItem>{
    
    public state = {
        checked: true,
    }

    public onChanged = (check: boolean) => {
        this.setState({checked: check});
    }

    public getValues (mixes: IMix[]): Array<{value: string, option: string}>{
        const values: Array<{value: string, option: string}> = [];
        mixes.forEach(m => {
            const value = JSON.stringify(m.bonus);
            values.push({"value": value, "option": m.title})
        });
        return values;
    }

    public render(){
        
        const scripts = new Script
        const mixes = scripts.getMixesByItem(this.props.item);
        
        if(mixes === undefined){
            return null;
        }

        const values = this.getValues(mixes.type);
        return( 
            <div className="row padding">
                <div className="col-sm-4">
                    <CheckBox text={"Mix?"} onChangeCallback={this.onChanged} />
                </div>
                <div className="col-sm-8">
                    <Select name={mixes.item} values={values} disabled={this.state.checked}/>
                </div>
            </div>
        )
    }
}

export default Mixing;