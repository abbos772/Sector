
import React, { useState } from 'react';
import productsimg1 from '../../imgs/productsimg1.png';
import productsimg2 from '../../imgs/productsimg2.png';
import { FaCopy } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoMdTime } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { TbBoxMultiple } from 'react-icons/tb';
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs"; 
import { GoBookmark } from 'react-icons/go';
import { FaBookmark } from "react-icons/fa"; 
const news = [
  { id: 1, title: 'Новая серия сварочных аппаратов SNR-FS-60x уже на складе', date: '18 апреля 2024 г.' },
  { id: 2, title: 'Читайте статью: Что такое PoE и для чего он нужен?', date: '29 марта 2024 г.' },
];

const projects = [
  { id: 1, title: 'Snr.systems' },
  { id: 2, title: 'Конфигураторы' }
];

const works = [
  { id:1, title: 'Способы оплаты'},
  { id:2, title: 'Условия доставки'},
  { id:3, title: 'Гарантийное обслуживание'},
  { id:4, title: 'Возврат товара'},
  { id:5, title: 'Вопросы и ответы'},
  { id:6, title: 'Техническая поддержка'},
  { id:7, title: 'База знаний'},
  { id:8, title: 'Конфигураторы '},
]

const productTabs = [
  'Рекомендуем',
  'Новинки',
  'Акции',
  'Товары со скидкой',
  'Популярное'
];

