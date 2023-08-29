import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  console.log("🚀 ~ userData:", userData);

  const handleLoginInput = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/login",
        userData
      );

      document.cookie = `session_token=${response.data}`;
      localStorage.setItem("username", userData.userName);
      window.location.reload();
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

  return (
    <div>
      <p>USERNAME:</p>
      <input onChange={handleLoginInput} name="userName" type="text" />
      <p>PASSWORD:</p>
      <input onChange={handleLoginInput} name="password" type="password" />
      <br />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Login;
