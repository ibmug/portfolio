import React, { useEffect, useState } from "react";
import Row from "./../Row";
import Col from "./../Col";
import API from "./../../utils/API";

import { store } from "react-notifications-component";
import { useHistory } from "react-router-dom";

const ContactForm = (props) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [from, setFrom] = useState("");

	const [buttonStyle, setButtonStyle] = useState({ opacity: 0.2 });
	const [submitActive, setSubmitActive] = useState(false);

	const history = useHistory();

	useEffect(() => {
		// do stuff here...
	}, []); // <-- empty dependency array

	const handleFormSubmit = async (event) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		const response = await API.createPost(title, description, from);

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

	function handleDescription(event) {
		const description = event.target.value;
		//console.log(event.target.name);
		//We could do a generic handler to handle each set..
		//still thinking how that would be without using a switch..
		setDescription(description);
		checkFields();
	}

	function handleTitle(event) {
		// Getting the value and name of the input which triggered the change
		const title = event.target.value;

		setTitle(title);
		// Updating the input's state
		// this.setState({
		//   [name]: value
		// });
		checkFields();
	}

	function handleFrom(event) {
		// Getting the value and name of the input which triggered the change
		const from = event.target.value;

		setFrom(from);
		// Updating the input's state
		// this.setState({
		//   [name]: value
		// });
		checkFields();
	}
	// function handlePass(event) {
	// 	// Getting the value and name of the input which triggered the change
	// 	const pass = event.target.value;

	// 	setPass(pass);
	// 	// Updating the input's state
	// 	// this.setState({
	// 	//   [name]: value
	// 	// });
	// }

	function checkFields() {
		console.log("checking fields");
		if (title === "" || description === "" || from === "") {
			setButtonStyle({ opacity: 0.2 });
			setSubmitActive(false);
			// theButton.attr("disabled", "disabled");
		} else {
			setButtonStyle({ opacity: 0.9 });
			setSubmitActive(true);
		}
	}

	return (
		<>
			<form>
				<Row>
					<Col size="4">From:</Col>
					<Col size="6">
						<input
							name="from"
							className="form-control"
							onChange={handleFrom}
							type="text"
							placeholder="email or phone"
						/>
					</Col>
				</Row>
				<Row>
					<Col size="4">Title:</Col>
					<Col className="form-control" size="6">
						<input
							name="description"
							className="form-control"
							onChange={handleTitle}
							type="text"
							placeholder="Urgent! Read ASAP"
						/>
					</Col>
				</Row>
				<Row>
					<Col size="4">Description:</Col>
					<Col className="form-control" size="6">
						<input
							name="description"
							className="form-control"
							onChange={handleDescription}
							type="text"
							placeholder="Message me asap!"
						/>
					</Col>
				</Row>
				<br></br>
				<button
					className="btn btn-danger"
					style={buttonStyle}
					onClick={handleFormSubmit}
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default ContactForm;
