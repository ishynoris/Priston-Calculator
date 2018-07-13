import * as React from 'react';

import IForces from '../interfaces/IForces';
import Check from './CheckBox';
import Select from './Select';
import Title from './Title';
import TitleSmall from "./TitleSmall";

interface IBonusAP { 
    forces: IForces[],
    another: IForces[],
    onForceSelected?: (bonus: IForces | undefined) => boolean;
}

class BonusAP extends React.Component<IBonusAP>{

    public render() {

        if (this.props.forces.length === 0 && this.props.another.length === 0){
            return null;
        }

        const asValues = () => {
            const vals = this.props.forces.map((v, i) => {
                return { value: JSON.stringify(v.bonus), option: v.force.title }
            })
            vals.unshift({ value: "-", option: "-" })
            return vals;
        }

        return <div>
            <Title title="Bonus de dano" />
            <div className="item-size outter-border background padding">
                <div className="row">
                    <div className="col-sm-5">
                        <TitleSmall title={"Forces:"} />
                    </div>
                    <div className="col-sm-7">
                        <Select 
                            name={"Forces"} values={asValues()} 
                            onSelectedCallback={this.onSelected} />
                    </div> 
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        { this.props.another.map((f, i) => {
                            return <Check 
                                key={i} 
                                text={f.force.title} 
                                onChangeCallback={this.onChecked}/>
                        }) }
                    </div>
                </div>
            </div>
        </div>
    }

    private onSelected = (name: string, index: number, value: string): boolean => {
        if (this.props.onForceSelected === undefined) {
            return true;
        }
        if (index === 0) {
            return this.props.onForceSelected(undefined);
        }
        return this.props.onForceSelected(this.props.forces[index - 1]);
    }

    private onChecked = (title: string, checked: boolean) => {
        if (this.props.onForceSelected === undefined) {
            return;
        }
        const force = this.props.another.find(a => {
            return a.force.title === title;
        })
        this.props.onForceSelected(force === undefined ? undefined : force);
    }
}

export default BonusAP;