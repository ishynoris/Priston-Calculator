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
import IQuest from './interfaces/IQuest';

import './assets/css/App.css';

const radioTitles = ['Arma', 'Escudo', 'Orbital'];
const radios = {
	indexChecked: 0,
	lastIndex: radioTitles.length - 1,
	name: 'Status',
	titles: radioTitles,
}

class App extends React.Component {

	private script: Script;
	private itensPrimario: SetItem | null;
	private itensKit: SetItem | null;
	private itensSet: SetItem | null;
	private charDetail: CharDetail | null;
	private result: Result | null;

	constructor(props: {}) {
		super(props);
		this.script = new Script();
	}

	public render() {

		const chars = this.script.getChars();
		const quests: IQuest[] = this.script.getQuests();

		return (
			<div className="">
				<div className="row justify-content-center">
					<div className="block col-sm-2">
						<Title title="Personagens" />
						<SelectTitle
							title={"Selecione um personagem:"}
							name={"Personagens"}
							values={chars}
							onSelectedCallback={this.onCharSelect} />
						<CharDetail ref={ref => this.charDetail = ref} />
						<Quests quests={quests} />
					</div>
					<div className="block col-sm-5">
						<Title title="Equipamentos" />
						<SetItem ref={ref => this.itensKit = ref} />
						<SetItem ref={ref =>  this.itensSet = ref } />
						<ShitftEquip
							name={radios.name}
							titles={radios.titles}
							default={radios.indexChecked}
							onSelectedCallback={this.onSelectEquip} />
						<SetItem ref={ref => this.itensPrimario = ref} />
					</div>
					<div className="block col-sm-2">
						<Title title="Resultados" />
						<Result ref={ref => this.result = ref} />
					</div>
				</div>
			</div>
		)
	}

	public componentDidMount() {
		this.initComponents();
		this.onCharSelect("-");
		this.calculate();
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
		if (item !== undefined && this.itensPrimario !== null) {
			this.itensPrimario.addItem(item, radios.lastIndex);
		}
	}

	private initComponents = () => {
		if (this.result !== null) {
			this.result.setStatus(this.script.getResult());
		}
		if (this.itensKit !== null) {
			this.itensKit.initState(this.script.getSetByName(Script.sets.kit));
		}
		if (this.itensSet !== null) {
			this.itensSet.initState(this.script.getSetByName(Script.sets.set));
		}
		if (this.itensPrimario !== null) {
			const primario = this.script.getSetByName(Script.sets.primario);
			const item: IItem | undefined = this.script.getItem(radios.titles[radios.indexChecked]);
			if(item !== undefined){
				primario.push(item);
			}
			this.itensPrimario.initState(primario);
		}
	}

	private calculate = () => {
		
		if (this.result !== null) {
			// this.result.setStatus(newStatus);
		}
	}
}

export default App;



/*
Brink Festas
22 R$
11 mesas.
Adriano 
*/