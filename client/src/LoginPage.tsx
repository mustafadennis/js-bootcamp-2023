import axios from "axios";
import { useEffect, useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    document.cookie = "";
  }, []);

  const handleLoginInput = (e: any) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3005/api/login",
        loginData
      );

      document.cookie = `session_token=${data}`;
      localStorage.setItem("username", loginData.userName);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <label>Username</label>
        <input onChange={handleLoginInput} name="userName" type="text" />
        <label>Password</label>
        <input onChange={handleLoginInput} name="password" type="password" />
        <button onClick={handleSubmit}>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginPage;
