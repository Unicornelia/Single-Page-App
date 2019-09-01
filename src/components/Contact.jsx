import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Contact.scss";
import logoWithText from "../assets/images/Group_1597.svg";
import address from "../assets/images/place.svg";
import email from "../assets/images/envelope.svg";
import webpage from "../assets/images/webpage.svg";
import phone from "../assets/images/phone number.svg";

class Contact extends Component {
  render() {
    return (
      <Container className="contact" fluid>
        <Row>
          <Col>
            <Image src={logoWithText} alt="the app logo" />
          </Col>
          <Col>
            <Row>
              <Image src={address} alt="" />
              <p>Unnamed Road, London NW1 4RT, England</p>
            </Row>
            <Row>
              <Image src={email} alt="" />
              <p>info@hotelapp.co</p>
            </Row>
            <Row>
              <Image src={webpage} alt="" />
              <p>www.hotelapp.co</p>
            </Row>
            <Row>
              <Image src={phone} alt="" />
              <p>+44 20 1234 5678</p>
            </Row>
          </Col>
        </Row>
        <p>
          © 2019 Servee Kft. All rights reserved. | Terms of use | Privacy
          Policy | Licenses
        </p>
      </Container>
    );
  }
}

export default Contact;
