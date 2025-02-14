import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Empty from '../imgs/empty.png'
const Wishes = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleDelete = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    if (!cart.some(item => item.id === product.id)) {
      const updatedCart = [...cart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
        🧡 Sevimli mahsulotlar
      </h1>
      
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <div className="text-center space-y-4">
            <img 
              src={Empty} 
              alt="Empty wishlist" 
              className="w-80 mx-auto mb-6 opacity-75"
            />
            <p className="text-gray-600 text-lg mb-4">
              Sevimlilar ro'yxatingiz hozircha bo'sh 😢
            </p>
            <Link 
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔍 Mahsulotlarni ko'rish
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
            >
              <button 
                onClick={() => handleDelete(product.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/90 rounded-full shadow-sm hover:bg-red-100 transition-colors duration-200"
              >
                <FaTrash className="text-red-500 hover:text-red-700 w-5 h-5" />
              </button>
              
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-gray-800 font-semibold truncate">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-blue-600">
                    {product.price} so'm
                  </p>
                  <span className={`px-2 py-1 text-sm rounded-full ${
                    product.availability === 'Sotuvda mavjud' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.availability}
                  </span>
                </div>

                <button 
  onClick={() => addToCart(product)} 
  className="w-full mt-2 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white py-2 rounded-lg font-medium transition-colors duration-300"
>
  Savatga qo'shish
</button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishes;
