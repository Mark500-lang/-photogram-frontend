import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./components/UserContext";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import EditProfile from "./components/EditProfile";
import Search from "./components/Search";
import Feed from "./components/Feed";
import LoginSignup from "./components/login/LoginSignup";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [followingCount, setFollowingCount] = useState(213); // Replace 213 with the initial number of following users

  const handleFollow = (isFollowing) => {
    setFollowingCount((prevCount) => prevCount + (isFollowing ? 1 : -1));
  };

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
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginSignup />} />
          <Route path="/home" element={<Header />}>
            <Route index element={<Feed posts={posts} onFollow={handleFollow} />} />
            <Route path="/home/search" element={<Search />} />
            <Route path="/home/profile" element={<Profile followingCount={followingCount} />} />
            <Route path="/home/profile/create-post" element={<CreatePost />} />
            <Route
              path="/home/profile/edit-profile"
              element={<EditProfile />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
