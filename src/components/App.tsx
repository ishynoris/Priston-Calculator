import * as React from 'react';

import IChar from '../interfaces/IChar';
import CharDetail from './CharDetail';
import Footer from './Footer';
import SelectTitle from './SelectTitle';

import '../assets/css/App.css';

class App extends React.Component {
	public render() {
		
		const langs: Array<{ option: string, value: string }> = [
			{ option: "English", value: "en" },
			{ option: "Português", value: "pt-br" }
		]

		return <div>
			<div className="row">
				<SelectTitle 
					title="Multi-language"
					name="mult-language"
					values={langs}
					/>
			</div>
			<CharDetail onCharChanged={this.charChanged}/>
			<Footer />
		</div>
	}

	public componentDidMount () {
		this.charChanged(undefined);
	}

	private charChanged = (char: IChar | undefined) => {
		const charName = char === undefined ? "" : char.name + " | ";
		document.title = charName + "Priston Calculator";
	}
}

export default App;