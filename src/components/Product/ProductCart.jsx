import React from 'react';
import { FaCopy, FaRegHeart } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";

const ProductCard = ({ product, addToWishlist, addToCart }) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white relative">
      <img src={product.image} alt={product.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
      <h3 className="text-sm font-semibold mb-1 px-[10px]">{product.title}</h3>
      <p className="text-blue-600 mb-1 px-[10px]">{product.availability}</p>
      <p className="text-lg font-bold mb-2 px-[10px]">{product.price}</p>
      <div className="flex gap-5 mt-2 p-[10px]">
        <button onClick={() => addToCart(product)} className="text-gray-500 text-[23px] hover:text-blue-600"><BsCartPlusFill /></button>
        <button className="text-gray-500 text-[23px] hover:text-blue-500"><FaCopy /></button>
        <button onClick={() => addToWishlist(product)} className="text-gray-500 text-[23px] hover:text-red-500"><FaRegHeart /></button>
        <button className="text-gray-500 text-[23px] hover:text-blue-600"><AiOutlineBarChart /></button>
      </div>
    </div>
  );
};

export default ProductCard;