const products = {
  'Рекомендуем': [
    { id: 1, title: 'Витая пара FTP кат.5Е, 4 пары,серый ПВХ, бухта 305м, для внутренней прокладки,экранированный', dec:'FTP4CAT5e PVC-2414',  price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
    { id: 2, title: 'Грозозащита Ethernet Грозозащита Ethernet SNR-SPNet-BP1131-IP65', dec:'SNR-SPNet-BP1131-IP65', price: '258 599 сум', availability: 'В наличии: 4 шт', image: productsimg2, isNew: true },
    { id: 11, title: 'Витая пара FTP кат.5Е, 4 пары,серый ПВХ, бухта 305м, для внутренней прокладки,экранированный', dec:'FTP4CAT5e PVC-2414' , price: '400 599 сум', availability: 'В наличии: 3 шт', image: productsimg1, isNew: true },
    { id: 12, title: 'Грозозащита Ethernet Грозозащита Ethernet SNR-SPNet-BP1131-IP65',dec:'SNR-SPNet-BP1131-IP65' ,price: '550 599 сум', availability: 'В наличии: 8 шт', image: productsimg2, isNew: true },
    { id: 13, title: 'Витая пара FTP кат.5Е, 4 пары,серый ПВХ, бухта 305м, для внутренней прокладки,экранированный',dec:'SNR-SPNet-BP1131-IP65', price: '203 599 сум', availability: 'В наличии: 3 шт', image: productsimg1, isNew: true },
    { id: 14, title: 'Грозозащита Ethernet Грозозащита Ethernet SNR-SPNet-BP1131-IP65',dec:'SNR-SPNet-BP1131-IP65', price: '50 599 сум', availability: 'В наличии: 30 шт', image: productsimg2, isNew: true },
    { id: 15, title: 'Витая пара FTP кат.5Е, 4 пары,серый ПВХ, бухта 305м, для внутренней прокладки,экранированный', dec:'SNR-SPNet-BP1131-IP65' ,price: '990 599 сум', availability: 'В наличии: 44 шт', image: productsimg1, isNew: true },
    { id: 16, title: 'Грозозащита Ethernet Грозозащита Ethernet SNR-SPNet-BP1131-IP65',dec:'SNR-SPNet-BP1131-IP65', price: '770 599 сум', availability: 'В наличии: 9 шт', image: productsimg2, isNew: true },
  ],
  'Новинки': [
    { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: productsimg1, isNew: true },
    { id: 4, title: 'Новинка 2', price: '550 000 сум', availability: 'В наличии: 2 шт', image: productsimg2, isNew: true }
  ],
  'Акции': [
    { id: 5, title: 'Акция 1', price: '700 000 сум', availability: 'В наличии: 2 шт', image: productsimg2 }
  ],
  'Товары со скидкой': [
    { id: 6, title: 'Скидка 1', price: '300 000 сум', availability: 'В наличии: 8 шт', image: productsimg1 }
  ],
  'Популярное': [
    { id: 7, title: 'Популярный товар', price: '1 200 000 сум', availability: 'В наличии: 4 шт', image: productsimg2 },
    { id: 8, title: 'Популярный товар', price: '2 300 000 сум', availability: 'В наличии: 4 шт', image: productsimg1 }
  ]
};

const Sidebar = () => {
  return (
    <div className="space-y-6 flex flex-col">
      <div className="bg-white shadow-md  p-4 border-b-[#004B9C] border-b-4">
        <h2 className="text-2xl  mb-3 text-[#555555] font-medium ">Новости</h2>
        {news.map(item => (
          <div key={item.id} className="mb-6">
            <p className="text-sm text-gray-800">{item.title}</p>
            <p className="text-xs text-[#A3A3A3] mt-3 flex items-center gap-1"> <IoMdTime /> {item.date}</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md mt-[50px] p-4 border-b-[#004B9C] border-b-4">
        <h2 className="text-2xl text-[#555555] font-medium mb-3">Наши проекты</h2>
        <ul className="list-disc ml-1 flex flex-col gap-4">
          {projects.map(item => (
            <li key={item.id} className="flex items-center gap-1 text-[#333333] text-sm hover:text-blue-500">
              <MdChevronRight /> 
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md mt-[50px] p-4 border-b-[#004B9C] border-b-4">
        <h2 className="text-2xl font-medium mb-3 text-[#555555] ">Как мы работаем</h2>
        <ul className="list-disc ml-1 flex flex-col gap-4">
          {works.map(item => (
            <li key={item.id} className=" flex  items-center gap-1 text-sm  text-[#333333] hover:text-blue-500">
              <MdChevronRight />
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToWishlist, addToCart, isWishlisted, isInCart }) => {
  return (
    <div className="h-max-[300px] rounded-[7px] p-3 border-[#F5F5F5] border-2 bg-white">
      <img src={product.image} alt={product.title} className="w-full h-[234px] object-cover mb-4" />
      <div className='flex flex-col justify-between gap-3'>
        <div className='flex justify-between'>
          <h3 className="text-sm font-normal leading-[18px] mb-1 text-[#3B3B3B]">{product.title}</h3>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-[#929292] text-[12px]'>{product.dec}</p>
            <p className="text-blue-500 mb-1">{product.availability}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-2 items-center justify-between">
          <p className="text-[#3B3B3B] text-[18px] font-medium text-lg mb-2">{product.price}</p>

          <button 
            onClick={() => addToWishlist(product)} 
            className={`text-[20px] ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
          >
             
            {isWishlisted ? <FaBookmark className='text-[17px]'/> : <GoBookmark className='text-[20px]' />}
          </button>
          <button className="text-gray-500 text-[23px] hover:text-blue-600"><AiOutlineBarChart /></button>
          <div className='cursor-pointer w-[38px] h-[38px] bg-[#F5F5F5] rounded-full flex items-center justify-center'>
            <button 
              onClick={() => addToCart(product)} 
              className="text-gray-500 text-[16px] hover:text-blue-600"
            >
              {isInCart ? <BsFillCartCheckFill className='text-green-500' /> : <BsCartPlusFill className='cursor-pointer w-[18px] h-[18px]' />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductList = ({ selectedTab, addToWishlist, addToCart, searchQuery, wishlist, cart }) => {
  const filteredProducts = products[selectedTab]?.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())  
  );

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToWishlist={addToWishlist} 
            addToCart={addToCart}
            isWishlisted={wishlist.some(item => item.id === product.id)}
            isInCart={cart.some(item => item.id === product.id)}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">Ничего не найдено</p> 
      )}
    </div>
  );
};

const ECommerceComponent = () => {
  const [selectedTab, setSelectedTab] = useState('Рекомендуем');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const addToCart = (product) => {
    const updatedCart = cart.some(item => item.id === product.id)
      ? cart.filter(item => item.id !== product.id) 
      : [...cart, product]; 

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToWishlist = (product) => {
    const updatedWishlist = wishlist.some(item => item.id === product.id)
      ? wishlist.filter(item => item.id !== product.id) 
      : [...wishlist, product]; 

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container max-w-[1420px] mx-auto grid grid-cols-12 gap-4 p-[10px]">
      <aside className="col-span-12 lg:col-span-3">
        <Sidebar />
      </aside>
      <main className="col-span-12 lg:col-span-9">
        <div className='rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.07),0px_4px_5px_0px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.04)] bg-white p-4'>
          <div className="mb-4 pl-5 pt-3 flex space-x-4 overflow-x-auto">
            {productTabs.map(tab => (
              <button
                key={tab}
                className={`w-[180px] border-0 pb-3 ${
                  selectedTab === tab ? 'text-blue-500 border-b-3 border-blue-500' : 'border-0'
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <ProductList 
            selectedTab={selectedTab} 
            addToWishlist={addToWishlist} 
            addToCart={addToCart} 
            searchQuery={searchQuery}  
            wishlist={wishlist}
            cart={cart}
          />
        </div>
      </main>
    </div>
  );
};

export default ECommerceComponent;


