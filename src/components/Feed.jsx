import React, { useState, useEffect } from 'react';
import Post from './Post';
import SuggestedFollows from './SuggestedFollows';

// Sample data for suggested users
function Feed() {
  const [currentUser, setCurrentUser] = useState([]);

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

  const user = currentUser.map((user) => user.username);
  console.log(user);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/posts");
      const data = await response.json();
      setPosts(data);
      //console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {posts.map((post) => (
              <Post key={post.id} post={post} user={user}/>
            ))}
          </div>
          <div className="col-md-4">
           {<SuggestedFollows /> }
          </div>
        </div>
      </div>
    );
  }



/* function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
 */
export default Feed;
