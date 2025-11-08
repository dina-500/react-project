import fourImg from '../assets/four-4.png';
import fourImg1 from '../assets/four-4-1.png';
import fourImg2 from '../assets/four-4-2.png';
import fourImg3 from '../assets/four-4-3.png';
import fiveImg from '../assets/five.png';
import fiveImg1 from '../assets/five-5-1.png';
import fiveImg2 from '../assets/five-5-2.png';
import fiveImg3 from '../assets/five-5-3.png';
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function Dina() {
  return (
    <div className="bg-[#EDEDED] w-full py-20 px-4 font-[Cairo]" dir="rtl">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="bg-[#D39D19] text-[#333333] px-3 py-1 text-[19px] font-medium rounded-md">
            فنادق العمرة
          </span>
        </div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-[#D3AA3A] font-extrabold">
          فنادقنا المختارة لراحة المعتمرين
        </h2>
        <p className="text-[#3E3939] text-[16px] sm:text-[18px] mt-3 font-medium max-w-[90%] md:max-w-[700px] mx-auto">
          اخترنا لكم مجموعة من أفضل الفنادق القريبة من الحرم لتجربة إقامة مريحة وممتعة طوال رحلتكم.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
        <div className="relative bg-white rounded-[20px] shadow-md overflow-hidden flex-1 max-w-[480px] border border-[#D3AA3A] mx-auto md:mx-0">
          <div className="absolute top-0 right-0 rounded-bl-[16px] px-4 py-1 text-white font-semibold bg-[#F0B525]">
            VIP
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal text-[#010B3E] mb-3 text-center">
              فندق أم مكة من ميلينيوم
            </h3>
            <div className="text-[#010B3E] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-semibold flex flex-col gap-2">
              <p className="text-right">فندق خمس نجوم</p>
              <p className="text-right">شارع إبراهيم الخليل حوالي 17 دقيقة مشيًا</p>
              <p className="text-right">توصيل مجاني للحرم 24 ساعة</p>
            </div>
            <img
              src={fourImg}
              alt="فندق أم مكة"
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover rounded-[10px] mt-4"
            />
            <div className="flex gap-2 mt-3">
              <img src={fourImg1} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
              <img src={fourImg2} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
              <img src={fourImg3} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/umm-makkah"
                className="bg-[#D3AA3A] text-white text-[16px] sm:text-[17px] md:text-lg py-3 rounded-[10px] font-semibold flex justify-center items-center gap-1"
              >
                <IoIosArrowDropleftCircle className="text-[20px] sm:text-[22px] text-white" />
                عرض التفاصيل
              </Link>
              <Link
                to="/hotels"
                className="bg-[#303030] text-white text-[16px] sm:text-[17px] md:text-lg py-3 rounded-[10px] font-semibold flex justify-center items-center gap-1"
              >
                <IoIosArrowDropleftCircle className="text-[20px] sm:text-[22px] text-white" />
                عرض جميع الفنادق
              </Link>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-[20px] shadow-md overflow-hidden flex-1 max-w-[480px] border border-[#D3AA3A] mx-auto md:mx-0">
          <div className="absolute top-0 right-0 rounded-bl-[16px] px-4 py-1 text-white font-semibold bg-[#F0B525]">
            اقتصادية
          </div>

          <div className="p-6 flex flex-col">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal text-[#010B3E] mb-3 text-center">
              فندق موطن لمار
            </h3>
            <div className="text-[#010B3E] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-semibold flex flex-col gap-2">
              <p className="text-right">فندق ثلاث نجوم</p>
              <p className="text-right">شارع إبراهيم الخليل حوالي 15 دقيقة مشيًا</p>
              <p className="text-right">توصيل مجاني للحرم 24 ساعة</p>
            </div>
            <img
              src={fiveImg}
              alt="فندق موطن"
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover rounded-[10px] mt-4"
            />
            <div className="flex gap-2 mt-3">
              <img src={fiveImg1} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
              <img src={fiveImg2} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
              <img src={fiveImg3} className="w-1/3 h-[70px] sm:h-[75px] md:h-[80px] object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/motan-lamar"
                className="bg-[#D3AA3A] text-white text-[16px] sm:text-[17px] md:text-lg py-3 rounded-[10px] font-semibold flex justify-center items-center gap-1"
              >
                <IoIosArrowDropleftCircle className="text-[20px] sm:text-[22px] text-white" />
                عرض التفاصيل
              </Link>
              <Link
                to="/hotels"
                className="bg-[#303030] text-white text-[16px] sm:text-[17px] md:text-lg py-3 rounded-[10px] font-semibold flex justify-center items-center gap-1"
              >
                <IoIosArrowDropleftCircle className="text-[20px] sm:text-[22px] text-white" />
                عرض جميع الفنادق
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
