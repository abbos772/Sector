import React from 'react';
import ProductCard from './ProductCart';

const ProductList = ({ selectedTab, products, addToWishlist, addToCart, searchQuery }) => {
  const filteredProducts = products[selectedTab]?.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToWishlist={addToWishlist} addToCart={addToCart} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">Ничего не найдено</p>
      )}
    </div>
  );
};

export default ProductList;
