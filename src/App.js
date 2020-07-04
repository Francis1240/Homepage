import React from 'react';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import PhotographerPage from './pages/photographerPage';
import './css/App.css';
import ProgrammerPage from './pages/ProgrammerPage';
import NotFoundPage from './pages/NotFoundPage';
import Mobile from './pages/mobile';



const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/photographer" component={PhotographerPage} />
          <Route exact path='/programmer' component={ProgrammerPage} />
          <Route exact path="/mobile" component={Mobile}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
