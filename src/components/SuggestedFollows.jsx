import React, { useState, useEffect } from "react";
import "./SuggestedFollows.css";


function SuggestedFollows({ users }) {
  const [userData, setUserData] = useState([]);
  const [followStatus, setFollowStatus] = useState({});
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(users => {
        setUserData(users.slice(0, 6)); // limit suggestions to first 6 users
        console.log(userData)
        setFollowStatus(
          users.reduce((acc, user) => {
            acc[user.id] = false;
            return acc;
          }, {})
        );
      });
  }, []);

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



  //const currentUserArray = Object.entries(currentUser).map(([key, value]) => ({ [key]: value }));
  //console.log(currentUserArray)
  

  const toggleFollow = (userId) => {
    setFollowStatus((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
  <div className="suggested-follows bg-dark text-white">
    <div className="d-flex align-items-center mb-3">
      {currentUser && currentUser.map((user) => (
      <div className="d-flex align-items-center">

        <img
          className="profile-picture rounded-circle me-3"
          src={user.profile_pic}
          alt={user.username}
        />
        <p>{user.username}</p>
      </div>

      ))}
    </div>
    <br/>

    <h5 className="mb-0">Suggested for you</h5>
    <br/>


      <ul className="list-unstyled">
        {userData.map((user) => (
          
          <li key={user.id} className="d-flex align-items-center mb-2">
            <div className="d-flex align-items-center">
              <img
                className="profile-picture"
                src={user.profile_pic}
                alt={user.username}
              />
              <p className="mb-0 ms-3">{user.username}</p>
            </div>
            <button
              type="button"
              className={`btn btn-${followStatus[user.id] ? "outline-light" : "light" } btn-sm ms-4`} // move button a pixel in front of name
              onClick={() => toggleFollow(user.id)}
            >
              {followStatus[user.id] ? "Following" : "Follow"}
            </button>
          </li>
        ))}
        {/* {userData.length > 6 && (
          <li className="text-center">
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => setUserData(users)}
            ><p>See all</p>
            </button>
          </li>
        )} */}
      </ul>
    </div>
    </div>
  );
}

export default SuggestedFollows;
