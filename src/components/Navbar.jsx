import React from "react";
import logo from "../assets/favicon.png";

function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={ logo } alt="The logo of the club" />
            </div>
            <ul className="nav-contents">
                <li className="nav__item">Home</li>
                <li className="nav__item">About Us</li>
                <li className="nav__item">FAQs</li>
                <li className="nav__item">Blog</li>
                <li className="nav__item">Sign Up</li>
            </ul>
        </nav>

    )

}

export default Navbar;