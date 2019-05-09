import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <p>Google Books</p>
            <a className="nav-link" href="/">Search</a>
            <a className="nav-link" href="/saved">Saved</a>
        </nav>
    );

}

export default Nav;