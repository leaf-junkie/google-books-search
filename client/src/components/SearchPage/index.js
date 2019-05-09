import React, { Component } from "react";
import API from "../../utils/API";
import GoogleAPI from "../../utils/GoogleBooksAPI";
import Jumbotron from "../Jumbotron";
import Searchbar from "../Searchbar";
import { List, ListItem } from "../List";
import Book from "../Book";
import BtnSave from "../BtnSave";

class SearchPage extends Component {
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
        API.search()
        .then(res => {
            console.log(res)
            this.setState({ 
                books: res.data.books,
                title: "",
                author: "",
                description: "",
                image: "",
                link: ""
            })}

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

    searchBook = event => {
        event.preventDefault()
        const searchQuery = this.state.query
        GoogleAPI.search(searchQuery).then(res => {
            const searchResults = []
            for (let i = 0; i < res.data.items.length; i++) {
                let book = {}
                book.author = res.data.items[i].volumeInfo.authors[0]
                book.link = res.data.items[i].volumeInfo.infoLink
                book.title = res.data.items[i].volumeInfo.title
                book.image = (res.data.items[i].volumeInfo.imageLinks && res.data.items[i].volumeInfo.imageLinks.thumbnail) 
                ? res.data.items[i].volumeInfo.imageLinks.thumbnail 
                : 'http://placehold.it/300x300'
                book.description = res.data.items[i].volumeInfo.description
                searchResults.push(book)
            }
            this.setState({books: searchResults})
        }).catch(err => console.log(err))
    }

    render() {
        return(
            <div className="container">
                <Jumbotron/>
                <Searchbar/>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                        <ListItem key={book._id}>
                            <Book>
                                <BtnSave onClick={() => this.removeBook(book._id)} />
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

export default SearchPage;