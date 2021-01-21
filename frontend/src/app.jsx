import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/homepage';
import Imprint from './components/pages/imprint';
import NoMatch from './components/pages/notFound';
import Login from './components/pages/login';
import Recipes from './components/pages/recipes';
import Brettspiel from './components/pages/brettspiel';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/imprint' component={Imprint} />
					<Route path='/recipes' component={Recipes} />
					<Route path='/brettspiel' component={Brettspiel} />
					<Route path='/login' component={Login} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		)
	};
};
