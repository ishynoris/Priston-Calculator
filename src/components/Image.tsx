import * as React from 'react';
import Values from '../assets/js/Values';

import '../assets/css/Image.css';

interface IImage { item: string }

class Image extends React.Component<IImage>{

    private static images = {
        amuleto: require("../images/amuleto.png"),
        anel: require("../images/anel.png"),
        arma: require("../images/arma.png"),
        armadura: require("../images/armadura.png"),
        bota: require("../images/bota.png"),
        bracel: require("../images/bracel.png"),
        escudo: require("../images/escudo.png"),
        luva: require("../images/luva.png"),
        orbital: require("../images/orbital.png"),
        shelton: require("../images/shelton.png"),
    }

    public setImage = () => {
        const item = this.props.item;
        return item === Values.itensName.amuleto ? Image.images.amuleto
            : item === Values.itensName.anel ? Image.images.anel
            : item === Values.itensName.arma ? Image.images.arma
            : item === Values.itensName.armadura ? Image.images.armadura
            : item === Values.itensName.bota ? Image.images.bota
            : item === Values.itensName.bracel ? Image.images.bracel
            : item === Values.itensName.escudo ? Image.images.escudo
            : item === Values.itensName.luva ? Image.images.luva
            : item === Values.itensName.orbital ? Image.images.orbital
            : item === Values.itensName.shelton ? Image.images.shelton
            : undefined;
    }

    public simpleImage = (image: string) => { 
        return (
            <div className="center" >
                <img src={image} />
            </div>
        )
    }

    public doubleImage = (image: string) => {
        return (
            <div className="center" >
                <img src={image} className="double" />
                <img src={image} className="double" />
            </div>
        )
    }

    public render() {

        const image = this.setImage();
        if(image === undefined){
            return null;
        }

        if (this.props.item === Values.itensName.anel) {
            return this.doubleImage(image);
        }
        return this.simpleImage(image);
    }
}
export default Image;