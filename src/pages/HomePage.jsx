import React, { Component } from "react";
import "./HomePage.scss";
import NavComponent from "../components/NavComponent";
import Intro from "../components/Intro";
import AboutTheApp from "../components/AboutTheApp";
import ForCustomers from "../components/ForCustomers";
import AvailableFor from "../components/AvailableFor";
import ForHotels from '../components/ForHotels'
import Impressum from '../components/Impressum'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <Intro />
        <AboutTheApp />
        <ForCustomers />
        <AvailableFor />
        <ForHotels/>
        <Impressum/>
      </div>
    );
  }
}

export default HomePage;
