import React from 'react';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import PhotographerPage from './pages/photographerPage';
import './css/App.css';
import ProgrammerPage from './pages/ProgrammerPage';
import NotFoundPage from './pages/NotFoundPage';



const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photographer" component={PhotographerPage} />
          <Route path='/programmer' component={ProgrammerPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
