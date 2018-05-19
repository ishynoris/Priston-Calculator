import * as React from 'react';

import Script from '../assets/js/Script';
import IStatus from '../interfaces/IStatus';
import InputText from './InputText';
import Title from './Title';

import '../assets/css/Status.css';

class Status extends React.Component<{}>{

    public state: { status: IStatus[] };
    private inputs: Array<{ title: string, element: InputText | null }>;

    constructor(props: {}) {
        super(props);
        this.inputs = [];
        this.state = { status: [] };
    }

    public setQuest(lastQuest: number) {
        let newStats = 0;
        const actualLevel = this.getStatus(Script.itens.LVL.title);
        if(actualLevel === null){
            return;
        }

        const level = actualLevel.asNumber();
        if(isNaN(level)){
            return;
        }

        const script = new Script;
        const questsDone = script.getQuestsAt(lastQuest);
        if(level < questsDone[lastQuest].level){
            alert("Você ainda não possui level suficiente para realizar essa quest.");
            // return old value of select
            return;
        }

        questsDone.forEach(q => {
            q.bonus.forEach(b => {
                if (b.cod === Script.codes.STS) {
                    newStats += b.value;
                }
                if (b.cod === Script.codes.STSp) {
                    const dif = level - q.level;
                    newStats += dif * b.value + b.value;
                }
            })
        })

        this.addStats(newStats);
    }

    public setStatus(newStatus: IStatus[]) {
        this.setState({ status: newStatus });
        this.inputs.forEach((input, index) => {
            const status = newStatus[index];
            if (input.element !== null && status !== undefined) {
                input.element.setValue(status.default.toString());
            }
        });
    }

    public render() {

        const status = this.state.status;
        if (status.length === 0) {
            return null;
        }

        return (
            <div>
                <Title title="Status" />
                <div className="item-block outter-border background padding">
                    {
                        status.map((item, index) => {
                            return (
                                <InputText
                                    ref={ref => this.inputs.push({ title: item.name, element: ref })}
                                    key={index}
                                    defaultValue={item.default.toString()}
                                    title={item.name + ":"}
                                    disable={item.disable}
                                    onChangeValue={this.onChange}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    public componentDidUpdate() {
        if (this.inputs !== null) {

            const status = this.state.status;
            if (status === undefined) {
                return;
            }

            this.inputs.map((input, index) => {
                const value = status.values[index];
                if (input.element !== null && value !== undefined) {
                    input.element.setValue(value.default.toString());
                }
            })
        }
    }

    private onChange = (title: string, newValue: number) => {
        title = title.replace(":", "");
        const stats = this.state.status.find(s => {
            return s.name === title && title === Script.itens.LVL.title;
        });

        let toNumber: number = NaN;
        if (stats !== undefined) {
            toNumber = Number(newValue);
        }

        if (!isNaN(toNumber)) {
            this.updateStats((toNumber - 1) * 5);
        }
    }

    private addStats = (addValue: number) => {
        
        const totalStats = this.getStatus(Script.itens.STS.title);
        if (totalStats === null) {
            return;
        }
        let stats = totalStats.asNumber();
        if(!isNaN(stats)){
            stats += addValue;
            totalStats.setValue(stats.toString());
        }
    }

    private updateStats = (newValue: number) => {
        const totalStats = this.getStatus(Script.itens.STS.title);
        if (totalStats !== null) {
            totalStats.setValue(newValue.toString());
        }
    }
    private getStatus = (title: string): InputText | null => {
        const sts = this.inputs.find(input => {
            return input.title === title;
        });
        return sts !== undefined ? sts.element : null;
    }
}

export default Status;