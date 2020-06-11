import React from 'react';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhotographerPage from './pages/photographerPage';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photographer" component={PhotographerPage} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
