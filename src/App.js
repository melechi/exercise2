import React, { Component } from 'react';
import
{
	Route,
	Switch,
	Router
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';

const _HISTORY_=createHistory();

class App extends Component
{
	render() {
		return (
			<Router history={_HISTORY_}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/articles" component={ArticlesPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
