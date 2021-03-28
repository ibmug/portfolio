import React, { useState } from "react";
import API from "../../utils/API";
import { useUserStoreContext } from "../../utils/GlobalUserState";
function SignForm(props) {
	const [user, setUser] = useState("");
	const [password, setPass] = useState("");
	const { login } = useUserStoreContext();

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
		console.log(response.data.username);
		if (response.data.username) {
			login(response.data._id);
		} else {
			alert("Login Failed" + response.statusText);
		}
	};

	function handleFormSubmit(event) {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		validateLogin(user, password);
		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		//alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
		console.log("Clicking Submit");
	}

	return (
		<div className="form-group">
			<form>
				<input
					name="email"
					className="form-control"
					onChange={handleUser}
					type="email"
					placeholder="email@mail.com"
				/>
				<br></br>
				<input
					className="form-control"
					name="password"
					onChange={handlePass}
					type="password"
					placeholder="password"
				/>
				<br></br>
				<button className="btn btn-primary" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignForm;
