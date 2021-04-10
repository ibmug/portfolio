import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "../utils/images/banner.png";

function About() {
	// const mediaObj = {
	//     text: ["Streams ","Music ","Instagram ","Git ","LinkedIn "],
	//     url: ["https://twitch.tv/ibmug", "https://soundcloud.com/ibmug","https://www.instagram.com/ibmug/","https://github.com/ibmug","https://linkedin.com/in/rodrigosv8"],
	//     class:["fab fa-twitch","fab fa-soundcloud","fab fa-instagram","fab fa-github","fab fa-linkedin"]
	// };

	return (
		<div>
			<Hero backgroundImage={backgroundImage}>
				<h1>Ibmug</h1>
				<h2></h2>
			</Hero>
			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
						<h1>Latest News!</h1>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<p>
							This website has information on me and stuff I've done or am
							currently working on.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
