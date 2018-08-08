import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import ILanguage from '../interfaces/ILanguage';
import CharDetail from './CharDetail';
import Footer from './Footer';
import Header from './Header';

import '../assets/css/App.css';

class App extends React.Component {

	public state: { index: number, language: ILanguage | undefined };
	private charDetail: CharDetail | null;

	constructor (props: {}) {
		super(props);
		const lang = Script.defaultLanguage();
		this.state = lang === undefined ? { index: -1, language: undefined }
			: { index: lang.index, language: lang.language }
	}

	public render() {
		if (this.state.language === undefined) {
			alert("It's was not possible load language.");
			return null;
		}
		const lang = this.state.language;
		const switchLang = {
			default: this.state.index, 
			itens: Script.langsDesc(),
			onSelected: this.languageChanged,
			text: lang.translations.titles.SelectLang + " [" + lang.value + "]",
		}
		return <div>
			<Header 
				release={{ text: lang.translations.titles.ReleasesBtn }} 
				switchLang={switchLang} />
			<CharDetail
				ref={ref => this.charDetail = ref}
				language={this.state.language}
				onCharChanged={this.charChanged} />
			<Footer />
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