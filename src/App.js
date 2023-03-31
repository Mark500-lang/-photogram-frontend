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
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <BrowserRouter>
      <Routes >
            <Route index path='/' element={<LoginSignup/>}/>
            <Route path="/home" element={<Header/>}>
            <Route index element={<Feed posts={posts}/>}/>
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