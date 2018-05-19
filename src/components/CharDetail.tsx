import * as React from 'react';

import IChar from '../interfaces/IChar';
import IQuest from '../interfaces/IQuest';
import Quests from './Quests';
import Skills from './Skills';
import Status from './Status';

class CharDetail extends React.Component<{quests: IQuest[]}>{

    public state: { char: IChar | undefined }
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: {quests: IQuest[]}){
        super(props);
        this.state = { char: undefined };
    }

    public setChar (newChar: IChar | undefined) {
        this.setState({ char: newChar });
        this.updateChar();
    }

    public render(){

        const char = this.state.char;
        if(char === undefined){ 
            return null;
        }
        return (
            <div>
				<Status ref={ref => this.status = ref } />
				<Skills ref={ref => this.skills = ref} />
                <Quests ref={ref => this.quests = ref} quests={this.props.quests} onQuestsChanged={this.onQuestChange}/>
			</div>
        );
    }

    public componentDidMount(){
        this.updateChar();
    }

    public componentDidUpdate(){
        this.updateChar();
    }
     
    private updateChar() {
        
        const char = this.state.char;
        if(char !== undefined){

            if(this.status !== null){
                const status = char.asSkills(char.defaultStats);
                this.status.setStatus(status);
            }

            if(this.skills !== null){
                this.skills.setSkills(char.skills);
            }
        }
    }

    private onQuestChange = (index: number, value: string) => {
        if(this.status !== null){
            this.status.setQuest(index);
        }
    }
}

export default CharDetail;