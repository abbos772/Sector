import React from "react";
import brandsimg1 from '../imgs/brandsimg1.png'
import brandsimg2 from '../imgs/brandsimg2.png'
import brandsimg3 from '../imgs/brandsimg3.png'
import brandsimg4 from '../imgs/brandsimg4.png'
import brandsimg5 from '../imgs/brandsimg5.png'

const brands = [
  { name: "SNR", logo: brandsimg1},
  { name: "OMNY", logo:  brandsimg2},
  { name: "HUAWEI", logo:  brandsimg3},
  { name: "ALPHA MILE", logo: brandsimg4},
  { name: "POWER TONE", logo:  brandsimg5},
];

const Brands = () => {
  return (
    <div className="py-8 container m-auto pt-[100px] p-[10px]">
      <h2 className="text-[25px] sm:text-[32px] font-bold mb-4">Популярные бренды</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center gap-4 justify-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center m-auto w-[200px] h-[100px]"
          >
            <img src={brand.logo} alt={brand.name} className="max-h-full" />
          </div>
        ))}
        <a
          href="#"
          className="text-blue-500 font-semibold flex p-4 items-center rounded-lg gap-1 m-auto hover:underline w-[200px] h-[100px] bg-white shadow-md"
        >
          Все бренды →
        </a>
      </div>
    </div>
  );
};

export default Brands;
