import React from "react";
import Col from "./../components/Col";
import Container from "./../components/Container";
import Row from "./../components/Row";
import SignupForm from "./../components/SignupForm";

const Signup = (props) => {
	return (
		<>
			<Container>
				<Row>
					<div className="d-flex justify-content-center">
						<div className="p-2 bd-highlight">
							I'm so glad you want to create an account.
						</div>
					</div>
				</Row>
				<br></br>
				<Row>Please complete the following form:</Row>
				<br></br>
				<Row>
					<SignupForm />
				</Row>
			</Container>
		</>
	);
};

export default Signup;
