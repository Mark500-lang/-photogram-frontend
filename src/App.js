import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import LoginSignup from './components/login/LoginSignup';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import EditProfile from './components/EditProfile';
import Search from './components/Search';
import Feed from './components/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes >
            <Route path="/" element={<Header/>}>
            <Route path='/search' element={<Search/>}/>
            <Route index element={<Feed/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/profile/create-post" element={<CreatePost/>} />
            <Route path="/profile/edit-profile" element={<EditProfile/>} />
            </Route >
          </Routes>
    </BrowserRouter>
  );
}

export default App;
/*LoginSignup*/