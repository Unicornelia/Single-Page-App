import React, { Component } from "react";
import { Col, Image, Jumbotron, Row } from "react-bootstrap";
import hotelCorridor from "../assets/images/For_hotels_picture/FOR_HOTELS_PICTURE@2x.png";
import hands from "../assets/images/for_hotels_icon_hands.svg";
import purchase from "../assets/images/for_hotels_icon_purchase.svg";
import communication from "../assets/images/for_hotels_icon_communication.svg";
import "./ForHotels.scss";

class ForHotels extends Component {
  render() {
    return (
      <Jumbotron className="for-hotels">
        <div className="text-div">
          <h3>For Hotels</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Row>
            <Col>
              <Image src={hands} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
            <Col>
              <Image src={purchase} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
            <Col>
              <Image src={communication} alt="..." />
              <p>"Lorem ipsum dolor sit amet,</p>
            </Col>
          </Row>
        </div>
        <Image src={hotelCorridor} alt="a corridor in a fancy hotel" />
      </Jumbotron>
    );
  }
}

export default ForHotels;
