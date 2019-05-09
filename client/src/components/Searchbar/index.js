import React from "./node_modules/react";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <form>
                <div class="input-group mb-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Search" 
                    aria-describedby="button-addon2"
                    onChange={ props.handleInputChange }
                    value={ props.query }
                    />
                    <div class="input-group-append">
                        <button 
                        class="btn btn-outline-secondary" 
                        type="submit" 
                        id="button-addon2"
                        onClick={ props.searchBooks }
                        >
                        Button
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;