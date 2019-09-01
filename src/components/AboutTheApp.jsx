import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import one from "../assets/images/onboarding_illustration1.svg";
import two from "../assets/images/onboarding_illustration 2.svg";
import three from "../assets/images/onboarding_illustration 3.svg";
import "./AboutTheApp.scss";

class Intro extends Component {
  render() {
    return (
      <Container id="about_the_app" className="about" fluid>
        <h3>About the app</h3>
        <Row>
          <Col xs={12} s={12} m={12} lg={4}>
            <Image src={one} alt="person with phone" />
            <p>Keep track of your consumption while staying in a hotel.</p>
          </Col>
          <Col xs={12} s={12} m={12} lg={4}>
            <Image src={two} alt="person texting" />
            <p>Check out of your hotel in the app, so you can skip lines.</p>
          </Col>
          <Col xs={12} s={12} m={12} lg={4}>
            <Image src={three} alt="person working on laptop" />
            <p>
              Browse the activities, so you can keep up with your hotels events
              and the best offers near you!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
