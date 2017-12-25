import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Survey from './components/Survey';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="" component={Survey} />
      </BrowserRouter>
    );
  }
}

export default App;
