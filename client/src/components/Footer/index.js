import React from "react";
import "./style.css"

const Footer = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer className="bg-light text-secondary text-center">
                <p>
                    <a href="https://github.com/leaf-junkie/google-books-search" target="_blank">Julie Ragsdale</a> | {(new Date().getFullYear())}
                </p>
            </footer>
        </div>
    );
} 

export default Footer;