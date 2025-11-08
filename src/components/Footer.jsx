
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#E0E0E0] py-16 px-6" dir="rtl">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-right items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-right">
          <h3 className="text-[24px] md:text-[28px] font-bold text-yellow-400 mb-2">
            جوهرة العاصمة
          </h3>
          <p className="leading-relaxed max-w-[350px] text-[14px] md:text-[16px] font-medium">
            شركة رائدة في تنظيم رحلات العمرة من الرياض، نوفر خدمات متكاملة وتنقل مريح لضمان رحلة روحانية مميزة.
          </p>
        </div>   
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-[18px] md:text-[20px] font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-[14px] md:text-[16px]">
            <li>
              <a href="#" className="text-white transition-colors duration-200 hover:text-[#D39D19] cursor-pointer">من نحن</a>
            </li>
            <li>
              <a href="#" className="text-white transition-colors duration-200 hover:text-[#D39D19] cursor-pointer">باقات عمرة</a>
            </li>
            <li>
              <a href="#" className="text-white transition-colors duration-200 hover:text-[#D39D19] cursor-pointer">الفنادق</a>
            </li>
            <li>
              <a href="#" className="text-white transition-colors duration-200 hover:text-[#D39D19] cursor-pointer">الرحلات</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-[18px] md:text-[20px] font-bold mb-4">تواصل معنا</h3>
          <div className="flex justify-center md:justify-end items-center gap-2 mb-3 text-[14px] md:text-[16px]">
            <span>0531820079</span>
            <FaPhoneAlt className="text-blue-400" />
          </div>
          <div className="flex justify-center md:justify-end items-center gap-2 mb-3 text-[14px] md:text-[16px]">
            <span>الرياض، المملكة العربية السعودية</span>
            <FaMapMarkerAlt className="text-red-400" />
          </div>
          <div className="flex justify-center md:justify-end items-center gap-2 text-[14px] md:text-[16px]">
            <span>9660535897080</span>
            <FaWhatsapp className="text-green-400" />
          </div>
        </div>
      </div>  
      <div className="text-center text-[12px] md:text-[14px] text-[#E0E0E0] mt-14 border-t border-gray-700 pt-4 leading-[1.8]">
        جوهرة العاصمة - جميع الحقوق محفوظة - 2025
      </div>
    </footer>
  );
}
