import * as React from 'react';

import Script from '../assets/js/Script';
import IChar from '../interfaces/IChar';
import ILanguage from '../interfaces/ILanguage';
import CharDetail from './CharDetail';
import Footer from './Footer';
import SwitchLanguage from './SwitchLanguage';

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
		return <div>
			<SwitchLanguage 
				default={this.state.index}
				title={this.state.language.translations.select.title}
				values={Script.langsDesc()}
				onLanguageChanged={this.languageChanged} />
			<CharDetail
				language={this.state.language}
				onCharChanged={this.charChanged} />
			<Footer />
		</div>
	}

	public componentDidMount () {
		this.charChanged(undefined);
	}

	private languageChanged = (lang: ILanguage) => {
		// Script.setDefaultLanguage(lang);
		this.setState({ language: lang })
	}

	private charChanged = (char: IChar | undefined) => {
		const charName = char === undefined ? "" : char.name + " | ";
		document.title = charName + "Priston Calculator";
	}
}

export default App;