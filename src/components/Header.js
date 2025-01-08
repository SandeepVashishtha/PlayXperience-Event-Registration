// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h2>PlayXperience</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
