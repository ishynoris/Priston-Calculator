import * as React from 'react';

import IQuest from '../interfaces/IQuest';
import SelectTitle from './SelectTitle';
import Title from './Title';

interface IQuestList {
    title: string,
    lastQuest: string, 
    quests: IQuest[],
    onQuestsChanged?: (name: string, index: number, value: string) => boolean 
}

class Quests extends React.Component<IQuestList>{

    private selectQuest: SelectTitle | null;

    public constructor (props: IQuestList){
        super(props);
        this.selectQuest = null;
    }

    public render() {
        if (this.props.quests.length === 0) {
            return null;
        }

        const options = ((): Array<{ value: string, option: string }> => {
            return this.props.quests.map(q => {
                return { value: JSON.stringify(q.bonus), option: q.title }
            });
        })();
        return <div>
            <Title title={this.props.title} />
            <SelectTitle 
                ref={ref => this.selectQuest = ref}
                title={this.props.lastQuest + ":"} 
                name="Quests" values={options} 
                onSelectedCallback={this.props.onQuestsChanged} />
        </div>
    }
}

export default Quests;