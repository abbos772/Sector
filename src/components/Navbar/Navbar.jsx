
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Percent, MessageSquare, BarChart3, AlignJustify, X,  } from "lucide-react";
import { Link } from 'react-router-dom';
import flag from '../../imgs/flag-uzb.png';
import logo from '../../../public/logo.png';
import { GoBookmark } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useTranslation } from "react-i18next";
function Navbar({ onSearch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    console.log("Selected Language:", lang);
    i18n.changeLanguage(lang);
  };


  const handleSearchChange = (e) => {
    const query = e.target.value;
    onSearch(query); 
    setSearchQuery(query);
  };

  return (
    <>
    
      <header className=" bg-[#0054AE] text-white text-sm py-2 text-center">
        Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, <a href="#" className="underline">авторизуйтесь</a>
      </header>
      <div className='shadow-sm w-full'>
        <div className="p-4 container m-auto max-w-[1420px]">
          <div className="flex items-center justify-between gap-12">
            <div className='flex gap-5 w-full'>
            <Link to={"/"}>
            <img src={logo} alt="Sector Technology" className="h-8" />
            </Link>
              <div className="relative w-full ">
                <input 
                  type="text" 
                  placeholder="Поиск..." 
                  className="bg-gray-100 p-2 w-full rounded-md outline-0 border-0  " 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute right-2 top-2 text-blue-800 " />
              </div>
            </div>
            <div className='hidden md:flex grid-cols-5 gap-4'>
              <a className=' flex  items-center flex-col cursor-pointer' href='#'>
                <Percent className="w-4 h-4" />
                <label className=' text-[14px] hidden lg:flex'>Акции</label>
              </a>
              <Link to={'/wishes'}>
              <a className=' flex  items-center flex-col cursor-pointer' href='#'>
              <GoBookmark  className="w-4 h-4" />
               
               <label className=' text-[14px] hidden lg:flex'>Избранное</label>
              </a>
              </Link>
              <a className='flex  items-center flex-col cursor-pointer' href='#'>
                <BarChart3 className="w-4 h-4" /><label className=' text-[14px] hidden lg:flex'>Сравнить</label>
              </a>
              <a className='flex  items-center flex-col cursor-pointer' href='#'>
                <User className="w-4 h-4" /><label className=' text-[14px] hidden lg:flex'>Кабинет</label>
              </a>
              <Link to={'/cart'}>
              <a className='flex  items-center flex-col cursor-pointer' href='#'>
                
                <ShoppingCart className="w-4 h-4" /><label className=' text-[14px] cursor-pointer hidden lg:flex'>Корзина</label>
              
              </a>
              </Link>
            </div>
            <button className='md:hidden' onClick={() => setIsModalOpen(true)}>
              <AlignJustify className='w-6 h-6' />
            </button>
          </div>
        </div>

        <hr className='text-gray-200 w-full' />

        <nav className="container  max-w-[1420px] m-auto p-4 flex justify-between text-sm">
          <div className="flex items-center space-x-4">
            
         

<div className="relative inline-block">
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-[16px]">
    <RxHamburgerMenu />
  </div>
  <select className="bg-[#0054AE] text-white pl-8 p-[6px] rounded-[9px] h-[38px] border-0 outline-0">
    <option value="">Каталог товаров</option>
    <option value="">Видеокамеры</option>
    <option value="">Модули SFP</option>
    <option value="">FTTH/FTTx</option>
    <option value="">Маршрутизаторы</option>
  </select>
</div>

            
            <span className="flex items-center">
              <img src={flag} alt="flag" className="h-4 w-6 mr-1" /> Ташкент
            </span>
            <span className='hidden sm:block'>+998-88-088-09-30</span>
          </div>
          <div className="space-x-4 hidden md:flex items-center gap-7">
            <a href="#">Покупателям</a>
            <a href="#">Услуги</a>
            <a href="#about">О нас</a>
            <a href="#" className='flex items-center'>
             Онлайн чат
            </a>
          </div>
        </nav>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-[#00000088] items-center z-660">
    <div className=" bg-blue-100 h-[100vh] flex items-center pt-10 flex-col gap-5 rounded-lg w-full">
      <button className="float-right" onClick={() => setIsModalOpen(false)}>
        <X className="w-6 h-6" />
      </button>
      <div className="flex gap-3 flex-col space-y-4 mt-4">
        <a className='flex items-center justify-center gap-1 cursor-pointer' href='#'>
          <Percent className="w-4 h-4" />
          <label className='text-[14px] lg:flex'>Акции</label>
        </a>
        <Link to={'/wishes'} onClick={() => setIsModalOpen(false)}>
          <a className='flex items-center justify-center gap-1 cursor-pointer' href='#'>
            <GoBookmark className="w-4 h-4" />
            <label className='text-[14px] lg:flex'>Избранное</label>
          </a>
        </Link>
        <a className='flex items-center justify-center gap-1 cursor-pointer' href='#'>
          <BarChart3 className="w-4 h-4" />
          <label className='text-[14px] lg:flex'>Сравнить</label>
        </a>
        <a className='flex items-center justify-center gap-1 cursor-pointer' href='#'>
          <User className="w-4 h-4" />
          <label className='text-[14px] lg:flex'>Кабинет</label>
        </a>
        <Link to={'/cart'} onClick={() => setIsModalOpen(false)}>
          <a className='flex items-center justify-center gap-1 cursor-pointer' href='#'>
            <ShoppingCart className="w-4 h-4" />
            <label className='text-[14px] cursor-pointer lg:flex'>Корзина</label>
          </a>
        </Link>
        <a href="#" onClick={() => setIsModalOpen(false)}>Покупателям</a>
        <a href="#" onClick={() => setIsModalOpen(false)}>Услуги</a>
        <a href="#about" onClick={() => setIsModalOpen(false)}>О нас</a>
        <a href="#" className='flex items-center' onClick={() => setIsModalOpen(false)}>
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


