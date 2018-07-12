import * as React from 'react';

import IBonus from '../interfaces/IBonus';
import ISkills from '../interfaces/ISkills';
import Select from './Select';
import Title from './Title';
import TitleSmall from "./TitleSmall";

interface ISkillList {
    onSkillChanged?: (bonus: IBonus) => boolean
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
            <Title title="Habilidades" />
            <div className="item-size outter-border background padding">
                {skills.map((s, i) => {
                    return this.renderSkills(i, s);
                })}
            </div>
        </div>
    }

    private renderSkills = (key: number, skill: ISkills) => {

        const values = (() => {
            return skill.values.map((v, k) => {
                return { value: v + "", option: k + "" };
            });
        })();
        return <div key={key} className="row">
            <div className="col-sm-7">
                <TitleSmall title={skill.name} />
            </div>
            <div className="col-sm-5 skl-size">
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
        return this.props.onSkillChanged({ cod: skill.codBonus, value: skill.values[index], percent: skill.percent });
    }
}
export default SkillList;