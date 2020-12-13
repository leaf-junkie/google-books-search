import React from "react";
import "./style.css";

const BtnRemove = (props) => {
    return (
        <div className="btnRemove">
            <button 
            type="button" 
            className="btn btn-danger"
            {...props}
            >
            Remove
            </button>
        </div>
    );
}

export default BtnRemove;