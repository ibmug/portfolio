import Kard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

const Card = (props) => {
	return (
		<>
			<Kard className="kard">
				<Kard.Img variant="top" src={props.img} />
				<Kard.Body>
					<Kard.Title>{props.title}</Kard.Title>
					<Kard.Text>{props.text}</Kard.Text>
					<Button variant="primary" to={props.path}>
						Repo or page
					</Button>
				</Kard.Body>
			</Kard>
		</>
	);
};

export default Card;
