import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";
import Hero from "../components/Hero";
import backgroundImage from "../utils/images/banner.png";

const images = [
	{
		path: "https://ibmug.github.io/juegoma_dev/",
		img: "Unity_Game.JPG",
		title: "Unity Game",
		text: "Still under construction...",
		border: "warning",
	},
	{
		path: "https://ibmug-emed.herokuapp.com/",
		img: "emed.JPG",
		title: "eMed",
		text: "Interface for Clinics",
		border: "success",
	},
	{
		path: "https://ibmug.github.io/proyecto_1/",
		img: "buscaCovid.jpg",
		title: "Covid Searcher in Mexico",
		text: "This was done for a learning proyect.",
		border: "info",
	},
	{
		path: "https://imbug-expenses.herokuapp.com/",
		img: "Expense_Tracker.JPG",
		title: "Expense Tracker",
		text: "Simple yet effective Tracker",
		border: "dark",
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

const workItems = images.map((image) => (
	<Card
		path={image.path}
		img={"./assets/img/" + image.img}
		title={image.title}
		text={image.text}
		border={image.border ? image.border : "secondary"}
	/>
));

const Home = (props) => {
	return (
		<>
			<Hero backgroundImage={backgroundImage}>
				<h1>Ibmug</h1>
				<h2>Create an account to see additional features!</h2>
			</Hero>
			<Container>
				<p>Behold!...My Stuff...</p>
				<Row>{workItems}</Row>
			</Container>
		</>
	);
};

export default Home;
