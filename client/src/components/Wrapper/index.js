import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Signup from "../../pages/Signup";

import {
	Redirect,
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { useUserStoreContext } from "../../utils/GlobalUserState";
import Nav from "../NavBar";

function Wrapper(props) {
	const { isLogged } = useUserStoreContext();

	const main = () => <Home userState={props.userState} />;

	console.log(isLogged);

	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						{isLogged ? <Redirect to="/about" /> : main}
					</Route>

					<Route exact path="/index">
						{isLogged ? <Home></Home> : <Redirect to="/" />}
					</Route>

					<Route exact path="/about">
						{isLogged ? <About></About> : <Redirect to="/" />}
					</Route>
					<Route exact path="/signup">
						<Signup></Signup>
					</Route>
					<Route exact path="/learn">
						{isLogged ? <Redirect to="/learn" /> : <Redirect to="/signup" />}
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default Wrapper;
