import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink exact to="/" > ExcerTracker </NavLink>
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
