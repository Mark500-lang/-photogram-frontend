import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  

  const handleLogin = () => {
    setLoggedIn(true);
  };

  function handleLogout() {
    fetch("/logout/", {
      method: 'DELETE'
    })
      .then(response => {
        console.log(response)
        if (response.ok) {
          console.log(response)

          setLoggedIn(false);
          navigate('/');
          alert("Logged out successfully")
          // perform any necessary cleanup here
        } else {
          alert("error logging out")
          // handle the error case here
        }
      })
      .catch(error => {
        console.error('Error logging out:', error);
        // handle the error case here
      });
  }

  useEffect(() => {
    fetch("/logged_in", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(response => {
      setCurrentUser(response)
    })
  }, [])
  console.log(currentUser);
  
  return (
    <>
      <nav className="navbar">
      <div className="navbar__logo">
        <img src="../images/photogram_logo4.svg" alt="logo"/>

      </div>
        <ul className="navbar__list">
          <li>
            <NavLink className="nav-link" to='/home/search'>
              <span className="material-symbols-outlined">search</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to='/home/feed'>
              <span className="material-symbols-outlined">home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to='/home/profile'>
              <span>  <div className="d-flex align-items-center mb-3">
              {currentUser && currentUser.map((user) => (
              <div className="d-flex align-items-center">

              <img style={{
                width: "40px",
                height: "40px",
              }}
              className="profile-picture rounded-circle me-3"
              src={user.profile_pic}
              alt={user.username}
            />
          </div>
          ))}
        </div></span>
              
            </NavLink>
            
          </li>
          {/* <li>
            <NavLink className="nav-link" to='/home/search'>
              <span className="material-symbols-outlined">search</span>
            </NavLink>
          </li> */}

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
