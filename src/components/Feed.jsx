import React, { useState, useEffect } from 'react';
import Post from './Post';
import SuggestedFollows from './SuggestedUser';

// Sample data for suggested users
function Feed() {
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

    const suggestedUsers = [
    {
      id: 1,
      username: 'antidode',
      profile_picture: 'assets/img/img3.jpg',
    },
    {
      id: 2,
      username: 'whoputthemuffinsinthefreezer',
      profile_picture: 'assets/img/img4.jpg',
    },
    {
      id: 3,
      username: 'mynamesjeff',
      profile_picture: 'assets/img/img5.jpg',
    }
  ];


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <div className="col-md-4">
            <SuggestedFollows users={suggestedUsers} />
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
