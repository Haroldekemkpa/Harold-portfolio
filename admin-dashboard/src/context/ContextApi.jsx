import React from "react";
import { createContext, useState, useEffect } from "react";

// create context
export const CommentContextAPI = createContext();

//  Create provider component

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [hires, setHires] = useState([]);
  const [hiresErrors, setHiresErrors] = useState(null);
  //   const [refresh, setRefresh] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/comments`);

      if (!response.ok) {
        throw new Error(`Error fetching comments: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      setComments(result.testimonials);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchHires = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/hires`);

      if (!response.ok) {
        throw new Error(`Error fertiching comments: ${response.status}`);
      }
      const results = await response.json();
      console.log(results);
      setHires(results.hires);
    } catch (error) {
      setError(error.nessage);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  //

  useEffect(() => {
    fetchHires();
    const interval = setInterval(fetchHires, 2000);
  }, []);
  //
  //

  return (
    <CommentContextAPI.Provider
      value={{
        comments,
        error,
        hires,
      }}
    >
      {children}
    </CommentContextAPI.Provider>
  );
};
