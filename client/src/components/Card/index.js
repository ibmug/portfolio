import Kard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";

const Card = (props) => {
	return (
		<>
			<Kard border={props.border} className="kard">
				<Kard.Img variant="top" src={props.img} />
				<Kard.Body>
					<Kard.Title>{props.title}</Kard.Title>
					<Kard.Text>{props.text}</Kard.Text>
					<Button
						onClick={(e) => {
							e.preventDefault();
							window.open(props.path, "_blank");
						}}
					>
						Repo or page
					</Button>
				</Kard.Body>
			</Kard>
		</>
	);
};

export default Card;
