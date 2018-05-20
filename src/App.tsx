import * as React from 'react';

import Script from './assets/js/Script'
import CharDetail from './components/CharDetail';
import InputText from './components/InputText';
import Result from './components/Result';
import SelectTitle from './components/SelectTitle';
import SetItem from './components/SetItem';
import ShitftEquip from './components/ShitftEquip';
import Title from './components/Title';
import IItem from './interfaces/IItem';
import IQuest from './interfaces/IQuest';
import IStatusInput from './interfaces/IStatusInput';

import './assets/css/App.css';
// import IStatusInput from './interfaces/IStatusInput';
import IStatus from './interfaces/IStatus';

const radioTitles = ['Arma', 'Escudo', 'Orbital'];
const radios = {
	indexChecked: 0,
	lastIndex: radioTitles.length - 1,
	name: 'Status',
	titles: radioTitles,
}

class App extends React.Component {

	private script: Script;
	private inputs: IStatusInput[];
	private itensPrimario: SetItem | null;
	private itensKit: SetItem | null;
	private itensSet: SetItem | null;
	private charDetail: CharDetail | null;
	private result: Result | null;

	constructor(props: {}) {
		super(props);
		this.script = new Script();
		this.inputs = [];
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
						<CharDetail
							ref={ref => this.charDetail = ref}
							quests={quests}
							onCharUpdated={this.onCharUpdated}
							onStatusChanged={this.onStatusChanged}
							onQuestChange={this.onQuestChanged} />

					</div>
					<div className="block col-sm-5">
						<Title title="Equipamentos" />
						<SetItem ref={ref => this.itensKit = ref} />
						<SetItem ref={ref => this.itensSet = ref} />
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
	}

	private onCharSelect = (index: number, name: string) => {
		if (this.charDetail !== null) {
			const newChar = this.script.getCharDetail(name);
			this.charDetail.setChar(newChar);
		}
	}

	private onSelectEquip = (index: number) => {
		const item: IItem | undefined = this.script.getItem(radios.titles[index]);
		if (item !== undefined && this.itensPrimario !== null) {
			this.itensPrimario.addItem(item, radios.lastIndex);
		}
	}

	private onCharUpdated = (char: string, inputs: IStatusInput[]) => {
		this.inputs = inputs;
		this.calculate(char, inputs);
	}

	private onStatusChanged = (title: string, newValue: number, status: IStatus[]) => {

		if (this.charDetail === null) {
			return;
		}
		title = title.replace(":", "");
		const stsLevel = status.find(s => {
			return s.name === title && title === Script.itens.LVL.title;
		});

		let lvlAsNumber: number = NaN;
		if (stsLevel !== undefined) {
			lvlAsNumber = Number(newValue);
		}

		if (!isNaN(lvlAsNumber)) {
			this.addStats(lvlAsNumber, 0);
		}
	}

	private onQuestChanged = (index: number, value: string) => {
		let newStats = 0;
		const stsLevel = this.getStatus(Script.itens.LVL.title);
		if (stsLevel === null) {
			return;
		}

		const level = stsLevel.asNumber();
		if (isNaN(level)) {
			return;
		}

		const script = new Script;
		const questsDone = script.getQuestsAt(index);
		if (level < questsDone[index].level) {
			alert("Você ainda não possui level suficiente para realizar essa quest.");
			// return old value of select
			return;
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
	}

	private initComponents = () => {
		if (this.result !== null) {
			const results = this.script.getResult().map(r => {
				r.default = "-";
				return r;
			});
			this.result.setStatus(results);
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
			if (item !== undefined) {
				primario.push(item);
			}
			this.itensPrimario.initState(primario);
		}
	}

	private getStatus = (title: string): InputText | null => {

		if (this.charDetail === null) {
			return null;
		}

		const sts = this.inputs.find(input => {
			return input.title === title;
		});
		return sts !== undefined ? sts.element : null;
	}

	private addStats = (level: number, addValue: number) => {

		if (this.charDetail === undefined) {
			return;
		}
		const totalStats = this.getStatus(Script.itens.STS.title);
		if (totalStats === null) {
			return;
		}
		const value = addValue + ((level - 1) * 5);
		totalStats.setValue(value.toString());
	}

	private calculate = (char: string, inputs: IStatusInput[]) => {
		if (this.result !== null) {
			// this.result.setStatus(newStatus);
		}
	}
}

export default App;