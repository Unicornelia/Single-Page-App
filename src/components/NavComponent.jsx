import React, { Component } from "react";
import { Button, Image, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/Group_1596.svg'
import './NavComponent.scss'

class NavComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark" className="navbar-custom">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Image src={logo}
                   alt="phones"/>
            <Nav.Link href="#about_the_app">About the app</Nav.Link>
            <Nav.Link href="#for_customer">For customers</Nav.Link>
            <Nav.Link href="#available_for">Available for</Nav.Link>
            <Nav.Link href="#for_hotels">For hotels</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">
              <Button className="login-button">Login</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#sign_up">
              <Button className="sign-up-button">Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavComponent;