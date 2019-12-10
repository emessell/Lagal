import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <ul className="navigation">
                <li className="nav-item"><a href="#Gallery">Gallery</a></li>
                <li className="nav-item"><a href="#About">About</a></li>
                <li className="nav-item"><a href="#Contact">Contact</a></li>
            </ul>
        );
    }
}

export default Navigation;