import React from 'react';
import mainImg from '../assets/main.png'; 
import roomImg from '../assets/room.png';       
import receptionImg from '../assets/reception.png'; 
import bedImg from '../assets/bed.png';    
import { MdLocationOn } from "react-icons/md";
import { TbHomeFilled } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function HotelCard() {
  const images = [roomImg, receptionImg, bedImg];

  return (
    <div className="max-w-sm sm:max-w-4xl mx-auto border-2 border-[#D39D19] bg-[#F9F4F4] shadow-md rounded-xl overflow-hidden font-[Cairo] p-2 sm:p-4">
      <div className="bg-[#36BD73] text-white w-[120px] sm:w-[200px] h-[40px] sm:h-[60px] flex items-center justify-center gap-1 text-sm shadow-md ml-3 sm:ml-6 mt-3 rounded-md">
        <span className='text-[14px] sm:text-[20px] leading-none'>الأكثر اختيـاراً</span>
        <span className='text-[18px] sm:text-[26px] leading-none'>★</span>
      </div>

      <h2 className="text-center text-[22px] sm:text-[40px] font-extrabold text-[#D39D19] mt-2">فندق فوکو</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center text-[#333333] text-sm sm:text-base gap-2 sm:gap-4 mt-2 mb-2 font-medium">
        <span className="flex items-center gap-1">
          فندق خمس نجوم
          <TiStarFullOutline className='text-[16px] sm:text-[20px] text-[#D39D19]' />
        </span>
        <span className="flex items-center gap-1">
          شارع إبراهيم الخليل حوالي 1200 متر
          <MdLocationOn className='text-[16px] sm:text-[20px] text-[#D39D19]'/></span>
        <span className="flex items-center gap-1">
          توصيل مجاني للحرم 24 ساعة
          <TbHomeFilled className='text-[16px] sm:text-[20px] text-[#D39D19]' />
        </span>
      </div>

      <img src={mainImg} alt="فندق فوکو" className="w-full h-[18rem] sm:h-[24rem] object-cover rounded-md" />

      <div className="overflow-hidden relative h-[100px] mt-2 mb-3 px-2">
        <div className="flex animate-marquee gap-2 absolute">
          {images.concat(images).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`صورة ${idx+1}`}
              className="w-[140px] h-[90px] sm:w-[180px] sm:h-[120px] md:w-[220px] md:h-[140px] object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 px-2 pb-3">
        <Link
          to="/voco"
          className="bg-[#D39D19] text-white w-full sm:w-[320px] h-[44px] sm:h-[50px] flex items-center justify-center hover:bg-yellow-800 transition text-[15px] sm:text-[20px] font-semibold rounded-md"
        >
          عرض التفاصيل
        </Link>

        <Link
          to="/hotels"
          className="bg-[#D39D19] text-white w-full sm:w-[320px] h-[44px] sm:h-[50px] flex items-center justify-center hover:bg-yellow-800 transition text-[15px] sm:text-[20px] font-semibold rounded-md"
        >
          اطلع على كل الفنادق
        </Link>
      </div>
    </div>
  );
}
