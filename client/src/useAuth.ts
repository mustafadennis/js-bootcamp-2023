// useAuth.js
import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (token: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const answer = await axios.post(
          "http://localhost:3005/api/check-auth",
          {
            session_token: token,
            userName: localStorage.getItem("username"),
          }
        );
        console.log("🚀 ~ answer:", answer);
        setIsLoggedIn(true);
        setLoading(false);
      } catch (error) {
        console.log("🚀 ~ error:", error);
        setIsLoggedIn(false);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isLoggedIn, loading };
};

export default useAuth;
