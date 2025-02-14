import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoBookmark } from 'react-icons/go';
import { BarChart3, Percent, MessageSquare } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Banner from './Banner/Banner';
import Categories from './Category/Category';
import Brands from './Brands/Brands';
import Products from './Product/Products';
import About from './About/About';
import Footer from './Footer/Footer';
import logo from '../../public/logo.png';
import uz from '../imgs/flag-uzb.png';
import ru from '../imgs/flag-ru.png';

const Home = () => {
  const { t, i18n } = useTranslation();  // i18n hook
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    console.log("Selected Language:", lang);
    i18n.changeLanguage(lang);  // Ensure this is changing the language
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='relative'>
        {/* Sidebar */}
        <div className={`fixed top-1/2 -translate-y-1/2 p-4 z-50 right-0 h-[70vh] w-[60px] bg-white shadow-2xl rounded-tl-3xl rounded-bl-3xl transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center`}>
          <div className="flex flex-col items-center h-full justify-between">
            <div className="flex flex-col items-center gap-8">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain mb-4" />
              <div className="flex flex-col gap-6">
                {/* Language Switch Buttons */}
                <button onClick={() => changeLanguage('uz')} className="flex flex-col items-center group">
                  <img src={uz} alt="Uzbek" className="w-8 h-8 rounded-full shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xs mt-1 text-gray-600 font-medium">UZB</span>
                </button>
                <button onClick={() => changeLanguage('ru')} className="flex flex-col items-center group">
                  <img src={ru} alt="Russian" className="w-8 h-8 rounded-full shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xs mt-1 text-gray-600 font-medium">RUS</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Link to='/wishes'>
                <button className="p-2 hover:bg-blue-50 rounded-full group">
                  <GoBookmark className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </button>
              </Link>
              <button className="p-2 hover:bg-blue-50 rounded-full group">
                <BarChart3 className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
              <button className="p-2 hover:bg-blue-50 rounded-full group">
                <Percent className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
              <button className="p-2 hover:bg-blue-50 rounded-full group">
                <MessageSquare className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Toggle Sidebar Button */}
        <button
          className={`fixed z-50 top-1/2 -translate-y-1/2 cursor-pointer right-[0px] transform bg-blue-600 hover:bg-blue-700 text-white rounded-l-2xl p-4 shadow-xl transition-all duration-500 ${isOpen ? "right-[60px]" : "translate-x-0"}`}
          onClick={toggleSidebar}
          style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          <span className="text-xl font-bold transition-transform">
            {isOpen ? "←" : "→"}
          </span>
        </button>
      </div>

      <Banner />
      <Categories />
      <Brands />
      <Products />
      <About />
      <Footer />
    </>
  );
};

export default Home;
