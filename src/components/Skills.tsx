import * as React from 'react';

// import ISkillList from '../interfaces/ISkillList';
import ISkills from '../interfaces/ISkills';
import Select from './Select';
import Title from './Title';
import TitleSmall  from "./TitleSmall";

import '../assets/css/Skills.css';

class SkillList extends React.Component<{}>{

    public state: {skills: ISkills[]}

    constructor(props: ISkills[]){
        super(props);
        this.state = {skills: []};
    }

    public setSkills(newSkills: ISkills[]){
        this.setState({skills: newSkills});
    }

    public render() {

        const skills = this.state.skills;
        if (skills.length === 0) {
            return null;
        }
        let key = 0;
        return (
            <div>
                <Title title="Habilidades" />
                <div className="item-size outter-border background padding">
                {
                    skills.map(s => {
                        return this.renderSkills(key++, s);
                    })
                }
                </div>
            </div>
            
        );
    }

    private renderSkills = (key: number, skill: ISkills) => {

        const values = this.getSkillValues(skill);
        return (
            <div key={key} className="row">
                <div className="col-sm-7">
                    <TitleSmall title={skill.name} />
                </div>
                <div className="col-sm-5 skl-size">
                    <Select name={skill.name} values={values} />
                </div>
            </div>
        )
    }

    private getSkillValues = (skill: ISkills) => {
        const values: Array<{ value: string, option: string }> = [];
        skill.values.forEach((v, k) => {
            values.push({ value: v + "", option: k + "" })
        });
        return values;
    }
}
export default SkillList;