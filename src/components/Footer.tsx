import * as React from 'react';

interface IAnchors { icon: string, link: string, target: string }

const Footer = (props: {}) => {

    const footer: React.CSSProperties = {
        padding: '30px 0 20px 0',
        textAlign: 'center'
    };
    const label: React.CSSProperties = {
        fontFamily: 'Trebuchet Ms',
        fontSize: '8pt',
        fontWeight: 'bold',
    }
    const icons: React.CSSProperties = {
        color: '#7f453c',
        margin: '0 7px 0 7px',
    }

    const anchors = ((ancs: IAnchors[]) => {
        return ancs.map((a, i) => {
            return (
                <a key={i} style={icons} href={a.link} target={a.target}>
                    <i className={a.icon} />
                </a>
            )
        })
    })([
        { icon: 'fab fa-github fa-lg', link: 'https://github.com/ishynoris', target: '__blank' },
        { icon: 'fab fa-facebook-f fa-lg', link: 'https://www.facebook.com/anailson.mota.7', target: '__blank' },
        { icon: 'fas fa-envelope fa-lg', link: 'mailto:mota.a.santos@gmail.com', target: '' },
    ]);

    return (
        <div style={footer}>
            <label style={label}>
                Anailson Santos Mota<i style={icons} className="fas fa-cog fa-spin fa-lg" />(v. alfa)
            </label>
            <div>
                {anchors}
            </div>
        </div>
    )
}

export default Footer;