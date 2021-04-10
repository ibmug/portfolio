import React, { useState } from "react";
import Row from "./../Row";
import Col from "./../Col";
import API from "./../../utils/API";

import { store } from "react-notifications-component";
import { useHistory } from "react-router-dom";

const SignupForm = (props) => {
	const [user, setUser] = useState("");
	const [password, setPass] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();

	const handleFormSubmit = async (event) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		//validateLogin(user, password);
		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		//alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

		const response = await API.createUser(user, password, email);

		store.addNotification({
			title: "Wonderful!",
			message: response.data.message,
			type: "success",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: false,
			},
		});
		history.push("/");
	};

	function handleEmail(event) {
		const email = event.target.value;
		setEmail(email);
	}

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

	return (
		<>
			<form>
				<Row>
					<Col size="4">Username:</Col>
					<Col size="6">
						<input
							name="username"
							className="form-control"
							onChange={handleUser}
							type="text"
							placeholder="theDude"
						/>
					</Col>
				</Row>
				<Row>
					<Col size="4">Email:</Col>
					<Col className="form-control" size="6">
						<input
							name="email"
							className="form-control"
							onChange={handleEmail}
							type="email"
							placeholder="email@mail.com"
						/>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col size="4">Password:</Col>
					<Col className="form-control" size="6">
						<input
							className="form-control"
							name="password"
							onChange={handlePass}
							type="password"
							placeholder="password"
						/>
					</Col>
				</Row>
				<br></br>
				<button className="btn btn-danger" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

export default SignupForm;
