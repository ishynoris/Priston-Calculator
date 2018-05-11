import * as React from 'react';

interface IExample { comp: string}

class Example extends React.Component <IExample>{


    public render() {
        
        return (<div>
            <label>{this.props.comp}</label>
            <div>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default Example;