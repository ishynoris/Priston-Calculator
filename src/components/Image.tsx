import * as React from 'react';

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
        const itens = language.translations.itens;
        return item === itens.Amulet ? Image.images.amuleto
            : item === itens.Rings ? Image.images.anel
            : item === itens.Weapon ? Image.images.arma
            : item === itens.Armor ? Image.images.armadura
            : item === itens.Boots ? Image.images.bota
            : item === itens.Armlet ? Image.images.bracel
            : item === itens.Shield ? Image.images.escudo
            : item === itens.Gauntlets ? Image.images.luva
            : item === itens.Orbital ? Image.images.orbital
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

        if (this.props.item === this.props.language.translations.itens.Rings) {
            return this.doubleImage(image);
        }
        return this.simpleImage(image);
    }
}
export default Image;