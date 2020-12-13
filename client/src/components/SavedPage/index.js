import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import BookList from "../BookList";

class SavedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.loadBooks();
    }

    // Load books based on search result
    loadBooks = () => {
        console.log("loading books");
        API.getBooks()
        .then(res => {
            this.setState({ 
                books: res.data
            });
        })
        .catch(err => console.log(err));
    }

    // Remove book based on id
    removeBook = (id, e) => {
        e.preventDefault()
        API.deleteBook(id)
        .then(res => {
            this.loadBooks()
        })
        .catch(err => console.log(err));
    }

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

export default SavedPage;