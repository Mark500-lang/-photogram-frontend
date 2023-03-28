import React, { useState, useEffect } from 'react';
import Post from './Post';


import mockData from './mockData';

function Feed() {
  return (
    <div className="feed">
      {mockData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
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
