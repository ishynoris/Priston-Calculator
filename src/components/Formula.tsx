import * as React from 'react';

import Script from '../assets/js/Script';
import IStatFormula from '../interfaces/IFormula'
import ILanguage from '../interfaces/ILanguage';
import Title from "./Title";
import TitleSmall from './TitleSmall';

interface IFormula { language: ILanguage | undefined }

export default class Formula extends React.Component<IFormula> {
    
    public render() {
        const releaseStyle: React.CSSProperties = { color: "white", padding: "20px 20px 30px 20px", }

        if (this.props.language === undefined){
            return <Title title={"Não foi possível carregar o idioma"} />
        }
        const races = (name: string) => {
            return <div style={{ marginLeft: 20 }}>
                <h6>{name}</h6>
            </div>
        }
        const item = (name: string, attr: string, formula: IStatFormula) => {
            return <li>
                <Title title={name} />
                { this.formulas(attr, formula) }
            </li>
        }
        const tempkrons  = Script.tempkrons(this.props.language);
        const morions = Script.morions(this.props.language);
        const title = this.props.language.translations.titles.FormulaBtn;

        return  <div style={releaseStyle}>
            <h4 style={{ marginBottom: 20 }}>{title}</h4>
            <div className="row">
                <div className="col-md-6">
                    { races(tempkrons.name)}
                    { tempkrons.chars.map((c, i) => <ul key={i}> { item(c.name, c.mainAttr, c.formula) }</ul>) }
                </div>
                <div className="col-md-6">
                    { races(morions.name) }
                    { morions.chars.map((c, i) => <ul key={i}> { item(c.name, c.mainAttr, c.formula) }</ul>) }
                </div>
            </div>
        </div>
    }

    private formulas = (main: string, f: IStatFormula) => {

        const min = "MIN";
        const max = "MAX";
        
        const multi = (ap: string) => {
            return "1 / " + f.AP.fFator + " * " + main + " * " + ap
        }
        const attrsShort = (vals: number[]) => {
            let attrs = "";
            vals.map(a => {
                const stat = Script.statByCode(this.props.language, a);
                if (stat !== undefined) {
                    attrs += stat.short + " + ";
                }
            })
            return vals.length === 1 
                ? attrs.substring(0, attrs.length - 3)
                : "(" + attrs.substring(0, attrs.length - 3) + ")";
        }

        const lvlShort = attrsShort([ Script.Codes.LVL ]);
        const apmin = "AP-" + min + " = " + f.AP.min + " + " + min+ " + [" + lvlShort + " / 6]" 
            + " + [" + attrsShort(f.AP.attrDiv) + " / " + f.AP.fDiv + "]" 
            + " + [(" + min + " + " + max + ") / 16]" 
            + " + [" + multi(min) + "]"
        const apmax = "AP-" + max + " = " + f.AP.max + " + " + max + " + [" + lvlShort + " / 6]"
            + " + [" + attrsShort(f.AP.attrDiv) + " / " + f.AP.fDiv + "]" 
            + " + [" + lvlShort + " / " + max + "-add]"
            + " + [" + multi(max) + "]";
        const hp = "HP = " + "(lvl * " + f.HP.fLvl + ")" 
            + this.hpval(f.HP.fFor, f.HP.fInt, f.HP.fAgi)
            + " + (vit * " + f.HP.fVit + ")"
            + " " + f.HP.add;
        const mp = "MP = " + "(lvl * " + f.MP.fLvl + ")"
            + " + " + "(int * " + f.MP.fInt + ")";
        
        return <div style={{ paddingBottom: 7 }}>
            <TitleSmall title={this.item(apmin)}/>
            <TitleSmall title={this.item(apmax)}/>
            <TitleSmall title={this.item(hp)}/>
            <TitleSmall title={this.item(mp)}/>
        </div>
    }
    
    private hpval = (f: number | undefined, i: number | undefined, a: number | undefined) => {
        return f !== undefined ? " + (for * " + f + ")" 
            : i !== undefined ? " + (int * " + i + ")" 
            : a !== undefined ? " + (agi * " + a + ")" 
            : "";
    }
    private item = (title: string) => {
        return " - " + title;
    }
}