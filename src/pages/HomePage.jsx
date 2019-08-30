import React, { Component } from "react";
import NavComponent from '../components/NavComponent'
import Intro from '../components/Intro'
import './HomePage.scss'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent/>
        <Intro/>
      </div>
    );
  }
}

export default HomePage;
