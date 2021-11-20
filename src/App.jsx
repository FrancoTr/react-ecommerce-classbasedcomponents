import React, { Component } from "react";
import NavBar from "./Navbar";
import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
