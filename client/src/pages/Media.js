import React from "react";
import Container from "../components/Container";

import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaSoundcloud,
	FaTwitch,
} from "react-icons/fa";

const images = [
	{
		path: "https://ibmug.github.io/juegoma_dev/",
		img: "Unity_Game.JPG",
		title: "Unity Game",
		text: "Still under construction...",
	},
	{
		path: "https://ibmug-emed.herokuapp.com/",
		img: "emed.JPG",
		title: "eMed",
		text: "Interface for Clinics",
	},
	{
		path: "https://ibmug.github.io/proyecto_1/",
		img: "buscaCovid.jpg",
		title: "Covid Searcher in Mexico",
		text: "This was done for a learning proyect.",
	},
	{
		path: "https://imbug-expenses.herokuapp.com/",
		img: "Expense_Tracker.JPG",
		title: "Expense Tracker",
		text: "Simple yet effective Tracker",
	},
	{
		path: "https://ibmug-notetaker.herokuapp.com/",
		img: "noteTaker.JPG",
		title: "Note taker!",
		text: "Easy post to track notes...",
	},
	{
		path: "https://medidor-ejercicio.herokuapp.com/",
		img: "Fitness_track_poster.JPG",
		title: "Fitness Bragger",
		text: "Easy post to DB form",
	},
	{
		path: "https://ibmug.github.io/simpleDaySchedule/",
		img: "simpleSchedule.JPG",
		title: "Simple Scheduler",
		text: "A simple scheduler, needs a lot of refining..",
	},
];

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

const Media = (props) => {
	return (
		<>
			<Container>
				<div>Find me on the following platforms:</div>
				<ul>{mediaItems}</ul>
			</Container>
		</>
	);
};

export default Media;
