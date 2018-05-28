import * as React from 'react';

import Script from '../assets/js/Script';
import ICharacterStatus from '../interfaces/ICharacterStatus';
import IStatusInput from '../interfaces/IStatusInput';
import InputText from './InputText';
import Title from './Title';

interface IStatusComp {
    onStatusChanged?: (charStats: ICharacterStatus) => void
}

class Status extends React.Component<IStatusComp>{

    public state: { hasCharStats: boolean };
    private charStats: ICharacterStatus | undefined;
    private inputs: IStatusInput[];

    constructor(props: IStatusComp) {
        super(props);
        this.state = { hasCharStats: false };
        this.charStats = undefined;
        this.inputs = ((titles: string[]) => {
            return titles.map(t => {
                return { title: t, element: null };
            })
        })(Script.stats);
    }

    public setStatus(newCharStats: ICharacterStatus) {
        this.charStats = newCharStats;
        if (!this.state.hasCharStats) {
            this.setState({ hasCharStats: true });
            return;
        }
        this.updateStats();
    }

    public render() {
        
        if (this.charStats === undefined) {
            return null;
        }

        const inputs = (() => {
            return Script.stats.map((stat, index) => {
                return <InputText
                        ref={ref => this.putAtIndex(stat, ref, index)}
                        key={index}
                        title={stat + ":"}
                        disable={stat === Script.itens.STS.title}
                        onChangeValue={this.onStatusChanged} />
            })
        })();

        return (
            <div>
                <Title title="Status" />
                <div className="item-size outter-border background padding">
                    { inputs }
                </div>
            </div>
        );
    }

    public componentDidUpdate() {

        if (this.charStats === undefined) {
            return;
        }
        this.updateStats();
    }
    
    public addStats = (level: number, addValue?: number) => {
        
        const totalStats = this.inputs.find(input => {
            return input.title === Script.itens.STS.title;
        })
        if (totalStats === undefined || totalStats.element === null) {
			return;
        }
        
        let value = (level - 1) * 5;
        if(addValue !== undefined){
            value += addValue;
        }
		totalStats.element.setValue(value.toString());
    }

    private onStatusChanged = (title: string, value: number, oldValue: number) => {
        title = title.replace(":", "");

        if (this.charStats !== undefined){
            switch (title) {
                case Script.itens.LVL.title: this.charStats.lvl = value; break;
                case Script.itens.FOR.title: this.charStats.for = value; break;
                case Script.itens.AGI.title: this.charStats.agi = value; break;
                case Script.itens.TAL.title: this.charStats.tal = value; break;
                case Script.itens.INT.title: this.charStats.int = value; break;
                case Script.itens.VIT.title: this.charStats.vit = value; break;
            }

            if (title === Script.itens.LVL.title) {
                this.addStats(value);
            }
            
            if (this.props.onStatusChanged !== undefined) {
                this.props.onStatusChanged(this.charStats);
            }
        }
    }

    private updateStats = () => {

        const statValue = (title: string) => {
            if (this.charStats === undefined) {
                return undefined;
            }
            return title === Script.itens.LVL.title ? this.charStats.lvl
                : title === Script.itens.FOR.title ? this.charStats.for
                : title === Script.itens.INT.title ? this.charStats.int
                : title === Script.itens.TAL.title ? this.charStats.tal
                : title === Script.itens.AGI.title ? this.charStats.agi
                : title === Script.itens.VIT.title ? this.charStats.vit
                : title === Script.itens.STS.title ? 0
                : undefined;
        };

        this.inputs.forEach(input => {
            if (input.element !== null) {
                const stat = statValue(input.title);
                input.element.setValue(stat === undefined ? "?" : stat.toString());
            }
        })
    }

    private putAtIndex = (text: string, item: InputText | null, index: number) => {
        const element = { title: text, element: item };
        if (this.inputs.length <= index) {
            this.inputs.push(element);
        } else {
            this.inputs[index] = element;
        }
    }
}

export default Status;