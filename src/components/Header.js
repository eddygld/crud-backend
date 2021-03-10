import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <span><NavLink exact to="/" >ExcerTracker </NavLink></span>
                <ul>
                    <li><NavLink to="/user">Create User</NavLink></li>
                    <li><NavLink to="/log" >Log Exercise</NavLink></li>
                    <li><NavLink to="/" >Exercises</NavLink></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
