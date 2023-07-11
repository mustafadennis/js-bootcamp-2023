import "./Topbar.css";
//@ts-ignore
import LoginIcon from "../../assets/login.png";
//@ts-ignore
import RegisterIcon from "../../assets/register.png";
import Button from "../../reusableComponents/Button/Button";
import { useState } from "react";

const Topbar = () => {
  const [topbarItem, setTopbarItem] = useState("");
  return (
    <div className="Topbar">
      <Button setItem={setTopbarItem} id="topbar-home" text="HOME" />
      <Button setItem={setTopbarItem} id="topbar-products" text="PRODUCTS" />
      <Button
        setItem={setTopbarItem}
        id="topbar-bestSellers"
        text="BEST SELLERS"
      />
      <Button
        setItem={setTopbarItem}
        id="topbar-login"
        buttonColor="blue"
        icon={LoginIcon}
        text="LOGIN"
      />
      <Button
        setItem={setTopbarItem}
        id="topbar-register"
        buttonColor="green"
        icon={RegisterIcon}
        text="REGISTER"
      />
    </div>
  );
};

export default Topbar;
