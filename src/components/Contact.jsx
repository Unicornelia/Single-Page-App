import React, { Component } from "react";
import { Image, Jumbotron } from "react-bootstrap";
import "./Contact.scss";
import logoWithText from "../assets/images/Group_1597.svg";

class Contact extends Component {
  render() {
    return (
      <Jumbotron className="contact">
        <div>
          <Image src={logoWithText} alt="..." />
        </div>
        <div>
          <p>Unnamed Road, London NW1 4RT, England</p>
          <p>info@hotelapp.co</p>
          <p>www.hotelapp.co</p>
          <p>+44 20 1234 5678</p>
        </div>
        <div>
          <h6>
            © 2019 Servee Kft. All rights reserved. | Terms of use | Privacy
            Policy | Licenses
          </h6>
        </div>
      </Jumbotron>
    );
  }
}

export default Contact;
