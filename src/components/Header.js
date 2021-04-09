import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Header = () => {

    const toggleMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }


    return (
        <IconContext.Provider value={{ color: "white" , className: "global-class-name", style: { verticalAlign: 'middle' }}} >
            <header>
                <nav id="myTopnav" className="topnav" >
                    <span><NavLink exact to="/" >ExcerTracker </NavLink></span>
                    <ul>
                        <li><NavLink to="/user">Create User</NavLink></li>
                        <li><NavLink to="/log" >Log Exercise</NavLink></li>
                        <li><NavLink to="/" >Exercises</NavLink></li>
                        <li className="icon" ><button className="icon-btn" onClick={toggleMenu}><FaBars /></button></li>
                    </ul>
                </nav>
            </header>
        </IconContext.Provider>
        
    )
}

export default Header
