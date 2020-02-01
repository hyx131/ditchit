import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from '../Home'
import SurveyPage from '../Survey'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/learn" />
          <Route exact path='/survey' component={SurveyPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
