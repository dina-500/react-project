import React, { useState } from "react";
import BusImage from "../assets/bus2.png";
import { FaCrown } from "react-icons/fa";
import Img16 from "../assets/16.png";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaBus } from "react-icons/fa";
import Image88 from "../assets/88.png";
import { useNavigate } from "react-router-dom";
import Image3 from "../assets/3.png";
import Image6 from "../assets/6.png";
import Image77 from "../assets/77.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function EconomyDetails() {
  const images = [Image3, Image6, Image77];
  const [current, setCurrent] = useState(0);
  const nextImg = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
const navigate = useNavigate();
const goToVip = () => {
  navigate("/vip-details");
};
  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">
        تفاصيل باصات VIP
      </h1>
      <img src={Image88} alt="VIP Bus" className="w-full h-auto block" />
      <div className="text-center p-6 max-w-xl mx-auto">
        <h2 className="text-[25px] font-semibold mb-4 text-[#000000]">
          اختر نوع المقعد المناسب
        </h2>
        <div
          dir="rtl"
          className="flex flex-col sm:flex-row justify-center text-[#4D4B47] text-[16px] sm:text-[20px] text-center gap-2 sm:gap-6"
        >
          <span className="whitespace-nowrap">نوفر خيارين واضحين:</span>
          <span className="whitespace-nowrap">
            الاقتصادي: 4 صفوف – موديلات 2026/2025 – مقاعد مريحة
          </span>
          <span className="whitespace-nowrap">
            VIP:
            <span dir="ltr" className="inline-block">
              3
            </span>
            صفوف – مقاعد مريحة جداً
          </span>
        </div>
      </div>
      <div className="bg-[#E4C271] p-6 shadow-lg w-full mx-auto text-right font-sans">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#D39D19] rounded-full p-2 text-yellow-600">
              <FaBus className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-[30px] font-semibold text-[#2055DF]">
              باصات اقتصادية
            </h1>
          </div>
          <div
            dir="rtl"
            className="text-[#2055DF] text-[30px] font-semibold mb-3"
          >
            <span> 50 مقعد </span>
            <span className="mx-2">|</span>
            <span>4 صفوف</span>
          </div>
          <p className="text-[#1E1E1E] text-[25px] font-semibold mt-2">
            باصات حديثة بخدمات مميزة
          </p>
        </div>
        <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6 items-start justify-center rounded-xl mt-6">
          <div className="md:w-1/2 w-full flex justify-start">
            <img
              src={Img16}
              alt="باص فاخر"
              className="w-[595px] h-[445px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full text-black p-4 sm:p-6 rounded-lg">
            <ul className="grid grid-cols-1 gap-4 text-right">
              {[
                "مساحة أكبر بنسبة 40% بين المقاعد للراحة القصوى",
                "شاشات فردية تفاعلية مع محتوى ترفيهي متنوع",
                "WiFi مجاني عالي السرعة",
                "إضاءة فردية قابلة للتحكم لكل مقعد",
                "مقاعد جلدية فاخرة قابلة للإمالة مع مساند قدم",
                "خدمة ضيافة راقية مع مشروبات ووجبات خفيفة",
                "لكل مقعد USB مقبس كهربائي ومنافذ",
                "مرافق صحية فاخرة ونظيفة مع مستلزمات مجانية",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row-reverse items-center gap-2 sm:gap-3"
                >
                  <HiOutlineBadgeCheck className="text-white w-[20px] sm:w-[22px] h-[20px] sm:h-[22px]" />
                  <span className="text-[16px] sm:text-[20px] leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-10 mt-6">
          <img src={Image3} alt="وصف الصورة 3" />
          <img src={Image6} alt="وصف الصورة 6" />
          <img src={Image77} alt="وصف الصورة 77" />
        </div>
       <div className="flex md:hidden items-center justify-center mt-6 gap-4">
  <button onClick={prevImg} className="p-2 bg-white rounded-full shadow">
    <FaChevronRight className="text-[#C8A44C] cursor-pointer " />
  </button>
  <img
    src={images[current]}
    alt="صور الباص"
    className="w-[350px] h-[250px] object-cover rounded-lg"
  />
  <button onClick={nextImg} className="p-2 bg-white rounded-full shadow">
    <FaChevronLeft className="text-[#C8A44C] cursor-pointer" />
  </button>
</div>
        <div className="flex justify-center mt-8">
        <button
  onClick={goToVip}
  className="flex items-center cursor-pointer justify-center gap-4 bg-white text-[28px] font-semibold text-blue-600 rounded-[5px] px-8 py-4 text-2xl font-bold hover:shadow-2xl transition-all duration-300 rtl"
  style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.1)" }}
>
            <div className="bg-yellow-500 rounded-full p-3">
              <FaBus className="h-7 w-7 text-white" />
            </div>
            <span> باصات VIP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
