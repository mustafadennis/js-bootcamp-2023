import Topbar from "../../components/Topbar/Topbar";
import Cart from "../../components/cart/Cart";
import "./HomePage.css";

// RULE NUMBER 2 => PAGE SHOULD RETURN ONLY COMPONENTS

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Cart />
    </>
  );
};

export default HomePage;
