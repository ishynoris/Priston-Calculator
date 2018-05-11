import * as React from 'react';

// import IQuest from '../interfaces/IQuest';
import SelectTitle from './SelectTitle';
import Title from './Title';

import '../assets/css/Quests.css';

interface IQuestList { quests: Array<{ value: string, option: string }> } 

class Quests extends React.Component<IQuestList>{

    public render() {

        const quests = this.props.quests;
        if (quests === undefined || quests.length === 0) {
            return null;
        }

        const options: Array<{ value: string, option: string }> = quests;
        return (
            <div>
                <Title title="Quests" />
                <SelectTitle title={"Ultima quest realizada:"} name="Quests" values={options} />
            </div>
        );
    }
}

export default Quests;