import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function Header(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="./images/photogram_logo.svg" alt="logo"/>
            </div>
            <ul className="navbar__list">
                <li>
                    <NavLink className="nav-link" to='/search'>
                        <span className="material-symbols-outlined">search</span> 
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to='/'>
                        <span className="material-symbols-outlined">home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to='/profile'>
                        <span className="material-symbols-outlined">radio_button_unchecked</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>

    )
}

export default Header;
/*

*/