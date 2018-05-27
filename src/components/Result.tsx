import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import IStatusResult from '../interfaces/IStatusResult';
import InputText from './InputText';

class Result extends React.Component<{}>{

    public state: { status: IStatus[] };
    private inputs: Array<{ input: InputText | null }>;

    constructor(props: {}) {
        super(props);
        this.inputs = [];
        this.state = { status: [] };
    }

    public setResult(result: IStatusResult) {
        this.setState({ status: this.asStatus(result) });
    }

    public render() {
        return (
            <div className="item-size outter-border background padding">
                {
                    this.state.status.map((v, i) => {
                        return <InputText
                            ref={ref => this.putAtIndex(ref, i) }
                            key={i}
                            title={v.name + ":"}
                            disable={v.disable}
                        />
                    })
                }
            </div>
        );
    }

    public componentDidUpdate() {

        const status = this.state.status;
        this.inputs = this.inputs.map((item, index) => {
            const stat = status[index];
            if (item.input !== null && stat !== undefined) {
                item.input.setValue(stat.default.toString());
            }
            return item;
        });
    }

    private asStatus = (results: IStatusResult): IStatus[] => {
        return [
            { name: results.AR.title, default: results.AR.value.toString(), disable: true },
            { name: results.AP.title, default: results.AP.value.toString(), disable: true },
            { name: results.DEF.title, default: results.DEF.value.toString(), disable: true },
            { name: results.ABS.title, default: results.ABS.value.toString(), disable: true },
            { name: results.HP.title, default: results.HP.value.toString(), disable: true },
            { name: results.MP.title, default: results.MP.value.toString(), disable: true },
            { name: results.RES.title, default: results.RES.value.toString(), disable: true },
        ];
    }

    private putAtIndex = (item: InputText | null, index: number) => {
        if (this.inputs.length <= index) {
            this.inputs.push({ input: item });
        } else {
            this.inputs[index] = { input: item }
        }
    }
}

export default Result;