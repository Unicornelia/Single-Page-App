import React, { Component } from "react";
import { Col, Image, Jumbotron, Row } from "react-bootstrap";
import hotelLobby from "../assets/images/for_customers_picture/for_customers_picture@2x.png";
import logo1 from "../assets/images/Group_1497.svg";
import logo2 from "../assets/images/Group_1496.svg";
import logo3 from "../assets/images/for_customers_icon.svg";
import "./ForCustomers.scss";

class ForCustomers extends Component {
  render() {
    return (
      <Jumbotron id="for_customers" className="for-customers">
        <Image src={hotelLobby} alt="a bar in a hotel lobby" />
        <div className="text-div">
          <h3>FOR CUSTOMERS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Row>
            <Col>
              <Image src={logo1} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
            <Col>
              <Image src={logo2} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
            <Col>
              <Image src={logo3} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    );
  }
}

export default ForCustomers;
