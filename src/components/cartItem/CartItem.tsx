import "./CartItem.css";
//@ts-ignore
import CartIcon from "../../assets/cart.png";

import Button from "../../reusableComponents/Button/Button";
import { useState } from "react";

interface CartItemProps {
  name: string;
  description?: string;
  price: string;
  img: string;
  id: string;
}

const CartItem = ({ name, description, price, img, id }: CartItemProps) => {
  const [item, setItem]: any = useState("");
  console.log("🚀 ~ item:", item);

  return (
    <div className="CartItem">
      {item === id && (
        <img
          className="CartItemImageCheck"
          src="https://img.icons8.com/?size=512&id=sz8cPVwzLrMP&format=png"
          alt=""
        />
      )}
      <div>
        <h1>{name}</h1>
        <p>{description ? description : "No description..."}</p>
        <p>{price}</p>
      </div>
      <img className="CartItemImage" src={img} alt="" />
      <Button
        setItem={setItem}
        buttonColor="red"
        icon={CartIcon}
        text="ADD TO CART"
        buttonText="green"
        id={id}
      />
    </div>
  );
};

export default CartItem;
