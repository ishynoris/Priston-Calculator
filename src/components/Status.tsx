import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import InputText from './InputText';
import Title from './Title';

import '../assets/css/Status.css';

class Status extends React.Component<{}>{

    public state: { status: IStatus[] };
    private inputs: Array<{ cod: number, element: InputText | null }>;

    constructor(props: {}) {
        super(props);
        this.inputs = [];
        this.state = { status: [] };
    }

    public setStatus (newStatus: IStatus[]) {
        this.setState({ status: newStatus });
        this.inputs.forEach((input, index) => {
            const status = newStatus[index];
            if(input.element !== null && status !== undefined){
                input.element.setValue(status.default.toString());
            }
        })
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
                                    ref={ref => this.inputs.push({ cod: index, element: ref })}
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
        console.log(title + " " + newValue);
    }
}

export default Status;