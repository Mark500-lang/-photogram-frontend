import React, { useEffect, useState } from 'react';


function Comment({ comment }) {

  const [currentUser, setCurrentUser] = useState({}); 


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
 

  return (
    <div className="comment">
      <strong>{comment.user.username}:</strong> {comment.comment}
    </div>
  );
}

export default Comment;
