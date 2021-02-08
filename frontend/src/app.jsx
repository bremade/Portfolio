import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/homepage.jsx';
import Imprint from './components/pages/imprint.jsx';
import NoMatch from './components/pages/notFound.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/imprint' component={Imprint} />
        {/* <Route path='/brettspiel' component={Brettspiel} /> */}
        {/* <Route path='/login' component={Login} />*/}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
