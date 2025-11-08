import React, { useState } from "react";
import QaserrizkImg from "../assets/qaserrizk.png";
import Img47 from "../assets/47.png";
import Img27 from "../assets/27.png";
import Img08 from "../assets/08.png";
import { TiStarFullOutline } from "react-icons/ti";
import { BsCheck2, BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaSnowflake, FaParking, FaConciergeBell, FaTv, FaRegPaperPlane } from "react-icons/fa";
import { IoWifiSharp, IoTimerOutline, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdRestaurant } from "react-icons/io";
import { PiShirtFoldedLight } from "react-icons/pi";
import BackToHotels from "../components/BackToHotels";
import BookingButtons from "../components/BookingButtons";
const QaserRizq = () => {
  const hotelFeatures = ["حوالي15 دقيقة مشيا", "توصيل مجاني للحرم 24 ساعه"];
  const smallImages = [ Img47, Img27, Img08];
  const [modalImg, setModalImg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % smallImages.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + smallImages.length) % smallImages.length);
  return (
    <div className="w-full bg-white py-20">
      <BackToHotels/>
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col-reverse md:flex-row gap-10">
        <div className="w-full flex flex-col gap-4">
          <img
            src={QaserrizkImg}
            className="w-full h-auto max-h-[400px] object-cover rounded-2xl md:mt-20"
          />
         <div className="hidden md:grid grid-cols-2 gap-4">
  {smallImages.map((img, idx) => (
    <img
      key={idx}
      src={img}
      className="w-full h-[245px] object-cover cursor-pointer"
      onClick={() => setModalImg(img)}
    />
  ))}
</div>
<div className="md:hidden w-full h-[245px] relative mt-4">
  <img
    src={smallImages[currentSlide]}
    className="w-full h-full object-cover rounded-2xl"
  />
  <button
    onClick={prevSlide}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-[#D39D19] p-2 rounded-full z-10"
  >
    &#8249;
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-[#D39D19] p-2 rounded-full z-10"
  >
    &#8250;
  </button>
</div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-end gap-6 text-center md:text-right font-[Cairo] mt-8 md:mt-20">
          {/* اسم الفندق */}
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#D39D19]">
            فندق قصر رزق
          </h2>
         <div className="flex items-center gap-3">
  <div className="flex gap-[2px] text-[24px]">
    {Array(5).fill(0).map((_, idx) => (
      <TiStarFullOutline
        key={idx}
        className={`w-[24px] h-[24px] ${idx < 4 ? "text-[#D39D19]" : "text-[#D9D9D9]"}`}
      />
    ))}
  </div>
  <h1 className="text-[20px] text-[#333333] font-medium">فندق 4 نجوم</h1>
</div>
          <div className="border border-yellow-300 rounded-md p-4 w-full max-w-[400px] bg-[#F4F4F4] flex flex-col items-end">
            <ul className="space-y-2 w-full">
              <li className="flex justify-end items-center gap-4 text-[16px] md:text-[18px] lg:text-[20px] text-[#000000]">
                <h1 className="font-medium flex items-center gap-1">
                  مكة المكرمة
                  <FaMapMarkerAlt className="text-[#78AD90] w-[15px] h-[15px]" />
                </h1>
                <h1 className="font-medium">شارع ابراهيم الخليل</h1>
                <BsCheck2 className="text-[#C69B6C] w-[24px] h-[24px]" />
              </li>
              {hotelFeatures.map((text, idx) => (
                <li key={idx} className="flex justify-end items-center gap-2 text-[16px] md:text-[18px] lg:text-[20px] text-[#000000] font-medium">
                  <span>{text}</span>
                  <BsCheck2 className="text-[#C69B6C] w-[24px] h-[24px]" />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col items-center gap-3 mt-4">
            <div className="bg-[#E4C270] w-full max-w-[340px] h-[44px] flex items-center justify-center">
              <p className="text-[#333333] font-bold text-center text-[20px] md:text-[22px] lg:text-[25px]">
                المرافق والخدمات
              </p>
            </div>
            <div className="flex flex-col w-full max-w-[340px] gap-2">
              {[
                { text: "إنترنت واي فاي مجاني", icon: <IoWifiSharp /> },
                { text: "مطعم يقدم بوفيه إفطار وأطباق متنوعة", icon: <IoMdRestaurant /> },
                { text: "خدمات غسيل وكي الملابس", icon: <PiShirtFoldedLight /> },
                { text: "مكيفات هواء في الغرف", icon: <FaSnowflake /> },
                { text: "موقف سيارات مجاني للنزلاء", icon: <FaParking /> },
                { text: "خدمة استقبال على مدار الساعة", icon: <FaConciergeBell /> },
                { text: "مصاعد", icon: <FaRegPaperPlane /> },
                { text: "خدمة تنظيف يومية", icon: <IoTimerOutline /> },
                { text: "تلفاز بشاشة مسطحة", icon: <FaTv /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F8F8] w-full h-[40px] flex items-center justify-between px-4 border-r-4 border-[#E4C270]"
                >
                  <span className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold flex-1 text-center">{item.text}</span>
                  <div className="w-[20px] h-[18px] text-[#D39D19] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
         <BookingButtons/>
        </div>
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <img src={modalImg} className="max-h-[80%] max-w-[80%] object-contain" />
        </div>
      )}
    </div>
  );
};
export default QaserRizq ;
