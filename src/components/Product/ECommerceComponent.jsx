import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const productTabs = ['Рекомендуем', 'Новинки', 'Акции', 'Товары со скидкой', 'Популярное'];

const products = {
  'Рекомендуем': [
    { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: 'path/to/img1.png', isNew: true },
    { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 4 шт', image: 'path/to/img2.png', isNew: true }
  ],
  'Новинки': [
    { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: 'path/to/img1.png', isNew: true }
  ]
};

const ECommerceComponent = () => {
  const [selectedTab, setSelectedTab] = useState('Рекомендуем');
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!existingCart.some(item => item.id === product.id)) {
      localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    }
  };

  const addToWishlist = (product) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!existingWishlist.some(item => item.id === product.id)) {
      localStorage.setItem('wishlist', JSON.stringify([...existingWishlist, product]));
    }
  };

  return (
    <div className="container max-w-[1420px] mx-auto grid grid-cols-12 gap-4 p-[10px]">
      <aside className="col-span-12 lg:col-span-3">
        <Sidebar />
      </aside>
      <main className="col-span-12 lg:col-span-9">
        <div className="mb-4 flex space-x-4 overflow-x-auto">
          {productTabs.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-800'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ProductList selectedTab={selectedTab} products={products} addToWishlist={addToWishlist} addToCart={addToCart} searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default ECommerceComponent;
