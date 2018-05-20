import * as React from 'react';

import IChar from '../interfaces/IChar';
import IQuest from '../interfaces/IQuest';
import IStatus from '../interfaces/IStatus';
import IStatusInput from '../interfaces/IStatusInput';
import Quests from './Quests';
import Skills from './Skills';
import Status from './Status';

interface ICharDetail {
    quests: IQuest[],
    onCharUpdated?: (char: string, inputs: IStatusInput[]) => void,
    onStatusChanged?: (title: string, value: number, inputs: IStatus[]) => void,
    onQuestChange?: (index: number, value: string) => void,
};

class CharDetail extends React.Component<ICharDetail>{

    public state: { char: IChar | undefined }
    private status: Status | null;
    private skills: Skills | null;
    private quests: Quests | null;

    constructor(props: { quests: IQuest[] }) {
        super(props);
        this.state = { char: undefined };
    }

    public setChar(newChar: IChar | undefined) {
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
                    onInputsChanged={this.onInputsChanged}
                    onStatusChanged={this.props.onStatusChanged} />
                <Skills ref={ref => this.skills = ref} />
                <Quests
                    ref={ref => this.quests = ref}
                    quests={this.props.quests}
                    onQuestsChanged={this.props.onQuestChange} />
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
                const status = char.asSkills(char.defaultStats);
                this.status.setStatus(status);
            }

            if (this.skills !== null) {
                this.skills.setSkills(char.skills);
            }
        }

    }

    private onInputsChanged = (inputs: IStatusInput[]) => {
        if (this.props.onCharUpdated !== undefined && this.state.char !== undefined) {
            this.props.onCharUpdated(this.state.char.name, inputs);
        }
    }
}

export default CharDetail;