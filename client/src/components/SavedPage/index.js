import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";
import Book from "../Book";
import BtnRemove from "../BtnRemove";

class SavedPage extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    // Load books based on search result
    loadBooks = () => {
        API.getBooks()
        .then(res => 
            this.setState({ 
                books: res.data.books,
                title: "",
                author: "",
                description: "",
                image: "",
                link: ""
            })
        )
        .catch(err => console.log(err));
    }

    // Remove book based on id
    removeBook = (id) => {
        API.removeBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Save book
    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                image: this.state.image,
                link: this.state.link
            })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    }

    render() {
        return(
            <div className="container">
                <Jumbotron/>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                        <ListItem key={book._id}>
                            <Book>
                                <BtnRemove onClick={() => this.removeBook(book._id)} />
                            </Book>
                        </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </div>    
        )
    }
}

export default SavedPage;