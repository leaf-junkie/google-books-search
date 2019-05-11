import React, { Component } from "react";
import API from "../../utils/API";
import GoogleAPI from "../../utils/GoogleBooksAPI";
import Jumbotron from "../Jumbotron";
import Searchbar from "../Searchbar";
import BookList from "../BookList";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`Name: ${name} Value: ${value}`)
        this.setState({
            [name]: value
        });
    }

    // Save book
    saveBook = (data, event) => {
        event.preventDefault();
        console.log("Save book");
        console.log(this.state);
        console.log(data);
        API.saveBook({
            title: data.title,
            author: data.author,
            description: data.description,
            image: data.image,
            link: data.link,
            id: data.id
        })
        .then(res => 
            this.setState({
                books: this.state.books.filter(b => b.id != data.id)
            })
        )
        .catch(err => console.log(err));
    }

    searchBook = event => {
        event.preventDefault()
        const searchQuery = this.state.query
        console.log(searchQuery);
        GoogleAPI.search(searchQuery).then(res => {
            const searchResults = []
            let items = res.data.items || [];
            for (let i = 0; i < res.data.items.length; i++) {
                let book = {}
                book.author = items[i].volumeInfo.authors ? items[i].volumeInfo.authors[0] : "Unknown";
                book.link = items[i].volumeInfo.infoLink
                book.title = items[i].volumeInfo.title
                book.image = (items[i].volumeInfo.imageLinks && items[i].volumeInfo.imageLinks.thumbnail) 
                ? items[i].volumeInfo.imageLinks.thumbnail 
                : 'http://placehold.it/300x300'
                book.description = items[i].volumeInfo.description
                book.id = items[i].id;
                searchResults.push(book)
            }
            this.setState({books: searchResults})
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <Jumbotron/>
                <div className="container">
                    <Searchbar 
                        handleInputChange={this.handleInputChange} 
                        searchBook={this.searchBook}
                    />
                    {this.state.books.length ? (
                        <BookList books={this.state.books}
                                saveBook={this.saveBook.bind(this)}/>
                    ) : (
                        <h5>No Results to Display</h5>
                    )}
                </div>    
            </div>
        )
    }
}

export default SearchPage;