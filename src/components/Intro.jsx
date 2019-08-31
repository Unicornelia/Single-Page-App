import React, { Component } from "react";
import { Button, Col, Image, Jumbotron, Row } from "react-bootstrap";
import phones from "../assets/images/Group_1598/Group_1598.png";
import "./Intro.scss";

class Intro extends Component {
  render() {
    return (
      <Jumbotron className="intro" fluid>
        <Row>
          <Col>
            <h1>CHECK YOURSELF & HELP YOURSELF</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Get started</Button>
          </Col>
          <Col>
            <Image src={phones} alt="phones" />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Intro;
