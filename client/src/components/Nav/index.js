import React from "react";

class Nav extends Component() {

    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false
        }
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setstate({ active: !currentState });
    }

    render() {
        return (
            <nav class="nav">
                <p>Google Books</p>
                <a class="nav-link" href="/">Search</a>
                <a class="nav-link" href="/saved">Saved</a>
            </nav>
        )
    }
}

export default Nav;