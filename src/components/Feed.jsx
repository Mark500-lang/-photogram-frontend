import React, { useState, useEffect } from 'react';
import Post from './Post';
import mockData from '../mockData.js';
import SuggestedUser from './SuggestedUser';
import SuggestedFollows from './SuggestedUser';

// Sample data for suggested users
function Feed() {

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
            {mockData.map((post) => (
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
