import React from "react";
import categoryimg1 from '../../imgs/categoryimg1.png'
import categoryimg2 from '../../imgs/categoryimg2.png'
import categoryimg3 from '../../imgs/categoryimg3.png'
import categoryimg4 from '../../imgs/categoryimg4.png'
import categoryimg5 from '../../imgs/categoryimg5.png'
import categoryimg6 from '../../imgs/categoryimg6.png'
import categoryimg7 from '../../imgs/categoryimg7.png'
import categoryimg8 from '../../imgs/categoryimg8.png'
import categoryimg9 from '../../imgs/categoryimg9.png'
import categoryimg10 from '../../imgs/categoryimg10.jpg'
import categoryimg11 from '../../imgs/categoryimg11.png'
import categoryimg12 from '../../imgs/categoryimg12.png'
import bg from '../../imgs/bg1.png'


const categories = [
    { name: "Фиксированные коммутаторы", items: 784, image: categoryimg1 },
    { name: "On-line ИБП (UPS)", items: 63, image: categoryimg2 },
    { name: "IP Видеокамеры", items: 99, image: categoryimg3 },
    { name: "Оптический кабел FTTH/FTTx", items: 24, image: categoryimg4 },
    { name: "Сварочные аппараты для оптоволокна", items: 21, image: categoryimg5 },
    { name: "Стоечные серверы", items: 97, image: categoryimg6 },
    { name: "Маршрутизаторы для корпоративныx клиентов", items: 121, image: categoryimg7 },
    { name: "Модули SFP", items: 156, image: categoryimg8 },
    { name: "Патч-корды оптические", items: 265, image: categoryimg9 },
    { name: "Телекоммуникационные настенные шкафы", items: 43, image: categoryimg10 },
    { name: "Автоматизация и мониторинг", items: 109, image: categoryimg11 },
    { name: "Смотреть веськаталог", items: 7812, image: categoryimg12 }
  ];

const Categories = () => {
  return (
    <>
    <div className="container max-w-[1420px] m-auto  pt-[50px] p-[10px]">
      <h2 className="text-[25px] sm:text-[32px] font-bold mb-6">Популярные категории</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((category, index) => (
          <div key={index} className=" h-auto bg-white rounded-lg shadow p-4 flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute bottom-0 left-0 top-0 w-[70%] h-[90%] opacity-50">
              <img src={bg} alt="bg" className="object-cover" />
            </div>
            <div className="absolute top-0 left-0 ">
              <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
            </div>
            <p className=" z-10 text-lg font-semibold pt-[100px]">{category.name}</p>
            <p className="text-gray-500 ">{category.items} товаров</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Categories;
