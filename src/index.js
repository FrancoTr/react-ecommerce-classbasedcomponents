import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import "index.css";

var element = <button class="btn btn-danger">Class based components</button>;
ReactDOM.render(element, document.getElementById("root"));
