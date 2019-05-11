import React, {Component} from "react";
import { Link } from "react-router-dom";
import BtnSave from "../BtnSave";
import BtnRemove from "../BtnRemove";
import style from "./style.css";

class Book extends Component {
    render() {
        let book = this.props.book;
        let button;
        if (this.props.saveBook) {
            button = <BtnSave onClick={(e) => this.props.saveBook(book, e)} />;
        } else if (this.props.removeBook) {
            button = <BtnRemove onClick={(e) => this.props.removeBook(book.id, e)}/>;
        }
        return (
            <div className="book">
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={ book.image } className="card-img" alt={ `Image for ${book.title} not available` }/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ book.title }</h5>
                            <p className="card-text"><small className="text-muted">{ book.author }</small></p>
                            <p className="card-text text-truncate">{ book.description }</p>
                            <Link to={"/books/" + book.id}>
                                <p className="card-text"><small className="text-muted">{book.title} by {book.author}</small></p>
                            </Link>
                            {button ? button: <p>There should be a button here</p>}
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