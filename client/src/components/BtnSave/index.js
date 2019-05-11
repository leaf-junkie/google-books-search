import React from "react";

const BtnSave = (props) => {
    return (
        <div className="btnSave">
            <button 
            type="button" 
            className={`btn btn-success ${props["data-value"]}`}
            {...props}
            >
            Save
            </button>
        </div>
    );
}

export default BtnSave;