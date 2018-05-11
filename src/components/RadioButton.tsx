import * as React from 'react';

import Title from "./Title";

import '../assets/css/RadioButton.css';

interface IRadioButton {
    elements: { title: string, name: string, check: boolean, id: string }
    onChangeCallback?: (value: string) => void
}

class RadioButton extends React.Component<IRadioButton>{

    public onChanged = (e: React.FormEvent<HTMLInputElement>) => {

        if (this.props.onChangeCallback !== undefined) {
            this.props.onChangeCallback(e.currentTarget.value);
        }
    }

    public render() {

        const values = this.props.elements;
        return (
            <div className={"radiobutton"}>
                <input
                    className="rbt-input"
                    type="radio"
                    onChange={this.onChanged}
                    value={values.title}
                    id={values.id}
                    name={values.name}
                    defaultChecked={values.check} />
                <Title title={values.title} for={values.id} />
            </div>
        );
    }
}

export default RadioButton;