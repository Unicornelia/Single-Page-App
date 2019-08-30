import React, { Component } from "react";
import NavComponent from '../components/NavComponent'
import Intro from '../components/Intro'
import AboutTheApp from '../components/AboutTheApp'
import './HomePage.scss'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent/>
        <Intro/>
        <AboutTheApp/>
      </div>
    );
  }
}

export default HomePage;
