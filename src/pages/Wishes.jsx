import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sevimli mahsulotlar</h1>
      {wishlist.length === 0 ? (
        <>
          <p className="mb-4">Hozircha savatingiz bo'sh</p>
          <Link 
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Xaridni davom ettirish
          </Link>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map(product => (
            <div key={product.id} className="rounded-2xl shadow-lg bg-white p-4 relative">
              <button 
                onClick={() => handleDelete(product.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <FaTrash size={20} />
              </button>
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600">{product.price}</p>
              <p className="text-sm text-gray-600">{product.availability}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishes;