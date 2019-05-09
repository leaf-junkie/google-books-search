import React from "react";

const BtnSave = (props) => {
    return (
        <div className="btnSave">
            <button 
            type="button" 
            class={`btn btn-success ${props["data-value"]}`}
            onClick={props.onClick}
            {...props}
            >
            Save
            </button>
        </div>
    );
}

export default BtnSave;