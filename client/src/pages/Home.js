import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
		{media.text}
		<a href={media.url}>{media.icon}</a>
	</li>
));

const Home = (props) => {
	return (
		<>
			{/* <SignForm fn={props.fn} /> */}
			<div>You gotta sign in bro</div>
			<ul>{mediaItems}</ul>
		</>
	);
};

export default Home;
