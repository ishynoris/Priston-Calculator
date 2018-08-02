import * as React from 'react';

import TitleSmall from './TitleSmall';

import '../assets/css/DropdownList.css'

interface IDropdownItem {
    title: string,
    value: string,
    onItemClicked?: (value: string) => void;
}
interface IDropdownList {
    text: string;
    itens: Array<{ title: string, value: string }>;
    onSelected?: (value: string) => void;
}
const DropdownItem = (props: IDropdownItem) => {
    const onItemClicked = () => {
        if (props.onItemClicked !== undefined) {
            props.onItemClicked(props.value);
        }
    }
    return <div className="dropdown-item" onClick={onItemClicked}>
        <div className="row">
            <div className="col-3">
                <i className="fas fa-check fa-xs" /> 
            </div>
            <div className="col-9">
                <TitleSmall title={props.title} />
            </div>
        </div>
    </div>
}

class DropdownList extends React.Component<IDropdownList> {

    public render() {

        return <div className="dropdown" >
            <div className="dropdown-btn outter-border background">
                <TitleSmall title={this.props.text} />
            </div>
            <div className="dropdown-content">
                {
                    this.props.itens.map((item, index) => {
                    return <DropdownItem
                        key={index}
                        title={item.title}
                        value={item.value}
                        onItemClicked={this.props.onSelected} />
                    })
                }
            </div>
        </div>
    }
}
export default DropdownList;