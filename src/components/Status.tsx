import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import InputText from './InputText';
import Title from './Title';

import '../assets/css/Status.css';

class Status extends React.Component<{}>{

    public state: { status: IStatus | undefined };
    private inputs: Array<{ cod: number, element: InputText | null }>;

    constructor(props: IStatus) {
        super(props);
        this.inputs = [];
        this.state = { status: undefined };
    }

    public setDefaultStatus = (newStatus: IStatus | undefined) => {
        this.setState({ status: newStatus })
    }

    public render() {

        if (this.state.status === undefined) {
            return null;
        }

        return (
            <div>
                <Title title="Status" />
                <div className="item-block outter-border background padding">
                    {
                        this.state.status.values.map((v, i) => {
                            return (
                                <InputText
                                    ref={ref => this.inputs.push({ cod: i, element: ref })}
                                    key={i}
                                    defaultValue={v.default.toString()}
                                    title={v.name + ":"}
                                    disable={v.disable}
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

            this.inputs.map((input, i) => {
                const value = status.values[i];
                if (input.element !== null && value !== undefined) {
                    input.element.setValue(value.default.toString());
                }
            })
        }
    }
}

export default Status;