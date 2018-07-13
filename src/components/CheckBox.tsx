import * as React from 'react';

import '../assets/css/CheckBox.css';

interface ICheckBox {
    text: string, 
    checked?: boolean, 
    onChangeCallback?: (title: string, check: boolean) => void
}

class CheckBox extends React.Component<ICheckBox>{
    
    public setInput: HTMLInputElement | null;
    
    public state = {
        checked: false,
    }

    constructor(props: ICheckBox){
        super(props);
        const check = props.checked === undefined ? false : props.checked
        this.state = {checked: check};
    }

    public onChanged = (e: React.FormEvent<HTMLInputElement>) => {

        this.setState({checked: e.currentTarget.checked});
        if(this.props.onChangeCallback !== undefined){
            this.props.onChangeCallback(this.props.text, this.state.checked);
        }
    }

    public render(){
        return (
            <div className="checkbox align-items-center">
                <label className="chb-label">
                    <input 
                        className="chb-input"
                        ref={input => this.setInput = input} 
                        type="checkbox" 
                        onChange={this.onChanged} 
                        checked={this.props.checked}
                    />
                    {this.props.text}
                </label>
            </div>
        );
    }
}
export default CheckBox