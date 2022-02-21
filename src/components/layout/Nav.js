import { useContext } from "react";
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/AuthContext";
import logo from "../../images/logo/logoLightpurple.svg";

export default function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function signout() {
    setAuth(null);
    navigate("/");
  }

  return (
		<Navbar expand="md" sticky="top">
			<NavLink to="/" exact="true">
				<Navbar.Brand>
					<img className="navbar__logo" src={logo} alt="Logo" />
				</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto justify-content-end">
					<NavLink to="/accommodations" className="nav-link">
						accommodations
					</NavLink>
					<NavLink to="/contact" className="nav-link">
						contact
					</NavLink>

					{auth ? (
						<>
							<NavLink to="/admin" className="nav-link">
								admin
							</NavLink>
							<Button className="signout-btn" onClick={signout}>
								sign out
								<i className="fas fa-sign-out-alt icon"></i>
							</Button>
						</>
					) : (
						<NavLink to="/login" className="nav-link">
							login
						</NavLink>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
