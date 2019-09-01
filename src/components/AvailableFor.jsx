import React, { Component } from "react";
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./AvailableFor.scss";
import flower1 from "../assets/images/flowers_right_side.svg";
import flower2 from "../assets/images/flowers_left_side.svg";
import phone from "../assets/images/Group_1590/Group_1590.png";
import desktop from "../assets/images/Group_1584/Group_1584.png";

class AvailableFor extends Component {
  render() {
    return (
      <Container id="available_for" className="available" fluid>
          <h3>Available for</h3>
          <Row>
            <Col>
                <Image src={flower1} alt="..." />
                <Image src={phone} alt="..." />
            </Col>
            <Col>
                <Image src={desktop} alt="..." />
            </Col>
            <Col>
                <Image src={phone} alt="..." />
                <Image src={flower2} alt="..." />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default AvailableFor;
