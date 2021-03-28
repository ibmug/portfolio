import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import {
	Redirect,
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { useUserStoreContext } from "../../utils/GlobalUserState";

function Wrapper(props) {
	const { isLogged } = useUserStoreContext();

	const main = () => <Home userState={props.userState} />;

	console.log(isLogged);

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						{isLogged ? <Redirect to="/index" /> : main}
					</Route>

					<Route exact path="/index">
						{isLogged ? <Home></Home> : <Redirect to="/" />}
					</Route>

					<Route exact path="/about">
						{isLogged ? <About></About> : <Redirect to="/" />}
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default Wrapper;
