import * as React from 'react';
import Values from '../assets/js/Values';

import '../assets/css/Image.css';

interface IImage { item: string }

class Image extends React.Component<IImage>{


    public static hasImage (name: string): boolean {
        return this.setImage(name) !== undefined
    }
    private static images = {
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

    private static setImage = (item: string) => {
        const itensName = Values.itensName
        return item === itensName.amuleto.title ? Image.images.amuleto
            : item === itensName.anel.title ? Image.images.anel
            : item === itensName.arma.title ? Image.images.arma
            : item === itensName.armadura.title ? Image.images.armadura
            : item === itensName.bota.title ? Image.images.bota
            : item === itensName.bracel.title ? Image.images.bracel
            : item === itensName.escudo.title ? Image.images.escudo
            : item === itensName.luva.title ? Image.images.luva
            : item === itensName.orbital.title ? Image.images.orbital
            : item === itensName.shelton.title ? Image.images.shelton
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
        const image = Image.setImage(this.props.item);
        if(image === undefined){
            return null;
        }

        if (this.props.item === Values.itensName.anel.title) {
            return this.doubleImage(image);
        }
        return this.simpleImage(image);
    }
}
export default Image;