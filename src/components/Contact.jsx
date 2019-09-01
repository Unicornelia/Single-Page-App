import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Contact.scss";
import logoWithText from "../assets/images/Group_1597.svg";

class Contact extends Component {
  render() {
    return (
      <Container className="contact" fluid>
        <Row>
          <Col>
            <Image src={logoWithText} alt="the app logo" />
          </Col>
          <Col>
            <p>Unnamed Road, London NW1 4RT, England</p>
            <p>info@hotelapp.co</p>
            <p>www.hotelapp.co</p>
            <p>+44 20 1234 5678</p>
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
