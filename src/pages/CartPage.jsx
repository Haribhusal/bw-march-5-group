import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
  console.log(cartItemsCount);
  return <div>{cartItemsCount}</div>;
};

export default CartPage;
