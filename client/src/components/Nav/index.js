import React from "react";
import "./style.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={require("./books-solid.svg")} width="25" ></img>
                The Shelf
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="" type="button">Saved</a>
                    {/* <a className="nav-link" href="/books">Saved</a> */}
                </li>
            </ul>            
        </nav>
    );

}

export default Nav;