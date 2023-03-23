import React from 'react';
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHouse, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className='nav-style'>
        <nav>
            <NavLink to='/'>
                <FontAwesomeIcon icon={faHouse} />
                <p>Home</p>
            </NavLink>
            <NavLink to='/About'>
                 <FontAwesomeIcon icon={faUser} />
                 <p>About</p>
            </NavLink>
            <NavLink to='/Portfolio'>
                <FontAwesomeIcon icon={faFile} />
                 <p>Portfolio</p>
            </NavLink>
            <NavLink to='/Contact'>
                <FontAwesomeIcon icon={faPhone} />
                 <p>Contact</p>
            </NavLink>
        </nav>
    </div>
  )
}



export default Navbar
