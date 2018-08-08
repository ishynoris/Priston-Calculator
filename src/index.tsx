import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

import App from './components/App';
import ReleaseNotes from './components/ReleaseNotes';

import registerServiceWorker from './registerServiceWorker';

const Routes = () => ( 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact={true} path={'/'} component={App} />
      <Route path={"/releases"} component={ReleaseNotes} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Routes />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
