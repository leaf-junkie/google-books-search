import React from "react";
import { Link } from "react-router-dom";
// import style from "./style.css";

function Book(props) {
    return (
        <div className="book">
            <div className="card mb-3" style="max-width: 600px;">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={ props.thumbnail } className="card-img" alt={ `Image for ${props.title} not available` }/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ props.title }</h5>
                        <p className="card-text"><small className="text-muted">{ props.author }</small></p>
                        <p className="card-text">{ props.description }</p>
                        <Link to={"/books/" + props._id}>
                            <p className="card-text"><small className="text-muted">{props.title} by {props.author}</small></p>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;