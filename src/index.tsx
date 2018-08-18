import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

import Script from './assets/js/Script';
import App from './components/App';
import Formula from './components/Formula';
import ReleaseNotes from './components/ReleaseNotes';

import registerServiceWorker from './registerServiceWorker';

const lang = Script.defaultLanguage();

const app = () => {
  const values = lang === undefined ? { index: -1, language: undefined } 
    : { index: lang.index, language: lang.language }
  return <App  index={values.index} language={values.language}/>
}
const formula = () => {

  if (lang === undefined) {
    return <Formula language={undefined} />
  }
  return <Formula language={lang.language} />
}

const Routes = () => ( 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact={true} path={'/'} render={app}/>
      <Route path={"/releases"} component={ReleaseNotes} />
      <Route path={"/formulas"} render={formula}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Routes />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
