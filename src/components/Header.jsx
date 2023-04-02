import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  function handleLogout() {
    fetch("http://localhost:3000/logout/", {
      method: 'DELETE'
    })
      .then(response => {
        console.log(response)
        if (response.ok) {
          console.log(response)

          setLoggedIn(false);
          navigate('/');

          // perform any necessary cleanup here
        } else {
          // handle the error case here
        }
      })
      .catch(error => {
        console.error('Error logging out:', error);
        // handle the error case here
      });
  }
  
  return (
    <>
      
      <nav className="navbar">
        <ul className="navbar__list">
          
          <li>
            <NavLink className="nav-link" to='/home/feed'>
              <span className="material-symbols-outlined">home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to='/home/profile'>
              <span className="material-symbols-outlined">radio_button_unchecked</span>
            </NavLink>
            
          </li>
          <li>
            <NavLink className="nav-link" to='/home/search'>
              <span className="material-symbols-outlined">search</span>
            </NavLink>
          </li>
          <li>

          <button onClick={handleLogout}>Logout</button>

          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
