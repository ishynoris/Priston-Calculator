import * as React from 'react';
import { Link } from 'react-router-dom';

// import IChar from '../interfaces/IChar';
import IKeyValue from '../interfaces/IKeyValue';
import Button from './Button'
import DropdownList from './DropdownList';

interface IHeader { 
    lang: string
    release: { text: string },
    formula: { text: string },
    switchLang: {
        default: number, 
        text: string,
        itens: IKeyValue[],
        onSelected: (index: number, value: string) => void 
    },
}

const Header = (props: IHeader) => {
    
    return <div className="row " style={{ padding: "20px 20px 30px 20px" }}>
        <div className="col-md-3" >
            <Link to={"/releases"} style={{ marginRight: 10 }}>
                <Button text={props.release.text} />
            </Link>
            <Link to={{ pathname: "/formulas" }} >
                <Button text={props.formula.text} />
            </Link>
        </div>
        <div className="col-md-7"/>
        <div className="col-md-2">
            <DropdownList 
                default={props.switchLang.default}
                text={props.switchLang.text}
                itens={props.switchLang.itens}
                onSelected={props.switchLang.onSelected} />
        </div>
    </div>
}
export default Header;