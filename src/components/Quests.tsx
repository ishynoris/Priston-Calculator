import * as React from 'react';

import IQuest from '../interfaces/IQuest';
import SelectTitle from './SelectTitle';
import Title from './Title';

import '../assets/css/Quests.css';

interface IQuestList { 
    quests: IQuest[], 
    onQuestsChanged?: (name: string, index: number, value: string) => boolean 
}

class Quests extends React.Component<IQuestList>{

    private selectQuest: SelectTitle | null;

    public setQuest(index: number){
        if(this.selectQuest !== null){
            this.selectQuest.setIndex(index);
        }
    }

    public render() {

        const quests = this.props.quests;
        if (quests === undefined || quests.length === 0) {
            return null;
        }

        const options: Array<{ value: string, option: string }> = this.asValues();
        return (
            <div>
                <Title title="Quests" />
                <SelectTitle 
                    ref={ref => this.selectQuest = ref}
                    title={"Ultima quest realizada:"} 
                    name="Quests" values={options} 
                    onSelectedCallback={this.props.onQuestsChanged} />
            </div>
        );
    }

    private asValues = (): Array<{ value: string, option: string }> => {
        return this.props.quests.map(q => {
            return { value: JSON.stringify(q.bonus), option: q.title }
        });
    }
}

export default Quests;