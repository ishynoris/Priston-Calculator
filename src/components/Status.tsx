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
    private statQuestBonus: number;
    private charStats: ICharacterStatus | undefined;
    private statsBase: ICharacterStatus;
    private inputs: IStatusInput[];

    constructor(props: IStatusComp) {
        super(props);
        this.state = { hasCharStats: false };
        this.statQuestBonus = 0;
        this.charStats = undefined
        this.statsBase = { lvl: 0, for: 0, int: 0, tal: 0, agi: 0, vit: 0 };
        this.inputs = ((titles: string[]) => {
            return titles.map(t => {
                return { title: t, element: null };
            })
        })(Script.stats);
    }

    public setStatus(newCharStats: ICharacterStatus) {
        this.charStats = newCharStats;
        this.statsBase = Object.assign(this.statsBase, newCharStats);
        if (!this.state.hasCharStats) {
            this.setState({ hasCharStats: true });
            return;
        }
        this.updateStats();
    }

    public setQuestBonus(bonus: number){
        this.statQuestBonus = bonus;
        if(this.charStats !== undefined){
            this.addStats(this.charStats);
        }
    }

    public render() {
        
        if (this.charStats === undefined) {
            return null;
        }

        const minValue = (stat: string): number => {
            if(this.statsBase === undefined){
                return -1
            }
            return stat === Script.itens.LVL.title ? this.statsBase.lvl 
                    : stat === Script.itens.FOR.title ? this.statsBase.for 
                    : stat === Script.itens.INT.title ? this.statsBase.int 
                    : stat === Script.itens.TAL.title ? this.statsBase.tal 
                    : stat === Script.itens.AGI.title ? this.statsBase.agi 
                    : stat === Script.itens.VIT.title ? this.statsBase.vit
                    : -1;
        } 

        const inputs = (() => {
            return Script.stats.map((stat, index) => {
                return <InputText
                        ref={ref => this.putAtIndex(stat, ref, index)}
                        key={index}
                        title={stat + ":"}
                        minValue={minValue(stat)}
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
    
    public addStats = (stats: ICharacterStatus) => {    
        const totalStats = this.inputs.find(input => {
            return input.title === Script.itens.STS.title;
        })
        if (totalStats === undefined || totalStats.element === null) {
			return;
        }
        
        const addStats = ((stats.lvl - 1) * 5) + this.sumStats(this.statsBase);
        const value = addStats - this.sumStats(stats) + this.statQuestBonus;
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

            this.addStats(this.charStats);
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

    private sumStats(stats: ICharacterStatus | undefined): number {
        if (stats === undefined) {
            return 0;
        }
        return stats.for + stats.int + stats.tal + stats.agi + stats.vit;
    }
}

export default Status;