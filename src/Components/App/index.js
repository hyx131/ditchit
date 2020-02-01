import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from '../Home'
import SurveyPage from '../Survey'
import ResultPage from '../Result'

function App() {
  const themeColor = {
    background: "#F5F5F5",
    themeGreen: "#28B351"
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage themeColor={themeColor} />
          </Route>
          <Route exact path="/learn" />
          <Route exact path='/survey'>
            <SurveyPage themeColor={themeColor} />
          </Route>
          <Route exact path='/result'>
            <ResultPage themeColor={themeColor} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
