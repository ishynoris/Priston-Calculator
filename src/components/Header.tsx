import * as React from 'react';
import { Link } from 'react-router-dom';

import IKeyValue from '../interfaces/IKeyValue';
import Button from './Button'
import DropdownList from './DropdownList';

interface IHeader { 
    release: {
        text: string,
        onClicked?: () => void
    },
    switchLang: {
        default: number, 
        text: string,
        itens: IKeyValue[],
        onSelected: (index: number, value: string) => void 
    },
}

const Header = (props: IHeader) => {

    return <div className="row " style={{ padding: "20px 20px 30px 20px" }}>
        <div className="col-md-2">
            <DropdownList 
                default={props.switchLang.default}
                text={props.switchLang.text}
                itens={props.switchLang.itens}
                onSelected={props.switchLang.onSelected} />
        </div>
        <div className="col-md-2" >
            <Link to="/releases">
                <Button text={props.release.text} />
            </Link>
        </div>
    </div>
}
export default Header;