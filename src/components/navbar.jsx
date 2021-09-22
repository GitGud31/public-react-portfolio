import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
/* import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; */

import CvButton from "./cv-button";

/* import Home from './home';
import Services from './services';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Footer from './footer'; */


import logo from "../assets/brandlogo.svg";

import "../styles/navbar.css";

class NavBar extends React.Component {

    render() {

        return (

            <Navbar className="navbar-custom" sticky="top" collapseOnSelect expand="sm" >

                <Navbar.Brand>
                    <img className="logo" src={logo} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-links m-auto">
                        <Nav.Link
                            duration={800}
                            smooth={true}
                            offset={-50}
                            to="home-section"
                            eventKey="1"
                            as={Link}>
                            <div className="nav-link-text">
                                home
                            </div>
                        </Nav.Link>

                        <Nav.Link
                            duration={800}
                            smooth={true}
                            offset={-50}
                            to="services-section"
                            eventKey="2"
                            as={Link}>
                            <div className="nav-link-text">
                                services
                            </div>
                        </Nav.Link>

                        <Nav.Link
                            duration={800}
                            smooth={true}
                            offset={-50}
                            to="projects-section"
                            eventKey="3"
                            as={Link}>
                            <div className="nav-link-text">
                                projects
                            </div>
                        </Nav.Link>

                        <Nav.Link
                            duration={800}
                            smooth={true}
                            offset={-50}
                            to="about-section"
                            eventKey="4"
                            as={Link}>
                            <div className="nav-link-text">
                                about
                            </div>
                        </Nav.Link>

                        <Nav.Link
                            duration={800}
                            smooth={true}
                            offset={-50}
                            to="contact-section"
                            eventKey="5"
                            as={Link}>
                            <div className="nav-link-text">
                                contact
                            </div>
                        </Nav.Link>

                    </Nav>

                    <CvButton>resume</CvButton>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default NavBar;