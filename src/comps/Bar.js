import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Bar extends Component {
    render() {
        return (
            <nav className="Bar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/projects/">Projects</NavLink></li>
                    <li><NavLink exact to="/services/">Services</NavLink></li>
                    <li><NavLink  exact to="/contact/">Contact</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Bar;