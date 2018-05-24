import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import IStatusInput from '../interfaces/IStatusInput';
import InputText from './InputText';
import Title from './Title';

interface IStatusComp {
    onStatusUpdated: (inputs: IStatusInput[]) => void,
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
                                    ref={ref => this.putAtIndex(item.name, ref, index)}
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

    public componentDidUpdate() {
        
        this.inputs.forEach((input, index) => {
            const status = this.state.status[index];
            if (input.element !== null && status !== undefined) {
                input.element.setValue(status.default.toString());
            }
        });
        if(this.props.onStatusUpdated !== undefined){
            this.props.onStatusUpdated(this.inputs);
        }
    }

    private onStatusChanged = (title: string, value: number, oldValue: number) => {
        if (this.props.onStatusChanged !== undefined) {
            title = title.replace(":", "");
            this.props.onStatusChanged(title, oldValue, value);
        }
    }

    private putAtIndex = (text: string, item: InputText | null, index: number) => {
        const element = { title: text, element: item };
        if(this.inputs.length <= index){
            this.inputs.push(element);
        }else{
            this.inputs[index] = element;
        }
    }


}

export default Status;