import React, { useState } from "react";
import BusImage from "../assets/bus2.png";
import { FaCrown, FaBus } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Img11 from "../assets/11.png";
import Img2 from "../assets/2.png";
import Img8 from "../assets/8.png";
import Img19 from "../assets/19.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function VipDetails() {
  const navigate = useNavigate();
 const goToEconomy = () => {
  navigate("/economy-details");
};
  const sliderImgs = [Img2, Img8, Img19];
  const [cur, setCur] = useState(0);
  const nextVip = () => setCur((p) => (p + 1) % sliderImgs.length);
  const prevVip = () => setCur((p) => (p - 1 + sliderImgs.length) % sliderImgs.length);
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">
        تفاصيل باصات VIP
      </h1>
      <img src={BusImage} alt="VIP Bus" className="w-full h-auto block" />
      <div className="text-center p-6 max-w-xl mx-auto">
        <h2 className="text-[25px] font-semibold mb-4 text-[#000000]">
          اختر نوع المقعد المناسب
        </h2>
        <div dir="rtl" className="flex flex-col sm:flex-row justify-center text-[#4D4B47] text-[16px] sm:text-[20px] text-center gap-2 sm:gap-6">
          <span className="whitespace-nowrap">نوفر خيارين واضحين:</span>
          <span className="whitespace-nowrap">الاقتصادي: 4 صفوف – موديلات 2026/2025 – مقاعد مريحة</span>
          <span className="whitespace-nowrap">
            VIP:
            <span dir="ltr" className="inline-block">3</span>
            صفوف – مقاعد مريحة جداً
          </span>
        </div>
      </div>
      <div className="bg-[#E4C271] shadow-lg w-full mx-auto text-right font-sans">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4 pt-6">
            <div className="bg-[#D39D19] rounded-full p-2 text-yellow-600">
              <FaCrown className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-[30px] font-semibold text-[#2055DF]">
              باصات VIP
            </h1>
          </div>
          <div dir="rtl" className="text-[#2055DF] text-[30px] font-semibold mb-3">
            <span> 33 ,32 مقعد </span>
            <span className="mx-2">|</span>
            <span>3 صفوف</span>
          </div>
          <p className="text-[#1E1E1E] text-[25px] font-semibold mt-2">
            باصات حديثة بخدمات مميزة
          </p>
        </div>
        <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6 items-start justify-center rounded-xl mt-6">
          <div className="md:w-1/2 w-full flex justify-start">
            <img src={Img11} alt="باص فاخر" className="w-[595px] h-[445px] object-cover" />
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
                <li key={index} className="flex flex-row-reverse items-center gap-2 sm:gap-3">
                  <HiOutlineBadgeCheck className="text-white w-[20px] sm:w-[22px] h-[20px] sm:h-[22px]" />
                  <span className="text-[16px] sm:text-[20px] leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-10 mt-6">
          {sliderImgs.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
        <div className="flex md:hidden items-center justify-center mt-6 gap-4">
          <button onClick={prevVip} className="p-2 bg-white rounded-full shadow">
            <FaChevronRight className="text-[#C8A44C] cursor-pointer" />
          </button>
          <img src={sliderImgs[cur]} alt="VIP Bus slider" className="w-[350px] h-[250px] object-cover rounded-lg" />
          <button onClick={nextVip} className="p-2 bg-white rounded-full shadow">
            <FaChevronLeft className="text-[#C8A44C] cursor-pointer" />
          </button>
        </div>
        <div className="flex justify-center mt-8 pb-8">
          <button
            onClick={goToEconomy}
            className="flex items-center cursor-pointer justify-center gap-4 bg-white text-[28px] font-semibold text-blue-600 rounded-[5px] px-8 py-4 text-2xl font-bold hover:shadow-2xl transition-all duration-300 rtl"
            style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.1)" }}
          >
            <div className="bg-yellow-500 rounded-full p-3">
              <FaBus className="h-7 w-7 text-white" />
            </div>
            <span> باصات اقتصادية</span>
          </button>
        </div>
      </div>
    </div>
  );
}
