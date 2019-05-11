import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <p><strong>Google Books</strong></p>
            <a className="nav-link" href="/">Search</a>
            <a className="nav-link" href="/books">Saved</a>
        </nav>
    );

}

export default Nav;