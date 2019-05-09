import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/Jumbotron/index";
import Book from "./components/Book/index";
import Footer from "./components/Footer/index";

class App extends Component {

  constructor() {
    super();

    this.state = {
      saved: false
    }
  }

  render() {
    return (
      <div className="App">
        <Jumbotron/>
        <Book/>
        <Footer/>          
      </div>
    );
  }
}

export default App;
