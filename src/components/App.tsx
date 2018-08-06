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
			text: lang.translations.select.title + " [" + lang.value + "]",
		}
		return <div>
			<Header 
				release={{ text: "Release Notes", onClicked: this.onReleaseClicked }} 
				switchLang={switchLang} />
			<CharDetail
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
	}

	private charChanged = (char: IChar | undefined) => {
		const charName = char === undefined ? "" : char.name + " | ";
		document.title = charName + "Priston Calculator";
	}

	private onReleaseClicked = () => {
		alert("clicked");
	}
}

export default App;