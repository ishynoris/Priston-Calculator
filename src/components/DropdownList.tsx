import * as React from 'react';

import TitleSmall from './TitleSmall';

import '../assets/css/DropdownList.css'

interface IDropdownItem {
    title: string,
    value: string,
    onItemClicked?: (item: IDropdownItem) => void;
}
interface IDropdownList {
    text: string;
    itens: IDropdownItem[];
    onSelected?: (index: number, value: string) => void;
}
const DropdownItem = (props: IDropdownItem) => {
    const onItemClicked = () => {
        if (props.onItemClicked !== undefined) {
            props.onItemClicked(props);
        }
    }
    return <div onClick={onItemClicked}>
        <TitleSmall title={props.title} />
    </div>
}

class DropdownList extends React.Component<IDropdownList> {

    public state: { index: number, current: IDropdownItem };

    constructor (props: IDropdownList){
        super(props);
        const current = 0;
        this.state = { index: current, current: props.itens[current] }
    }

    public render() {

        const selected = (item: IDropdownItem) => {
            if (item.value === this.state.current.value){
                return <i className="fas fa-check fa-xs" /> 
            }
            return null;
        }

        const dropdownItem = (index: number, item: IDropdownItem) => {
            return <div key={index} className="dropdown-item">
                <div className="row">
                    <div className="col-md-2">
                        { selected(item) }
                    </div>
                    <div className="col-md-9">
                        <DropdownItem
                            title={item.title}
                            value={item.value}
                            onItemClicked={this.onItemClicked} />
                    </div>
                </div>
            </div>
        }

        const title = this.props.text + " [" + this.state.current.value + "]";
        return <div className="dropdown" >
            <div className="dropdown-btn outter-border background">
                <div className="row">
                    <div className="col-9">
                        <TitleSmall title={title}  />
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

    private onItemClicked = (dropdown: IDropdownItem) => {
        let indexClicked = this.state.index;
        this.props.itens.forEach((item, index) => {
            if (dropdown.value === item.value) {
                indexClicked = index;
            }
        })
        this.setState({ current: dropdown, index: indexClicked });
        if (this.props.onSelected !== undefined) {
            this.props.onSelected(indexClicked, dropdown.value);
        }
    }
}
export default DropdownList;