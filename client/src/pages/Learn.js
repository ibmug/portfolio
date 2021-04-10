import React from "react";
import SignForm from "../components/SignForm";
//import { Col, Row, Container } from "../components";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

// import CreateCharacterForm from "../components/CreateCharacterForm";

const Learn = (props) => {
	return (
		<>
			<Container>
				<Row>Cuando se habla de codigo...somos como Jon Snow..</Row>
				<Row>Se requieren dos cosas:</Row>
				<Row>
					<Col size="4">Persistencia</Col>
					<Col size="4">Resolucionn</Col>
				</Row>
			</Container>
		</>
	);
};

export default Learn;
