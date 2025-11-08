import background from '../assets/background.jpg';
import logo from '../assets/logo.png';
import { FaWhatsapp } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Main() {
  return (
    <div className="relative w-screen min-h-screen box-border overflow-hidden">
     
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-5 md:p-10">
<div className="max-w-[1249px] w-full bg-white/10 backdrop-blur-md rounded-[20px] md:rounded-[41px] text-center pt-10 pb-10 px-5 md:p-10 flex flex-col md:flex-row items-center justify-between relative">
          <div className="flex-1 flex flex-col items-center md:items-start relative">

         <div className="flex flex-col md:flex-row-reverse items-center gap-3 w-full justify-center md:justify-center">
  <img 
    src={logo} 
    alt="Logo" 
    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover md:ml-5"
  />
  <div className="flex flex-col items-center">
   <h2 className="text-[25px] sm:text-[28px] md:text-[45px] font-cairo font-bold md:font-medium text-[#D39D19]">
  جوهرة العاصمة
</h2>
    <p className="text-[28px] sm:text-[20px] md:text-[33px] font-cairo font-normal text-white">
      لتنظيم رحلات العمرة من الرياض
    </p>
  </div>
</div>
            <p className="text-[16px] sm:text-[20px] md:text-[33px] font-cairo font-normal mt-4 text-[#E0E0E0]">
              نُيسر لك رحلة العمرة بخدمات راقية وتنظيم متكامل، لتؤدي مناسكك براحة وطمأنينة
            </p>
<div className="hidden md:flex w-full mt-6 items-center justify-center gap-4 md:gap-10">
  <a 
    href="tel:0531820079"
    className="flex items-center justify-center gap-2 bg-[#C8A44C] w-[160px] h-[60px] rounded-[20px] text-white px-4 py-2 font-cairo font-bold text-[16px] hover:bg-green-700 transition-colors duration-300"
  >
    <BsFillTelephoneFill size={20} />
    اتصل بنا
  </a>
  <a 
    href="https://wa.me/9660535897080"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-[#1EB361] w-[260px] h-[60px] rounded-[20px] text-white px-4 py-2 font-cairo font-bold text-[16px] hover:bg-blue-700 transition-colors duration-300"
  >
    تواصل معنا عبر الواتساب
    <FaWhatsapp size={20} />
  </a>
</div>
          </div>
        </div>
      </div>
 <a
  href="tel:0531820079"
  className="fixed bottom-5 left-5 w-14 h-14 sm:w-20 sm:h-20 bg-[#2055DF] rounded-full z-20 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
>
  <BsFillTelephoneFill className="text-white w-8 h-8 sm:w-10 sm:h-10" />
</a>
<a
  href="https://wa.me/9660535897080"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full z-20 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
>
  <IoLogoWhatsapp className="text-[#1EB361] w-9 h-9 sm:w-12 sm:h-12" />
</a>
    </div>
  );
}
