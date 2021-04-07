import React from "react";
import SignForm from "../components/SignForm";
import { Col, Row, Container } from "../components";
// import CreateCharacterForm from "../components/CreateCharacterForm";

const Learn = (props) => {
	return (
		<>
			<Container>
				<Row>Cuando se habla de codigo...somos como Jon Snow..</Row>
				<Row>Se requieren dos cosas:</Row>
				<Row>
					<Col>Persistencia</Col>
					<Col>Resolucion</Col>
				</Row>
			</Container>
		</>
	);
};

export default Learn;
