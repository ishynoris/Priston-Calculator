import * as React from 'react';
import DropdownList from './DropdownList';

interface ISwitchLanguage { values: Array<{ title: string, value: string }> }

class SwitchLanguage extends React.Component<ISwitchLanguage> {

  public state: { language: string }
  
  public render() {

    return <div className="row">
      <div className="col-md-12">
        <div style={{ float: "right" }}>
          <DropdownList 
            text="Selecione o idioma"
            itens={this.props.values}
            onSelected={this.onSelected} />
        </div>
      </div>
    </div>
  }

  private onSelected = (index: number, value: string) => {
    console.log(index + " " + value);
  }
}

export default SwitchLanguage;