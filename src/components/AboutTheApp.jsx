import React, { Component } from "react";
import { Col, Image, Jumbotron, Row } from 'react-bootstrap'
import one from "../assets/images/onboarding_illustration1.svg";
import two from "../assets/images/onboarding_illustration 2.svg";
import three from "../assets/images/onboarding_illustration 3.svg";
import "./AboutTheApp.scss";

class Intro extends Component {
  render() {
    return (
      <Jumbotron className="about">
        <div>
          <h3>ABOUT THE APP</h3>
          <Row>
            <Col>
              <Image src={one} alt="..." />
              <p>Keep track of your consumption while staying in a hotel.</p>
            </Col>
            <Col>
              <Image src={two} alt="..." />
              <p>Check out of your hotel in the app, so you can skip lines.</p>
            </Col>
            <Col>
              <Image src={three} alt="..." />
              <p>
                Browse the activities, so you can keep up with your hotels
                events and the best offers near you!
              </p>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    );
  }
}

export default Intro;
