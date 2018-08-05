import * as React from 'react';

import Script from '../assets/js/Script';
import IKeyValue from '../interfaces/IKeyValue';
import ILanguage from '../interfaces/ILanguage';
import DropdownList from './DropdownList';

interface ISwitchLanguage { 
  default: number, 
  title: string,
  values: IKeyValue[]
  onLanguageChanged?: (index: number, language: ILanguage) => void
}

class SwitchLanguage extends React.Component<ISwitchLanguage> {

  public state: { language: string }
  
  public render() {

    return <div className="row">
      <div className="col-md-12">
        <div style={{ float: "right" }}>
          <DropdownList 
            default={this.props.default}
            text={this.props.title}
            itens={this.props.values}
            onSelected={this.onLanguageSelected} />
        </div>
      </div>
    </div>
  }

  private onLanguageSelected = (index: number, value: string) => {
    if (this.props.onLanguageChanged !== undefined) {
      const language = Script.language(value);
      if (language !== undefined) {
        this.props.onLanguageChanged(index, language);
      }
    }
  }
}

export default SwitchLanguage;