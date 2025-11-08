import React, { useState } from 'react';
import { BsCheck2, BsFillTelephoneFill } from "react-icons/bs";
import sectionTwoImg from '/src/assets/section-two-new.png';
import { motion } from "framer-motion";
export default function SectionTree() {
  const [btnActive, setBtnActive] = useState(false);
  return (
    <div className="bg-[#E0DFDF] w-full flex flex-col items-center px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 mt-6 sm:mt-8 md:mt-10 shadow-[0_8px_12px_rgba(0,0,0,0.25)]">
      <div className="w-full md:max-w-[1100px] flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[100px]">
        <div className="relative flex justify-center items-center w-full md:w-[49%] mb-6 md:mb-0">
          <div 
            className="absolute   z-0 rounded-[20px] w-full h-[350px] translate-y-[0px]"
          ></div>
          <motion.img
            src={sectionTwoImg}
            alt="صورة الجانب الأيسر" 
            className="relative z-10 w-full h-[350px] sm:h-[460px] rounded-[20px] translate-y-[0px] object-contain"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="w-full md:w-[49%] flex flex-col items-end text-right space-y-4 mt-6 sm:mt-0">
          <h2 className="text-[22px] sm:text-[36px] md:text-[40px] font-cairo font-bold text-[#30302F] leading-[1.2] mt-6">
            من <span className="text-[#30302F]">نحن</span>؟
          </h2>
          <p className="text-[16px] sm:text-[20px] md:text-[22px] font-cairo text-[#333] leading-[1.8] max-w-full sm:max-w-[440px] text-right mt-4 sm:mt-6">
            <span className="text-[#C8A44C] font-semibold">جوهرة العاصمة</span> لتنظيم رحلات العمرة بخبرة طويلة في خدمة ضيوف الرحمن، نسعى لتقديم تجربة روحانية مريحة ومنظمة من لحظة التسجيل وحتى العودة بسلام
          </p>
          <ul className="space-y-2 text-[14px] sm:text-[18px] text-[#333333] leading-[1.8] mt-2 sm:mt-4">
            {[
              "فنادق قريبة من الحرم",
              "باصات VIP مريحة وحديثة",
              "أسعار تنافسية تناسب الجميع",
              "التزام تام بالمواعيد والدقة في التنظيم",
              "إشراف ومتابعة مستمرة طوال الرحلة"
            ].map((item, idx) => (
              <li key={idx} className="flex flex-row-reverse items-center gap-2">
                <BsCheck2 className="text-[#C69B6C] w-[20px] sm:w-[26px] h-[20px] sm:h-[26px] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 md:mt-16 flex justify-center">
        <a
          href="tel:0531820079"
          onClick={() => setBtnActive(!btnActive)}
          className={`flex items-center justify-center gap-3 w-[260px] sm:w-[290px] h-[50px] sm:h-[60px] text-[18px] sm:text-[20px] font-cairo rounded-[26px] shadow-md transition-all duration-300 ${
            btnActive
              ? "bg-[#D39D19] text-white"
              : "bg-[#C8A44C] text-white hover:bg-[#b39240]"
          }`}
        >
          <span>اتصل بنا</span>
          <BsFillTelephoneFill
            size={20}
            className={`sm:text-[24px] ${btnActive ? "text-white" : "text-white"}`}
          />
        </a>
      </div>

    </div>
  );
};
