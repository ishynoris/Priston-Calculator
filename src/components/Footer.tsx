import * as React from 'react';

interface IAnchors { icon: string, link: string, target: string }

const Footer = (props: {}) => {
    const defaultColor = '#e7e7e7';
    const footer: React.CSSProperties = {
        padding: '20px 0 20px 0',
        textAlign: 'center'
    };
    const label: React.CSSProperties = {
        color: defaultColor,
        fontFamily: 'Trebuchet Ms',
        fontSize: '9pt',
    }
    const icons: React.CSSProperties = {
        color: defaultColor,
        margin: '0 7px 0 7px',
    }
    const anchors = ((ancs: IAnchors[]) => {
        return ancs.map((a, i) => {
            return <a key={i} style={icons} href={a.link} target={a.target}>
                <i className={a.icon} />
            </a>
        })
    })([
        { icon: 'fab fa-github fa-lg', link: 'https://github.com/ishynoris/Priston-Calculator', target: '__blank' },
        { icon: 'fab fa-facebook-f fa-lg', link: 'https://www.facebook.com/anailson.mota.7', target: '__blank' },
        { icon: 'fas fa-envelope fa-lg', link: 'mailto:mota.a.santos@gmail.com?subject=Priston Calculator', target: '' },
    ]);

    return (
        <div style={footer}>
            <label style={label}>
                Encontrou algum erro? Quer sugerir alguma alteração? Entre em contato. <a style={icons}><i className={"fas fa-heart"} /></a>
            </label>
            <div>
                {anchors}
            </div>
            <label style={label}>
                Anailson Santos Mota<i style={icons} className="fas fa-cog fa-spin fa-lg" />(v. alfa)
            </label>
        </div>
    )
}

export default Footer;