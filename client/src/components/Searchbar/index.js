import React from "react";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <form>
                <div className="input-group mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search books" 
                    aria-describedby="button-addon2"
                    onChange={ props.handleInputChange }
                    value={ props.query }
                    />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-primary" 
                        type="submit" 
                        id="button-addon2"
                        onClick={ props.searchBooks }
                        >
                        Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;