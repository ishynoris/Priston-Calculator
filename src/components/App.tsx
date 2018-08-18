import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import ILanguage from '../interfaces/ILanguage';
import CharDetail from './CharDetail';
import Footer from './Footer';
import Header from './Header';

import '../assets/css/App.css';

interface IApp { index: number, language: ILanguage | undefined };

class App extends React.Component <IApp>{

	public state: { index: number, language: ILanguage | undefined };
	private charDetail: CharDetail | null;

	constructor (props: IApp) {
		super(props);
		this.state = { index: props.index, language: props.language }
	}

	public render() {
		if (this.state.language === undefined) {
			alert("It's was not possible load language.");
			return null;
		}
		const lang = this.state.language.value;
		const langTitles = this.state.language.translations.titles;

		return <div>
			<Header 
				lang={this.state.language.value}
				release={{ text: langTitles.ReleasesBtn }} 
				formula={{ text: langTitles.FormulaBtn }}
				switchLang={{
					default: this.state.index, 
					itens: Script.langsDesc(),
					onSelected: this.languageChanged,
					text: langTitles.SelectLang + " [" + lang + "]" }} />
			<CharDetail
				ref={ref => this.charDetail = ref}
				language={this.state.language}
				onCharChanged={this.charChanged} />
			<Footer language={this.state.language} />
		</div>
	}

	public componentDidMount () {
		this.charChanged(undefined);
	}

	private languageChanged = (index: number, value: string) => {
		const language = Script.language(value);
		this.setState({ "index": index, "language": language });
		if (this.charDetail !== null && language !== undefined){
			this.charDetail.changeLanguage(language);
		}
	}

	private charChanged = (char: IChar | undefined) => {
		const charName = char === undefined ? "" : char.name + " | ";
		document.title = charName + "Priston Calculator";
	}
}

export default App;