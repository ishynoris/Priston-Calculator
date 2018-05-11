import * as React from 'react';

import IChar from '../interfaces/IChar';
import Skills from './Skills';
import Status from './Status';

class CharDetail extends React.Component{

    public state: { char: IChar | undefined }
    private status: Status | null;

    constructor(props: {}){
        super(props);
        this.state = { char: undefined };
    }

    public setChar = (newChar: IChar) => {
        if(this.status !== null && this.status !== undefined){
            const status = newChar.asSkills(newChar.defaultStats);
            this.status.setDefaultStatus(status);
        }
        this.setState({ char: newChar });
    }

    public clearDetails = () => {
        this.setState({char: undefined});
    }

    public render(){

        const char = this.state.char;
        if(char === undefined){ 
            return null;
        }
        return (
            <div>
				<Status ref={ref => this.status = ref } />
				<Skills skills={char.skills} />
			</div>
        );
    }

    public componentDidMount(){
        this.updateStatus();
    }

    public componentDidUpdate(){
        this.updateStatus();
    }
     
    private updateStatus = () => {
        
        const char = this.state.char;
        if(this.status !== null && char !== undefined){
            const status = char.asSkills(char.defaultStats);
            this.status.setDefaultStatus(status);
        }
    }
}

export default CharDetail;