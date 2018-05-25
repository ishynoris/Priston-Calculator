import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import IItem from '../interfaces/IItem';
import IQuest from '../interfaces/IQuest';
import IStatusResult from '../interfaces/IStatusResult';
import CharDetail from './CharDetail';
import CharSelect from './CharSelect';
import Result from './Result';
import SetItem from './SetItem';
import ShitftEquip from './ShitftEquip';
import Title from './Title';

import '../assets/css/App.css';

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

		const chars: IChar[] = this.script.getChars();
		const quests: IQuest[] = this.script.getQuests();

		return (
			<div className="">
				<div className="row justify-content-center">
					<div className="block col-md-2">
						<Title title="Personagens" />
						<CharSelect
							title={"Selecione um personagem:"}
							name={"Personagens"}
							chars={chars}
							onCharSelect={this.onCharSelect} />
						<CharDetail
							ref={ref => this.charDetail = ref}
							quests={quests}
							onCalculateResult={this.onCalculate} />
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
					<div className="block col-md-2">
						<Title title="Resultados" />
						<Result ref={ref => this.result = ref} />
					</div>
				</div>
			</div>
		)
	}

	public componentDidMount() {
		this.initComponents();
		this.setTitle();
	}

	private setTitle = (charName?: string) => {
		const title = charName === undefined ? "" : "[" + charName + "]";
		document.title = title + "Priston Calculator";
	}

	private onCharSelect = (index: number, char: IChar | undefined): boolean => {

		const charName = char === undefined ? undefined : char.name;
		this.setTitle(charName);
		// console.log(this.result);
		if (this.charDetail !== null) {

			const newChar = this.script.getCharDetail(charName);
			const results = this.charDetail.setChar(newChar);
			if (results !== undefined && this.result !== null) {
				this.result.setResult(results);
			}
		}
		return true;
	}

	private onCalculate = (results: IStatusResult) => {
		
		if (this.result !== null) {
			this.result.setResult(results);
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
			this.result.setResult(Script.defResult());
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
}

export default App;