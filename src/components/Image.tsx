import * as React from 'react';

import Script from '../assets/js/Script';
import ILanguage from '../interfaces/ILanguage';

import '../assets/css/Image.css';

interface IImage { language: ILanguage, item: string }

class Image extends React.Component<IImage>{

    public static images = {
        amuleto: require("../assets/images/amuleto.png"),
        anel: require("../assets/images/anel.png"),
        arma: require("../assets/images/arma.png"),
        armadura: require("../assets/images/armadura.png"),
        bota: require("../assets/images/bota.png"),
        bracel: require("../assets/images/bracel.png"),
        escudo: require("../assets/images/escudo.png"),
        luva: require("../assets/images/luva.png"),
        orbital: require("../assets/images/orbital.png"),
        shelton: require("../assets/images/shelton.png"),
    }

    public static setImage = (language: ILanguage, item: string) => {
        const itensChar = Script.itensChar(language);
        return item === itensChar.Amulet.title ? Image.images.amuleto
            : item === itensChar.Rings.title ? Image.images.anel
            : item === itensChar.Weapon.title ? Image.images.arma
            : item === itensChar.Armor.title ? Image.images.armadura
            : item === itensChar.Boots.title ? Image.images.bota
            : item === itensChar.Armlet.title ? Image.images.bracel
            : item === itensChar.Shield.title ? Image.images.escudo
            : item === itensChar.Gauntlets.title ? Image.images.luva
            : item === itensChar.Orbital.title ? Image.images.orbital
            : item === itensChar.Shelton.title ? Image.images.shelton
            : undefined;
    }

    public simpleImage = (image: string) => { 
        return <div className="center" >
            <img src={image} />
        </div>
    }

    public doubleImage = (image: string) => {
        return <div className="center" >
            <img src={image} className="double" />
            <img src={image} className="double" />
        </div>
        
    }

    public render() {
        const image = Image.setImage(this.props.language, this.props.item);
        if(image === undefined){
            return null;
        }

        if (this.props.item === Script.itensChar(this.props.language).Rings.title) {
            return this.doubleImage(image);
        }
        return this.simpleImage(image);
    }
}
export default Image;