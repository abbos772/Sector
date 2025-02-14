import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import Empty from '../imgs/empty.png'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
        🛒 Savatingiz ({cartItems.length})
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <div className="text-center space-y-4">
            <img 
              src={Empty} 
              alt="Empty cart" 
              className="w-80 mx-auto mb-6 opacity-75"
            />
            <p className="text-gray-600 text-lg mb-4">
              Savatingiz hozircha bo'sh 😢
            </p>
            <Link 
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛍️ Xaridni davom ettirish
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map(product => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
              >
                <button 
                  onClick={() => handleRemove(product.id)}
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

                <div className="p-4 space-y-3">
                  <h3 className="text-gray-800 font-semibold truncate">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-blue-600">
                      {product.price.toLocaleString()} so'm
                    </p>
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      product.availability === 'Sotuvda mavjud' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.availability}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaMinus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="text-lg font-medium w-8 text-center">
                        1{product.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaPlus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <p className="text-gray-700 font-medium">
                      Jami: {(product.price * product.quantity).toLocaleString()} so'm
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Umumiy summa:
                </h3>
                <p className="text-gray-600 mt-1">
                  {cartItems.length} ta mahsulot
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">
                  {calculateTotal().toLocaleString()} so'm
                </p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                  Buyurtma berish →
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;