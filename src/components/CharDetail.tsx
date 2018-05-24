import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import IQuest from '../interfaces/IQuest';
import IStatusInput from '../interfaces/IStatusInput';
import InputText from './InputText';
import Quests from './Quests';
import Skills from './Skills';
import Status from './Status';

interface ICharDetail {
    quests: IQuest[],
};

class CharDetail extends React.Component<ICharDetail>{

    public state: { char?: IChar }
    
	private inputs: IStatusInput[];
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: { quests: IQuest[] }) {
        super(props);
        this.inputs = [];
        this.state = { char: undefined };
    }

    public setChar(newChar?: IChar) {
        // const newChar = char === undefined ? undefined : char;
        this.setState({ char: newChar });
    }

    public render() {

        const char = this.state.char;
        if (char === undefined) {
            return null;
        }
        return (
            <div>
                <Status
                    ref={ref => this.status = ref}
                    onStatusUpdated={this.onStatusUpdated}
                    onStatusChanged={this.onStatusChanged} />
                <Skills ref={ref => this.skills = ref} />
                <Quests
                    ref={ref => this.quests = ref}
                    quests={this.props.quests}
                    onQuestsChanged={this.onQuestChanged} />
            </div>
        );
    }

    public componentDidMount() {
        this.updateChar();
    }

    public componentDidUpdate() {
        this.updateChar();
    }

    private updateChar() {

        const char = this.state.char;
        if (char !== undefined) {

            if (this.status !== null) {
                const status = char.asSkills(char.stats);
                this.status.setStatus(status);
            }

            if (this.skills !== null) {
                this.skills.setSkills(char.skills);
            }
        }
    }

    private onStatusUpdated = (inputs: IStatusInput[]) => {
        this.inputs = inputs;
        if(this.state.char !== undefined){
            this.addStats(this.state.char.stats.lvl);
        }
    }

    private onStatusChanged = (title: string, oldValue: number, newValue: number) => {
        if(title === Script.itens.LVL.title){
            this.addStats(newValue);
        }
    }
    
    private onQuestChanged = (index: number, value: string): boolean => {
		let newStats = 0;
        const stsLevel = this.findStatus(Script.itens.LVL.title);
        
		if (stsLevel === null) {
			return false;
        }

        const level = stsLevel.asNumber();
		if (isNaN(level)) {
			return false;
        }

		const script = new Script;
		const questsDone = script.getQuestsAt(index);
		if (level < questsDone[index].level) {
			alert("Você ainda não possui level suficiente para realizar essa quest.");
			return false;
		}

		questsDone.forEach(q => {
			q.bonus.forEach(b => {
				if (b.cod === Script.codes.STS) {
					newStats += b.value;
				}
				if (b.cod === Script.codes.STSp) {
					const dif = level - q.level;
					newStats += dif * b.value + b.value;
				}
			})
		})
        this.addStats(level, newStats);
        return true;
	}   
    
	private addStats = (level: number, addValue?: number) => {
        
        const totalStats = this.findStatus(Script.itens.STS.title);
        if (totalStats === null) {
			return;
        }
        
        let value = (level - 1) * 5;
        if(addValue !== undefined){
            value += addValue;
        }
		totalStats.setValue(value.toString());
    } 

	private findStatus = (title: string): InputText | null => {
		const sts = this.inputs.find(input => {
			return input.title === title;
		});
		return sts !== undefined ? sts.element : null;
    }
}

export default CharDetail;