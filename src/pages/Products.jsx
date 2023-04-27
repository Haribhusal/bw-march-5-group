import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem, addThisItem } from "../features/cartSlice";
import products from "./../product.json";

const Products = () => {
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div className="grid myProducts grid-cols-3 grid-rows-3 gap-10 p-10">
      {products.length !== 0 ? (
        products.map((item) => (
          <article className="bg-gray-200 p-4 w-full border-[1px] border-gray-500  rounded-md">
            <h3>{item.title}</h3>
            <span>Rs. 450</span>
            <button
              onClick={() => dispatch(addCartItem(5))}
              className="block bg-blue-600 text-white px-3 py-2 rounded"
            >
              Add To Cart
            </button>
          </article>
        ))
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default Products;
