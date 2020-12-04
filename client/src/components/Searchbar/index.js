import React from "react";
import "./style.css";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <form>
                <div className="input-group mb-3">
                    <input 
                    name="query"
                    type="text" 
                    className="form-control" 
                    placeholder="Search books" 
                    aria-describedby="button-addon2"
                    onChange={ props.handleInputChange }
                    value={ props.query }
                    />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-light" 
                        type="submit" 
                        id="button-addon2"
                        onClick={ props.searchBook }
                        >
                            <img src={require("./search-solid.svg")} width="25"></img>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;