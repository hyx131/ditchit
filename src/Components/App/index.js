import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from '../Home'
import SurveyPage from '../Survey'
import ResultPage from '../Result'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/learn" />
          <Route exact path='/survey' component={SurveyPage} />
          <Route exact path='/result' component={ResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
