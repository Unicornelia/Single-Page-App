import React, {Component} from 'react';
import { Button, Image, Jumbotron } from 'react-bootstrap'
import hotel from '../assets/images/hotel_illustration.svg'
import './Impressum.scss'

class Impressum extends Component {
  render() {
    return (
      <Jumbotron className='impressum'>
        <div className="impressum-text-container">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button>Contact Us</Button>
        </div>
        <div>
          <Image
            src={hotel}
            alt="hotel"
          />
        </div>
      </Jumbotron>
    )
  }
}

export default Impressum;