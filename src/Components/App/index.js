import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

import HomePage from '../Home'
import SurveyPage from '../Survey'
import ResultPage from '../Result'

function App() {
  const themeColor = {
    background: "#F5F5F5",
    themeGreen: "#28B351"
  }

  const [apiResults, setApiResults] = useState(null)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage themeColor={themeColor} />
          </Route>
          <Route exact path="/learn" />
          <Route exact path='/survey'>
            <SurveyPage apiResults={apiResults} setApiResults={setApiResults} themeColor={themeColor} />
          </Route>
          <Route exact path='/result'>
            {apiResults ? <ResultPage apiResults={apiResults} themeColor={themeColor} /> : <div style={{ margin: '300px 300px 300px 700px' }}><CircularProgress style={{ margin: '5px' }} />Loading...</div>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
