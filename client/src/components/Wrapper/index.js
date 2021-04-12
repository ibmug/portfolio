import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Signup from "../../pages/Signup";
import Contact from "../../pages/Contact";
import Media from "../../pages/Media";
import Learn from "../../pages/Learn";

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
						{isLogged ? <Redirect to="/home" /> : main}
					</Route>

					<Route exact path="/home">
						<Home></Home>
					</Route>

					<Route exact path="/about">
						{isLogged ? <About></About> : <Redirect to="/signup" />}
					</Route>
					<Route exact path="/signup">
						<Signup></Signup>
					</Route>
					<Route exact path="/learn">
						{isLogged ? <Learn /> : <Redirect to="/signup" />}
					</Route>
					<Route exact path="/media">
						{isLogged ? <Media /> : <Redirect to="/signup" />}
					</Route>
					<Route exact path="/contact">
						{isLogged ? <Contact /> : <Redirect to="/signup" />}
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default Wrapper;
