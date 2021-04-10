import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

const images = [
	{
		path: "https://ibmug.github.io/juegoma_dev/",
		img: "Unity_Game.JPG",
		title: "Unity Game",
		text: "Still under construction...",
	},
	{
		path: "https://ibmug.github.io/proyecto_1/",
		img: "buscaCovid.jpg",
		title: "Covid Searcher in Mexico",
		text: "This was done for a learning proyect.",
	},
	{
		path: "https://ibmug.github.io/simpleDaySchedule/",
		img: "simpleSchedule.JPG",
		title: "Simple Scheduler",
		text: "A simple scheduler, needs a lot of refining..",
	},
	{
		path: "https://ibmug-emed.herokuapp.com/",
		img: "emed.JPG",
		title: "eMed",
		text: "Interface for Clinics",
	},
	{
		path: "https://imbug-expenses.herokuapp.com/",
		img: "Expense_Tracker.JPG",
		title: "Expense Tracker",
		text: "Simple yet effective Tracker",
	},
	{
		path: "https://medidor-ejercicio.herokuapp.com/",
		img: "Fitness_track_poster.JPG",
		title: "Fitness Bragger",
		text: "Easy post to DB form",
	},
];

const workItems = images.map((image) => (
	<Card
		path={image.paths}
		img={"./assets/img/" + image.img}
		title={image.title}
		text={image.text}
	/>
));

const Work = (props) => {
	return (
		<>
			{/* <SignForm fn={props.fn} /> */}
			<Container>
				<p>Behold!...My Stuff...</p>
				<Row>{workItems}</Row>
			</Container>
		</>
	);
};

export default Work;
