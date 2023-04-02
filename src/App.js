import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import EditProfile from './components/EditProfile';
import Search from './components/Search';
import Feed from './components/Feed';
import LoginSignup from './components/login/LoginSignup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({}); 
   
  
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
 

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    console(data.user);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  }

  return (
    <BrowserRouter>
      <Routes >
            <Route index path='/' element={<LoginSignup/>}/>
            <Route path="/home" element={<Header/>}>
            <Route path="/home/feed" element={<Feed/>}/>
            <Route path='/home/search' element={<Search/>}/>
            <Route path='/home/profile/edit-profile' element={currentUser ? <EditProfile currentUser={currentUser}/> : null}/>
            <Route path='/home/profile' element={currentUser ? <Profile currentUser={currentUser}/> : null}/>
            <Route path="/home/profile/create-post" element={<CreatePost/>} />
            </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*<Route path="/home/profile/edit-profile" element={<EditProfile/>} />*/