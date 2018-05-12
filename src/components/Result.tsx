import * as React from 'react';

import IStatus from '../interfaces/IStatus';
import InputText from './InputText';

class Result extends React.Component<{}>{
    
    public state: { status: IStatus | undefined};

    constructor(props: {}){
        super(props);
        this.state = {status: undefined};
    }

    public setValues(newStatus: IStatus | undefined){
        this.setState({status: newStatus});
    }

    public render() {
        if (this.state.status === undefined) {
            return null;
        }

        return (
            <div className="item-size outter-border background padding">
            {
                this.state.status.values.map((v, i) => {
                    
                    return <InputText
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
}

export default Result;