import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
