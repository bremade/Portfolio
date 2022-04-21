import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider, useTheme } from '@mui/material';
import Homepage from './components/pages/homepage.jsx';
import Imprint from './components/pages/imprint.jsx';
import NoMatch from './components/pages/notFound.jsx';

function App() {
  const theme = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/imprint' component={Imprint} />
            {/* <Route path='/brettspiel' component={Brettspiel} /> */}
            {/* <Route path='/login' component={Login} />*/}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
