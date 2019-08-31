import React, { Component } from "react";
import { Col, Image, Jumbotron, Row } from "react-bootstrap";
import "./AvailableFor.scss";
import flower1 from "../assets/images/flowers_right_side.svg";
import flower2 from "../assets/images/flowers_left_side.svg";
import ios from "../assets/images/ios.png";
import android from "../assets/images/android.png";
import phone from "../assets/images/Group_1590/Group_1590.png";
import desktop from "../assets/images/Group_1584/Group_1584.png";
import globe from "../assets/images/globe.png";

class AvailableFor extends Component {
  render() {
    return (
      <Jumbotron className="available">
        <div className="container">
          <h3>Available for</h3>
          <Row>
            <Col>
              <div className="top-row">
                <Image
                  src={ios}
                  alt="..."
                  style={{ width: "10%", height: "10%" }}
                />
              </div>
            </Col>
            <Col>
              <div className="top-row">
              <Image
                src={globe}
                alt="..."
                style={{ width: "10%", height: "10%" }}
              />
              </div>
            </Col>
            <Col>
              <div className="top-row">
                <Image
                  src={android}
                  alt="..."
                  style={{ width: "10%", height: "10%" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="first-column">
                <Image src={flower1} alt="..." />
                <Image src={phone} alt="..." />
              </div>
            </Col>
            <Col>
              <Image src={desktop} alt="..." />
            </Col>
            <Col>
              <div id="last-column">
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
