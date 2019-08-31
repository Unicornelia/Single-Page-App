import React, { Component } from "react";
import { Col, Image, Jumbotron, Row } from 'react-bootstrap'
import "./AvailableFor.scss";
import flower1 from "../assets/images/flowers_right_side.svg";
import flower2 from "../assets/images/flowers_left_side.svg";
import phone from "../assets/images/Group_1590/Group_1590.png";
import desktop from "../assets/images/Group_1584/Group_1584.png";

class AvailableFor extends Component {
  render() {
    return (
      <Jumbotron className="available">
        <div className="container">
          <h3>Available for</h3>
          <Row>
            <Col>
              <div className="column">
                <Image src={flower1} alt="..." />
                <Image src={phone} alt="..." />
              </div>
            </Col>
            <Col>
              <Image src={desktop} alt="..." />
            </Col>
            <Col>
              <div className="column">
              <Image src={phone} alt="..." />
              <Image src={flower2} alt="..." />
              </div>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    );
  }
}

export default AvailableFor;
