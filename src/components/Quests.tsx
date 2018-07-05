import * as React from 'react';

import IQuest from '../interfaces/IQuest';
import SelectTitle from './SelectTitle';
import Title from './Title';

import '../assets/css/Quests.css';

interface IQuestList { 
    onQuestsChanged?: (name: string, index: number, value: string) => boolean 
}

class Quests extends React.Component<IQuestList>{

    public state: { hasQuests: boolean };
    private selectQuest: SelectTitle | null;
    private quests: IQuest[];

    public constructor (props: IQuestList){
        super(props);
        this.state = { hasQuests: false };
        this.selectQuest = null;
        this.quests = [];
    }

    public setQuest(quests: IQuest[], index?: number){
        this.quests = quests;
        this.setState({ hasQuests: this.quests.length > 0 });
        if (this.selectQuest !== null) {
            this.selectQuest.setIndex(index !== undefined ? index : 0);
        }
    }

    public render() {
        if (!this.state.hasQuests) {
            return null;
        }

        const options = ((): Array<{ value: string, option: string }> => {
            return this.quests.map(q => {
                return { value: JSON.stringify(q.bonus), option: q.title }
            });
        })();
        return <div>
            <Title title="Quests" />
            <SelectTitle 
                ref={ref => this.selectQuest = ref}
                title={"Ultima quest realizada:"} 
                name="Quests" values={options} 
                onSelectedCallback={this.props.onQuestsChanged} />
        </div>
        
    }
}

export default Quests;