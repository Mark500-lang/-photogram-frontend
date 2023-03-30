import React, { createContext, useState, useEffect } from "react";

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch the current user from your API or authentication service
    // Replace this with your own API call
    const fetchCurrentUser = async () => {
      try {
        // Fetch the current user from your API
        const response = await fetch("http://localhost:3000/current_user");
        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
