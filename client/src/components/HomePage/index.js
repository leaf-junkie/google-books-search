import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import BookList from "../BookList";
// import "./style.css";

class HomePage extends Component {

    render() {
        return(
            <div>
                <Jumbotron/>
                <div className="container">
                    {this.state.books.length ? (
                        <BookList books={this.state.books} removeBook={this.removeBook}/>
                    ) : (
                        <h5>Add some books!</h5>
                    )}
                </div>    
            </div>
        )
    }
}

export default HomePage;