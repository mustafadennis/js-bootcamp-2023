import "./Topbar.css";
//@ts-ignore
import LoginIcon from "../../assets/login.png";
//@ts-ignore
import RegisterIcon from "../../assets/register.png";
import Button from "../../reusableComponents/Button/Button";

const Topbar = () => {
  return (
    <div className="Topbar">
      <Button text="HOME" />
      <Button text="PRODUCTS" />
      <Button text="BEST SELLERS" />
      <Button buttonColor="blue" icon={LoginIcon} text="LOGIN" />
      <Button buttonColor="green" icon={RegisterIcon} text="REGISTER" />
    </div>
  );
};

export default Topbar;
