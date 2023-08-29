import { useEffect, useState } from "react";
import SecretPage from "./SecretPage";
import Login from "./login";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("🚀 ~ document.cookie:", document.cookie);
        const answer = await axios.post(
          "http://localhost:3005/api/verify-session",
          {
            session_token: document.cookie,
            userName: localStorage.getItem("username"),
          }
        );
        console.log("🚀 ~ answer:", answer);
        if (!!answer.data) {
          setIsLoggedIn(true);
        }
        setLoading(false);
      } catch (error) {
        console.log("🚀 ~ error:", error);
        setIsLoggedIn(false);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="App">
      {<Login />}
      {isLoggedIn && <SecretPage />}
    </div>
  );
}

export default App;
