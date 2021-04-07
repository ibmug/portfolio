import React, { useState } from "react";
import { Redirect } from "react-router";
import API from "../../utils/API";
import { useUserStoreContext } from "../../utils/GlobalUserState";
import { ReactComponent as CatSVG } from "./cat_Icon.svg";

function SignForm(props) {
	const [user, setUser] = useState("");
	const [password, setPass] = useState("");
	const { login } = useUserStoreContext();

	const [loggedIn, setLogged] = useState(false);
	function handleUser(event) {
		// Getting the value and name of the input which triggered the change
		const name = event.target.value;

		setUser(name);
		// Updating the input's state
		// this.setState({
		//   [name]: value
		// });
	}
	function handlePass(event) {
		// Getting the value and name of the input which triggered the change
		const pass = event.target.value;

		setPass(pass);
		// Updating the input's state
		// this.setState({
		//   [name]: value
		// });
	}

	const validateLogin = async (us, pass) => {
		const response = await API.login(us, pass);
		//const data = JSON.parse(response.data);
		console.log(response);
		if (response.data.success) {
			login(response.data.success);
			//setLogged(response.data.success);
			console.log(loggedIn);
			console.log("REDIRECTING");
			<Redirect
				to={{
					pathname: "/about",
					//	search: "?utm=your+face",
					//state: { referrer: currentLocation },
				}}
			></Redirect>;
		} else {
			console.log(response.status + "\n" + response.data.message);
		}
	};

	function handleSignup(event) {
		event.preventDefault();
		console.log("redirecting");
		<Redirect
			to={{
				pathname: "/signup",
				//	search: "?utm=your+face",
				//state: { referrer: currentLocation },
			}}
		></Redirect>;
	}

	function handleFormSubmit(event) {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		validateLogin(user, password);
		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		//alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
		console.log("Clicking Submit");
	}

	return (
		<div className="col-6">
			{login ? (
				<span className="thumbnail">
					<CatSVG />
				</span>
			) : (
				<div className="form-group">
					<form className="row">
						<input
							name="email"
							className="form-control col-4"
							onChange={handleUser}
							type="email"
							placeholder="email@mail.com"
						/>
						<br></br>
						<input
							className="form-control col-4"
							name="password"
							onChange={handlePass}
							type="password"
							placeholder="password"
						/>
						<br></br>
						<button className="btn btn-danger" onClick={handleFormSubmit}>
							Submit
						</button>
						<button className="btn btn-warning" onClick={handleSignup}>
							SignUp
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default SignForm;
