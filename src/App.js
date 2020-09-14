import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, ErrorPage, Login } from './pages';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact={true} path="/">
						<Dashboard />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
