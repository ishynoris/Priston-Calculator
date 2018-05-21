import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import IStatusInput from '../interfaces/IStatusInput';
import InputText from './InputText';
import Title from './Title';

interface IStatusComp {
    onStatusMount: (inputs: IStatusInput[]) => void,
    onStatusChanged?: (title: string, oldValue:number, newValue: number) => void
}

class Status extends React.Component<IStatusComp>{

    public state: { status: IStatus[] };
    private inputs: IStatusInput[];

    constructor(props: IStatusComp) {
        super(props);
        this.inputs = [];
        this.state = { status: [] };
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
                <div className="item-size outter-border background padding">
                    {
                        status.map((item, index) => {
                            return (
                                <InputText
                                    ref={ref => this.inputs.push({ title: item.name, element: ref })}
                                    key={index}
                                    defaultValue={item.default.toString()}
                                    title={item.name + ":"}
                                    disable={item.disable}
                                    onChangeValue={this.onStatusChanged}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    public componentDidMount(){
        if(this.props.onStatusMount !== undefined){
            this.props.onStatusMount(this.inputs);
        }
    }

    public componentDidUpdate() {

        const status = this.state.status;
        if (status === undefined) {
            return;
        }

        this.inputs.map((input, index) => {
            const value = status.values[index];
            if (input.element !== null && value !== undefined) {
                input.element.setValue(value.default.toString());
            }
        });
    }

    private onStatusChanged = (title: string, value: number, oldValue: number) => {
        if (this.props.onStatusChanged !== undefined) {
            title = title.replace(":", "");
            this.props.onStatusChanged(title, oldValue, value);
        }
    }
}

export default Status;