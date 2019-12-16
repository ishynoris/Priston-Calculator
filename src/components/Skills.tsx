import * as React from 'react';

import { isNullOrUndefined } from 'util';

import IBonus from '../interfaces/IBonus';
import ISkills from '../interfaces/ISkills';
import Select from './Select';
import Title from './Title';
import TitleSmall from "./TitleSmall";

interface ISkillList {
	title: string, 
	onSkillChanged?: (bonus: IBonus[]) => boolean
}

class SkillList extends React.Component<ISkillList>{

    public state: { skills: ISkills[] }

    constructor(props: ISkillList) {
        super(props);
        this.state = { skills: [] };
    }

    public setSkills(newSkills: ISkills[]) {
        this.setState({ skills: newSkills });
    }

    public render() {
        
        const skills = this.state.skills;
        if (skills.length === 0) {
            return null;
        }
        return <div>
            <Title title={this.props.title} />
            <div className="item-size outter-border background padding">
                {skills.map((s, i) => {
                    return this.renderSkills(i, s);
                })}
            </div>
        </div>
    }

    private renderSkills = (key: number, skill: ISkills) => {

        const values = (() => {
			const bonus = new Array<{ value: string, option: string }>();
			skill.adds.forEach((a, i) => {
				a.values.forEach((v, j) => {
					
					if (isNullOrUndefined(bonus[j])) {
						bonus.push({ 
							option: j.toString(),
							value: "[]"
						});
					}
					const value = JSON.parse(bonus[j].value);
					value.push({ 'c': a.cod.toString(), 'v': v });
					bonus[j].value = JSON.stringify(value);
				});
			})
			return bonus;
        })();
        return <div key={key} className="row">
            <div className="col-sm-8">
                <TitleSmall title={skill.name} />
            </div>
            <div className="col-sm-4">
                <Select name={skill.name} values={values} onSelectedCallback={this.onSeleted} />
            </div>
        </div>
    }

	private onSeleted = (name: string, index: number, value: string): boolean => {
		if (this.props.onSkillChanged === undefined) {
			return true;
		}
		const skill = this.state.skills.find(s => {
			return s.name === name;
		});
		if (skill === undefined) {
			return false;
		}
		const bonus: IBonus[] = [];
		skill.adds.forEach(a => { 
			bonus.push({ cod: a.cod, value: a.values[index], percent: a.percent });
		});
		return this.props.onSkillChanged(bonus);
	}
}
export default SkillList;