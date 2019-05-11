import React from "react";

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