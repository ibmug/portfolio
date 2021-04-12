import React from "react";
// import { Link } from "react-router-dom";
import SignForm from "../SignForm";
import NavItem from "../NavItem";
import "./styles.css";

// import Navbar from "react-bootstrap/Navbar";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Mav() {
	return (
		<>
			{/* <nav className="navbar navbar-dark bg-dark">
				<div className="anchor">
					<NavItem text="Read.ME " link="about"></NavItem>
					<NavItem text="Media" link="media"></NavItem>
					<NavItem text="Learn" link="learn"></NavItem>
					<NavItem text="Contact" link="contact"></NavItem>
					<SignForm />
				</div>
			</nav> */}
			<Navbar bg="dark" expand="lg">
				{/* <Navbar.Brand href="/">Gomo</Navbar.Brand> */}
				<Link className="brand" to="/">
					Gomo
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{/* <Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link> */}
						<NavItem text="Read.ME " link="about"></NavItem>
						<NavItem text="Media" link="media"></NavItem>
						<NavItem text="Learn" link="learn"></NavItem>
						<NavItem text="Contact" link="contact"></NavItem>
					</Nav>
					<SignForm inline />
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default Mav;
