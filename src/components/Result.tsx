import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import IStatusResult from '../interfaces/IStatusResult';
import InputText from './InputText';

interface IResults { results: IStatusResult[] }

class Result extends React.Component<IResults>{

    public state: { status: IStatus[] };
    private inputs: Array<{ input: InputText | null }>;

    constructor(props: IResults) {
        super(props);
        this.inputs = [];
        this.state = { status: this.asStatus(props.results) };
    }

    public setResult(result: IStatusResult[]) {
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
                            defaultValue={v.default.toString()}
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

    private asStatus = (results: IStatusResult[]): IStatus[] => {

        return results.map((result, index) => {
            return { name: result.text, disable: true, default: result.value.toString() };
        });
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