import * as React from 'react';

import Script from './assets/js/Script'
import CharDetail from './components/CharDetail';
import Quests from './components/Quests';
import Result from './components/Result';
import SelectTitle from './components/SelectTitle';
import SetItem from './components/SetItem';
import ShitftEquip from './components/ShitftEquip';
import Title from './components/Title';
import IItem from './interfaces/IItem';

import './assets/css/App.css';

const radios = {
	indexChecked: 0,
	name: 'Status',
	titles: ['Arma', 'Escudo', 'Orbital']
}

class App extends React.Component {

	private script: Script;
	private primario: SetItem | null;
	private charDetail: CharDetail | null;
	private result: Result | null;

	constructor(props: {}) {
		super(props);
		this.script = new Script();
	}

	public render() {

		const kit: IItem[] = this.script.getSetByName(Script.sets.kit);
		const set: IItem[] = this.script.getSetByName(Script.sets.set);
		const primario: IItem[] = this.script.getSetByName(Script.sets.primario);
		const chars = this.script.getChars();
		const quests = this.script.getQuests();

		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-2">
						<Title title="Personagens" />
						<SelectTitle
							title={"Selecione um personagem:"}
							name={"Personagens"}
							values={chars}
							onSelectedCallback={this.onCharSelect} />
						<CharDetail ref={ref => this.charDetail = ref} />
						<Quests quests={quests} />
					</div>
					<div className="col-sm-6">
						<Title title="Equipamentos" />
						<SetItem itens={kit} />
						<SetItem itens={set} />
						<ShitftEquip
							name={radios.name}
							titles={radios.titles}
							default={radios.indexChecked}
							onSelectedCallback={this.onSelectEquip} />
						<SetItem ref={(el) => this.primario = el} itens={primario} />
					</div>
					<div className="col-sm-2">
						<Title title="Resultados" />
						<Result ref={ref => this.result = ref} />
					</div>
				</div>
			</div>
		)
	}

	public componentDidMount() {
		this.onSelectEquip(radios.indexChecked);
		this.onCharSelect("-");
		this.initResult();
	}

	private onCharSelect = (name: string) => {
		const newChar = this.script.getCharDetail(name);
		if (this.charDetail !== null) {
			if (newChar !== undefined) {
				this.charDetail.setChar(newChar);
			} else {
				this.charDetail.clearDetails();
			}
		}
	}

	private onSelectEquip = (index: number) => {
		const item: IItem | undefined = this.script.getItem(radios.titles[index]);
		if (item !== undefined && this.primario !== null) {
			this.primario.setItem(item, 2);
		}
	}

	private initResult = () => {
		if (this.result !== null) {
			this.result.setValues(this.script.getResult());
		}
	}
}

export default App;