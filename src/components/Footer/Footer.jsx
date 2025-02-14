import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer>
            <div className='w-full h-full mt-[50px] bg-[#0054AE]'>
                <div className='container max-w-[1400px] m-auto  h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-[10px]'>
                    <div className='block text-white p-[10px]'>
                        <h2>КОМПАНИЯ NAG</h2>
                        <br />
                        <a href="#" className='m-[10px] p-[5px]'>О компании</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Новости</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Контакты</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Банковские реквизиты</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Партнеры </a><br />
                    </div>

                    <div className='block text-white p-[10px]'>
                        <h2>ПОДДЕРЖКА </h2>
                        <br />
                        <a href="#" className='m-[10px] p-[5px]'>On-line поддержка</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Условия оплаты</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Условия доставки</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Гарантийное обслуживание </a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Расширенная гарантия </a><br />
                    </div>

                    <div className='block text-white p-[10px]'>
                        <h2>ПРОЕКТЫ  </h2>
                        <br />
                        <a href="#" className='m-[10px] p-[5px]'>snr.systems</a><br />
                        <a href="#" className='m-[10px] p-[5px]'>NAG.conference </a><br />
                        <a href="#" className='m-[10px] p-[5px]'>Конфигураторы </a><br />
                    </div>
                    
                    <div className='block text-white p-[10px]'>
                        <h2>ВАШ ОФИС</h2>
                        <br />
                        <a href="#" className='m-[10px] p-[5px]'>Ташкент</a><br />
                        <a href="tel:998999999999" className='m-[10px] p-[5px]'>+998 999999999 </a><br />
                        <a href="#" className='m-[10px] p-[5px]'>sectortechnology.uz </a><br />
                        <a href="#" className='m-[10px] p-[5px]'> Ташкент, Chilonzor </a><br />
                    </div>

                </div>

                <div className='container max-w-[1400px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-[20px] text-[#c8c8c8]'>
                    <div>
                        <p>© 2022–2025 sectortechnology.uz</p>
                    </div>
                    
                    <div className='flex justify-center'> 
                        <FaInstagramSquare className='mx-[10px] text-[22px]'/>
                        <FaTelegram className='mx-[10px] text-[22px]'/>
                        <FaFacebook className='mx-[10px] text-[22px]'/>
                        <FaYoutube className='mx-[10px] text-[22px]'/>
                    </div>

                    <div className='text-right'>
                        <p>Политика конфиденциальности</p>
                        <p>Политика обработки персональных данных</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;