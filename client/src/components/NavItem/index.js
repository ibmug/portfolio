import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function NavItem(props) {
	return (
		<div className="col">
			<Link className="link-info" to={"/" + props.link}>
				{props.text}
			</Link>
		</div>
	);
}

export default NavItem;
