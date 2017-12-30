import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Survey from './components/Survey';
import Pendaftaran from './components/Pendaftaran';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Survey} />
          <Route path="/pendaftaran" component={Pendaftaran} />
          <Route path="/survey" component={Survey} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
