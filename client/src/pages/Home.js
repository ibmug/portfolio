import React from "react";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "../components/Hero";
import backgroundImage from "../utils/images/banner.png";

import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaSoundcloud,
	FaTwitch,
} from "react-icons/fa";

import SignForm from "../components/SignForm";
import API from "../utils/API";

const mediaObj = [
	{
		text: "Streams",
		url: "https://twitch.tv/ibmug",
		icon: FaTwitch,
	},
	{
		text: "Music",
		url: "https://soundcloud.com/ibmug",
		icon: <FaSoundcloud />,
	},
	{
		text: "Instagram",
		url: "https://www.instagram.com/ibmug/",
		icon: <FaInstagram />,
	},
	{
		text: "Git",
		url: "https://github.com/ibmug",
		icon: <FaGithub />,
	},
	{
		text: "LinkedIn",
		url: "https://linkedin.com/in/rodrigosv8",
		icon: <FaLinkedin />,
	},
];

const mediaItems = mediaObj.map((media) => (
	<li>
		<a href={media.url} target="_blank">
			{" "}
			{media.text}
			{media.icon}
		</a>
	</li>
));

const Home = (props) => {
	return (
		<>
			<Hero backgroundImage={backgroundImage}>
				<h1>Ibmug</h1>
				<h2>Create an account to see some more!</h2>
			</Hero>
			<Container>
				<div>Find me on the following platforms:</div>
				<ul>{mediaItems}</ul>
			</Container>
		</>
	);
};

export default Home;
