import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";
import Footer from "./components/Footer";
import "./App.css";

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
        <Nav/>
          <div className="container-body">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <SearchPage/>} />
              <Route exact path="/books" component={() => <SavedPage/> } />
            </Switch>
          </BrowserRouter>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;