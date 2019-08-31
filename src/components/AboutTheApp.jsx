import React, { Component } from "react";
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
import one from "../assets/images/onboarding_illustration1.svg";
import two from "../assets/images/onboarding_illustration 2.svg";
import three from "../assets/images/onboarding_illustration 3.svg";
import "./AboutTheApp.scss";

class Intro extends Component {
  render() {
    return (
      <Jumbotron className="about">
        <Container fluid>
          <h3>About the app</h3>
          <Row>
            <Col>
              <Image src={one} alt="person with phone" />
              <p>Keep track of your consumption while staying in a hotel.</p>
            </Col>
            <Col>
              <Image src={two} alt="person texting" />
              <p>Check out of your hotel in the app, so you can skip lines.</p>
            </Col>
            <Col>
              <Image src={three} alt="person working on laptop" />
              <p>
                Browse the activities, so you can keep up with your hotels
                events and the best offers near you!
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Intro;
