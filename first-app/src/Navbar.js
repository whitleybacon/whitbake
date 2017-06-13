import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return(
            <nav className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
        )
    }
}

export default Navbar;