import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import phones from "../assets/images/Group_1598/Group_1598.png";
import "./Intro.scss";

class Intro extends Component {
  render() {
    return (
        <Container className="intro" fluid>
        <Row>
          <Col xs={12} s={12} m={12} lg={6}>
            <h1>CHECK YOURSELF & HELP YOURSELF</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Get started</Button>
          </Col>
          <Col xs={12} s={12} m={12} lg={6}>
            <Image src={phones} alt="phones" responsive/>
          </Col>
        </Row>
        </Container>
    );
  }
}

export default Intro;
