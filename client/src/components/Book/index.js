import React from "react";
// import style from "./style.css";

const Book = (props) => {
    return (
        <div className="book">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={ props.thumbnail } class="card-img" alt={ props.title }/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{ props.title }</h5>
                        <p class="card-text"><small class="text-muted">{ author }</small></p>
                        <p class="card-text">{ props.description }</p>
                        <p class="card-text"><small class="text-muted">{ link }</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;