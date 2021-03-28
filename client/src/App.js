//import logo from "./logo.svg";
import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//Import Components...
import Nav from "./components/NavBar";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
	UserStoreProvider,
	useUserStoreContext,
} from "./utils/GlobalUserState";

//import axios from "./axios";

function App() {
	const { isLogged } = useUserStoreContext();

	const main = () => <Home userState={isLogged} />;

	return (
		<div className="flex-col flex-acenter fh">
			<UserStoreProvider>
				<Nav></Nav>
				<Wrapper isLogged={isLogged} />
			</UserStoreProvider>
		</div>
	);
}

// function App() {
//   const [logged, setLogged] = useState(false)
//   const stateChange = e => {
//     e.preventDefault()

//     setLogged(!logged)
//   }

//   const {login, isLogged} = useUserStoreContext();

//   return (
//     <div className="App">
//       <UserStoreProvider>
//      <Nav> </Nav>
//      <Router>
//      <Switch>
//           <Route exact path={["/", "/Home"]}>
//             {
//               logged ?
//               <About /> :
//               <Home fn={stateChange} />
//             }
//             <button onClick={login}>Log in</button>
//           </Route>
//           {/* <Route exact path="/books/:id">
//             <Detail />
//           </Route> */}
//           <Route>
//             {/* <NoMatch /> */}
//           </Route>
//       </Switch>
//           </Router>
//       </UserStoreProvider>
//       O
//     </div>
//   );
// }

export default App;
