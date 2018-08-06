import * as React from 'react';
import { Link } from 'react-router-dom'

import Script from '../assets/js/Script';
import IVersion from '../interfaces/IVersion';
import Button from './Button';
import Title from './Title';
import TitleSmall from './TitleSmall';

const ReleaseNotes = () => {

    const releases: IVersion[] = Script.getVersions();
    const releaseStyle: React.CSSProperties = { color: "white", padding: 30, }
    const ulStyle: React.CSSProperties = { paddingTop: 30 }
    const liStyle: React.CSSProperties = { paddingBottom: 10 }

    const renderDescription = (i: number, text: string) => <TitleSmall key={i} title={"- " + text} />

    const renderVersions = (i: number, version: IVersion) => {
        return <li key={i} style={liStyle}>
            <Title title={ "v" + version.v + " - " + version.tag } />
            { version.descriptions.map((d, j) => renderDescription(j, d) )}
        </li>
    }
    return <div style={releaseStyle}>
        <div className="row">
            <div className="col-md-12">
                <Link to="/"><Button text="Calculadora" /></Link>
            </div>
        </div>
        <ul style={ulStyle}>{ releases.map((v, i) => renderVersions(i, v) ) }</ul>
    </div>
}

export default ReleaseNotes;