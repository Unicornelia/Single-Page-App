import React, { Component } from "react";
import "./HomePage.scss";
import NavComponent from "../components/NavComponent";
import Intro from "../components/Intro";
import AboutTheApp from "../components/AboutTheApp";
import ForCustomers from "../components/ForCustomers";
import AvailableFor from "../components/AvailableFor";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <Intro />
        <AboutTheApp />
        <ForCustomers />
        <AvailableFor />
      </div>
    );
  }
}

export default HomePage;
