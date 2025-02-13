


import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Percent, MessageSquare, BarChart3, AlignJustify, X,  } from "lucide-react";
import { Link } from 'react-router-dom';
import flag from '../imgs/flag-uzb.png';
import logo from '../../public/logo.png';

function Navbar({ onSearch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    onSearch(query); // Qidiruv matnini yuqoriga yuborish
    setSearchQuery(query);
  };

  // console.log("Navbar Props:", { onSearch });
  return (
    <>
    
      <header className="bg-blue-700 text-white text-sm py-2 text-center">
        Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, <a href="#" className="underline">авторизуйтесь</a>
      </header>
      <div className='shadow-sm w-full'>
        <div className="p-4 container m-auto">
          <div className="flex items-center justify-between">
            <div className='flex'>
              <img src={logo} alt="Sector Technology" className="h-8" />
              <div className="relative md:flex w-[100%] md:w-[500px] mx-[20px]">
                {/* <input type="text" placeholder="Введите поисковый запрос" className="bg-gray-100 p-2 w-full rounded-md" /> */}
                <input 
                  type="text" 
                  placeholder="Введите поисковый запрос" 
                  className="bg-gray-100 p-2 w-full rounded-md" 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute right-2 top-2 text-blue-800 " />
              </div>
            </div>
            <div className='hidden md:flex grid-cols-5 gap-2'>
              <a href='#'>
                <Percent className="w-5 h-5" /><label className='hidden lg:flex'>Акции</label>
              </a>
              
              <a className=' cursor-pointer' href='#'>
              <Link to={'/wishes'}>
               <Heart className="w-5 h-5" /><label className='hidden lg:flex  cursor-pointer'>Избранное</label>
               </Link>
              </a>
              <a href='#'>
                <BarChart3 className="w-5 h-5" /><label className='hidden lg:flex'>Сравнить</label>
              </a>
              <a href='#'>
                <User className="w-5 h-5" /><label className='hidden lg:flex'>Кабинет</label>
              </a>
              <a href='#'>
                <Link to={'/cart'}>
                <ShoppingCart className="w-5 h-5" /><label className=' cursor-pointer hidden lg:flex'>Корзина</label>
                </Link>
              </a>
            </div>
            <button className='md:hidden' onClick={() => setIsModalOpen(true)}>
              <AlignJustify className='w-6 h-6' />
            </button>
          </div>
        </div>

        <hr className='text-gray-200 w-full' />

        <nav className="container m-auto p-4 flex justify-between text-sm">
          <div className="flex items-center space-x-4">
            <select name="" id="" className="bg-blue-600 text-white flex p-[5px] rounded-md items-center">
              <option value="">Каталог товаров</option>
              <option value="">Видеокамеры</option>
              <option value="">Модули SFP</option>
              <option value="">FTTH/FTTx</option>
              <option value="">Маршрутизаторы</option>

            </select>
            {/* <button className="bg-blue-600 text-white flex p-[5px] rounded-md items-center">
              <AlignJustify className='mx-[5px]' />
              Каталог товаров
            </button> */}
            <span className="flex items-center">
              <img src={flag} alt="flag" className="h-4 w-6 mr-1" /> Ташкент
            </span>
            <span>+9999999999</span>
          </div>
          <div className="space-x-4 hidden md:flex items-center">
            <a href="#">Покупателям</a>
            <a href="#">Услуги</a>
            <a href="#about">О нас</a>
            <a href="#" className='flex items-center'>
              <MessageSquare className='w-4 h-4' /> Онлайн чат
            </a>
          </div>
        </nav>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#76767688] bg-opacity-50  items-center z-60">
          <div className="bg-white p-6 rounded-lg w-full">
            <button className="float-right" onClick={() => setIsModalOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-4">
              <a href='#'><Percent className="w-5 h-5 inline" /> Акции</a>
              <a href='#'><Heart className="w-5 h-5 inline" /> Избранное</a>
              <a href='#'><BarChart3 className="w-5 h-5 inline" /> Сравнить</a>
              <a href='#'><User className="w-5 h-5 inline" /> Кабинет</a>
              <a href='#'><ShoppingCart className="w-5 h-5 inline" /> Корзина</a>
              <a href="#">Покупателям</a>
              <a href="#">Услуги</a>
              <a href="#">О нас</a>
              <a href="#" className='flex items-center'>
                <MessageSquare className='w-4 h-4' /> Онлайн чат
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;


