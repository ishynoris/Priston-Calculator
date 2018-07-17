import * as React from 'react';

import '../assets/css/CheckBox.css';

interface ICheckBox {
    text: string, 
    checked?: boolean, 
    onChangeCallback?: (title: string, check: boolean) => boolean
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

        if(this.props.onChangeCallback !== undefined){
            const changes = this.props.onChangeCallback(this.props.text, this.state.checked);
            if (changes) {
                this.setState({ checked: e.currentTarget.checked });
            } else {
                e.currentTarget.checked = !e.currentTarget.checked;
            }
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