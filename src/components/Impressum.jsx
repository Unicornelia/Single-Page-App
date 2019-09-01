import React, {Component} from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import hotel from '../assets/images/hotel_illustration.svg'
import './Impressum.scss'

class Impressum extends Component {
  render() {
    return (
      <Container className='impressum' fluid>
        <Row>
        <Col className="impressum-text-container">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button>Contact Us</Button>
        </Col>
        <Col>
          <Image
            src={hotel}
            alt="hotel"
          />
        </Col>
        </Row>
      </Container>
    )
  }
}

export default Impressum;