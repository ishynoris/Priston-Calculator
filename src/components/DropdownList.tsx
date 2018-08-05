import * as React from 'react';

import IKeyValue from '../interfaces/IKeyValue';
import TitleSmall from './TitleSmall';

import '../assets/css/DropdownList.css'

interface IDropdownItem {
    item: IKeyValue
    onItemClicked?: (item: IKeyValue) => void;
}
interface IDropdownList {
    default: number, 
    text: string;
    itens: IKeyValue[];
    onSelected?: (index: number, value: string) => void;
}
const DropdownItem = (props: IDropdownItem) => {
    const onItemClicked = () => {
        if (props.onItemClicked !== undefined) {
            props.onItemClicked(props.item);
        }
    }
    return <div onClick={onItemClicked}>
        <TitleSmall title={props.item.key} />
    </div>
}

class DropdownList extends React.Component<IDropdownList> {

    public state: { index: number, current: IKeyValue };

    constructor (props: IDropdownList){
        super(props);
        this.state = { index: this.props.default, current: props.itens[this.props.default] }
    }

    public render() {

        const selected = (el: IKeyValue) => {
            if (el.value === this.state.current.value){
                return <i className="fas fa-check fa-xs" /> 
            }
            return null;
        }

        const dropdownItem = (index: number, el: IKeyValue) => {
            return <div key={index} className="dropdown-item">
                <div className="row">
                    <div className="col-md-2">
                        { selected(el) }
                    </div>
                    <div className="col-md-9">
                        <DropdownItem
                            item={el}
                            onItemClicked={this.onItemClicked} />
                    </div>
                </div>
            </div>
        }

        return <div className="dropdown" >
            <div className="dropdown-btn outter-border background">
                <div className="row">
                    <div className="col-9">
                        <TitleSmall title={this.props.text}  />
                    </div>
                    <div className="col-2">
                        <i className="fas fa-caret-down fa-xs" />
                    </div>
                </div>
            </div>
            <div className="dropdown-content">
                { this.props.itens.map((item, index) => dropdownItem(index, item)) }
            </div>
        </div>
    }

    private onItemClicked = (item: IKeyValue) => {
        let indexClicked = this.state.index;
        this.props.itens.forEach((el, index) => {
            if (item.value === el.value) {
                indexClicked = index;
            }
        })
        this.setState({ current: item, index: indexClicked });
        if (this.props.onSelected !== undefined) {
            this.props.onSelected(indexClicked, item.value);
        }
    }
}
export default DropdownList;