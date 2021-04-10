import React from "react";
// import { Link } from "react-router-dom";
import SignForm from "../SignForm";
import NavItem from "../NavItem";
import "./styles.css";
function Nav() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			{/* <a className="navbar-brand" href="/index">
				Test
			</a> */}
			{/* <Link to="/index"> Some name</Link> */}
			<div className="anchor">
				<NavItem text="Read.ME " link="about"></NavItem>
				<NavItem text="WORK and MEDIA" link="work"></NavItem>
				<NavItem text="Learn" link="learn"></NavItem>
				<NavItem text="Contact" link="contact"></NavItem>
				<SignForm />
			</div>
		</nav>
	);
}

export default Nav;
