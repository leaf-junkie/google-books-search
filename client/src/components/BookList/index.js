import React, { Component } from "react";
import { Link } from "react-router-dom";
import BtnSave from "../BtnSave";
import BtnRemove from "../BtnRemove";
import "./style.css";

class Book extends Component {
    render() {
        let book = this.props.book;
        console.log(book)
        let button;
        if (this.props.saveBook) {
            button = <BtnSave onClick={(e) => this.props.saveBook(book, e)} />;
        } else if (this.props.removeBook) {
            button = <BtnRemove onClick={(e) => this.props.removeBook(book.id, e)}/>;
        }
        return (
            <div className="book">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-4 mt-3">
                            <img src={ book.image } className="card-img border" alt={ `Cover for ${book.title}` }/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h4 className="card-title text-left">{ book.title }</h4>
                                <p className="card-text text-muted">Written by { book.author }</p>
                                <p className="card-text">{ book.description ? book.description.slice(0, 125) + "..." : "Oops! We don't have a description for this book." }</p>
                                {/* <Link to={book.link} target="_blank">
                                    <p className="card-text"><small className="text-muted">{book.title} by {book.author}</small></p>
                                </Link> */}
                                { button ? button : <p>There should be a button here</p> }
                                <a className="btn btn-light float-left" target="_blank" href={ book.link }>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class BookList extends Component {
    render() {
        return (
            <div className="container">
                <div className="list-overflow-container">
                {this.props.books.length ? (
                    <ul className="list-group">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <Book book={book}
                                  saveBook={this.props.saveBook}
                                  removeBook={this.props.removeBook}/>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <h3>No Results to Display</h3>
                    )}
                </div>
            </div> 
        );
    }
}

export default BookList;