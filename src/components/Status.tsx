import * as React from 'react';

import ICharacterStatus from '../interfaces/ICharacterStatus';
import ILanguage from '../interfaces/ILanguage';
import InputText from './InputText';
import Title from './Title';

interface IStatusComp {
    stats: string[]
    language: ILanguage
    onStatusChanged?: (stats: ICharacterStatus) => void
}

class Status extends React.Component<IStatusComp>{

    public state: { hasCharStats: boolean };
    private bonus: { quest: number };
    private stats: { char: ICharacterStatus | undefined, base: ICharacterStatus, total: InputText | null }

    constructor(props: IStatusComp) {
        super(props);
        this.state = { hasCharStats: false };
        this.bonus = { quest: 0 };
        this.stats = { char: undefined, base: { lvl: 0, for: 0, int: 0, tal: 0, agi: 0, vit: 0 }, total: null };
    }

    public setStatus(newCharStats: ICharacterStatus | undefined) {
        this.stats.char = newCharStats;
        this.stats.base = Object.assign(this.stats.base, newCharStats);
        this.setState({ hasCharStats: this.stats.char !== undefined });
    }

    public setQuestBonus(bonus: number){
        this.bonus.quest = bonus;
        if(this.stats.char !== undefined){
            this.calcTotalStats();
        }
    }

    public render() {
        if (!this.state.hasCharStats) {
            return null;
        }
        
        const stats = this.props.language.translations.stats;
        const minValue = (stat: string): number => {
            if(this.stats.base === undefined){
                return 0
            }
            return stat === stats.Level ? this.stats.base.lvl 
                : stat === stats.Strength ? this.stats.base.for 
                : stat === stats.Spirit ? this.stats.base.int 
                : stat === stats.Talent ? this.stats.base.tal 
                : stat === stats.Agility ? this.stats.base.agi 
                : stat === stats.Health ? this.stats.base.vit
                : 0;
        } 
        const  getTotalStat = (text: string, item: InputText | null) => {
            if (text === stats.Stats) {
                this.stats.total = item;
            }
        }
        return <div>
            <Title title="Status" />
            <div className="item-size outter-border background padding">
            { this.props.stats.map((s, i) => {
                return <InputText
                    ref={ref => getTotalStat(s, ref)}
                    key={i}
                    title={s + ":"}
                    minValue={minValue(s)}
                    disable={s === stats.Stats}
                    onChangeValue={this.onStatusChanged} />
            })}
            </div>
        </div>
    }
    
    private calcTotalStats = () => {
        if (this.stats.total === null || this.stats.char === undefined ) {
			return;
        }
        const sumStats = (cStats?: ICharacterStatus) => {
            if (cStats === undefined) {
                return 0;
            }
            return cStats.for + cStats.int + cStats.tal + cStats.agi + cStats.vit;
        }
        const addStats = ((this.stats.char.lvl - 1) * 5) + sumStats(this.stats.base);
        const value = addStats - sumStats(this.stats.char) + this.bonus.quest;
		this.stats.total.setValue(value.toString());
    }

    private onStatusChanged = (title: string, value: number, oldValue: number) => {
        title = title.replace(":", "");

        const stats = this.props.language.translations.stats;
        if (this.stats.char !== undefined){
            switch (title) {
                case stats.Level: this.stats.char.lvl = value; break;
                case stats.Strength: this.stats.char.for = value; break;
                case stats.Agility: this.stats.char.agi = value; break;
                case stats.Talent: this.stats.char.tal = value; break;
                case stats.Spirit: this.stats.char.int = value; break;
                case stats.Health: this.stats.char.vit = value; break;
            }

            this.calcTotalStats();
            if (this.props.onStatusChanged !== undefined) {
                this.props.onStatusChanged(this.stats.char);
            }
        }
    }
}

export default Status;