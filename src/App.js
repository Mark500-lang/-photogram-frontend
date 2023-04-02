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
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/logged_user", {
      method: 'GET',
      credentials: 'include'
    }).then((response) => {
      if (response.ok) {
        response.json().then((userdata) => console.log(userdata));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes >
            <Route index path='/' element={<LoginSignup/>}/>
            <Route path="/home" element={<Header/>}>
            <Route path="/home/feed" element={<Feed/>}/>
            <Route path='/home/search' element={<Search/>}/>
            <Route path='/home/profile' element={<Profile/>}/>
            <Route path="/home/profile/create-post" element={<CreatePost/>} />
            </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*<Route path="/home/profile/edit-profile" element={<EditProfile/>} />*/