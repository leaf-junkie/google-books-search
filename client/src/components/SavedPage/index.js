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
            console.log(res);
            this.setState({ 
                books: res.data
            });
        })
        .catch(err => console.log(err));
    }

    // Remove book based on id
    removeBook = (id, e) => {
        e.preventDefault()
        console.log(`Remove book: ${id}`);
        API.deleteBook(id)
        .then(res => {
            console.log(res);
            this.loadBooks()
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="container">
                <Jumbotron/>
                {this.state.books.length ? (
                    <BookList books={this.state.books} removeBook={this.removeBook}/>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </div>    
        )
    }
}

export default SavedPage;