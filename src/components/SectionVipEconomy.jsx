import { HiMiniCalendar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import towImg from '../assets/tow.png';
import threeImg from '../assets/three-3.png';
export default function SectionVipEconomy() {
  return (
    <div className="bg-[#E0DFDF] min-h-screen p-4 md:p-0 font-sans" dir="rtl">
      <div className="text-center mb-12">
        <p className="text-gray-700 text-lg md:text-xl">اختر ما يناسب ميزانيتك</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6">
        <div className="shadow-md p-4 md:p-6 flex flex-col w-full md:w-[45%] max-w-[653px] h-auto md:h-[900px] relative border-2 border-[#D39D19] rounded-lg">
        <div
  className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-[#D39D19] rounded-[6px] flex items-center justify-center gap-[4px] px-4 py-2 z-10"
>
  <span className="text-white font-bold text-[18px] w-[70px] text-center">VIP</span>
</div>
          <div className="relative mx-auto rounded mt-6">
            <div className="relative h-[200px] md:h-[323px] rounded overflow-visible">
             <motion.img
  src={towImg}
  alt="رحلات عمرة VIP"
  className="w-full h-full object-cover rounded"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>
              <div className="absolute -top-5 right-4 w-[100px] md:w-[120px] h-8 md:h-10 bg-[#D39D19] rounded-[7px] flex items-center justify-center gap-2 px-2 text-sm md:text-base">
                <HiMiniCalendar className="text-white w-5 h-5 md:w-6 md:h-6" />
                <span className="text-white font-bold">  3 أيام</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center mt-4 px-2 md:px-4">
              <h2 className="text-[28px] md:text-[40px] font-bold mb-2 text-[#333333] flex items-center gap-2 justify-center">
                رحلات عمرة <span className="text-[#D39D19]">VIP</span>
              </h2>
              <p className="text-[16px] md:text-[19px] text-[#000000] mb-1">
                تجربة عمرة ميسّرة تشمل كل ما تحتاجه لتؤدي المناسك بسهولة واطمئنان.
              </p>
              <p className="text-[#6C7079] text-sm md:text-base">         
                مكة فقط _ باصات 3 صفوف _ فنادق 5 نجوم
              </p>
            </div>
            <div className="mt-2 px-2 md:px-3 text-right">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[#D39D19] text-sm md:text-base">
                <HiOutlineStar className="text-[#D39D19] w-5 h-5" /> المميزات
              </h3>
              <ul className="text-gray-700 space-y-1 md:space-y-2 mt-[4px] md:mt-[6px] text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> إقامة فندقية فاخرة قريبة من الحرم
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> باصات VIP حديثة ومكيفة للتنقل براحة تامة
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> تنظيم احترافي للبرنامج يضمن الراحة والالتزام بالمواعيد
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> تنظيم يومي للرحلة يضمن الراحة
                </li>
                  <li className="flex items-center gap-2">
    <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> مواعيد الرحلة: الإثنين العودة الأربعاء، الخميس العودة السبت
  </li>
              </ul>
            </div>
          </div>
        <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-auto items-center px-2 md:px-0">
<Link
  to="/Umrah"
  className="bg-[#D39D19] text-[#E0E0E0] text-xl md:text-2xl py-3 md:py-4 rounded-[20px] w-full flex justify-center"
>
  تفاصيل باقات VIP
</Link>
 <a
  href="https://wa.me/9660535897080"

  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1EB361] text-[#E0E0E0] text-xl md:text-2xl py-3 md:py-4 rounded-[20px] w-full flex justify-center"
>
  اتصل بنا واتساب
</a>
</div>
        </div>
        <div className="bg-[#E0DFDF] rounded-lg shadow-md p-4 md:p-6 flex flex-col w-full md:w-[45%] max-w-[653px] h-auto md:h-[900px] relative border-2 border-[#D39D19]">
               <div
  className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-[#D39D19] rounded-[6px] flex items-center justify-center gap-[4px] px-4 py-2 z-10"
>
  <span className="text-white font-bold text-[18px] w-[70px] text-center">الاقتصادية</span>
</div>
          <div className="relative mx-auto rounded mt-6">
            <div className="relative h-[200px] md:h-[323px] rounded overflow-visible">
            <motion.img
  src={threeImg}
  alt="رحلات عمرة اقتصادية"
  className="w-full h-full object-cover rounded"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
/>
              <div className="absolute -top-5 right-4 w-[100px] md:w-[120px] h-8 md:h-10 bg-[#D39D19] rounded-[7px] flex items-center justify-center gap-2 px-2 text-sm md:text-base">
                <HiMiniCalendar className="text-white w-5 h-5 md:w-6 md:h-6" />
                <span className="text-white font-bold">3 أيام</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center mt-4 px-2 md:px-4">
              <h2 className="text-[28px] md:text-[40px] font-bold mb-2 text-[#333333] flex items-center gap-2 justify-center">
                رحلات عمرة <span className="text-[#D39D19]">اقتصادية</span>
              </h2>
              <p className="text-[16px] md:text-[19px] text-[#000000] mb-1">
                رحلة منظمة توفر جميع الخدمات وتضمن راحة المعتمرين أثناء أداء المناسك.
              </p>
              <p className="text-[#6C7079] text-sm md:text-base">
                مكة فقط _ باصات مكيفة _ فنادق 3-4 نجوم
              </p>
            </div>
            <div className="mt-2 px-2 md:px-4 text-right">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[#D39D19] text-sm md:text-base">
                <HiOutlineStar className="text-[#D39D19] w-5 h-5" /> المميزات
              </h3>
              <ul className="text-gray-700 space-y-1 md:space-y-2 mt-[4px] md:mt-[6px] text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> إقامة قريبة من الحرم
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> باصات مكيفة للتنقل براحة تامة
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> تنظيم احترافي للبرنامج يضمن الراحة والالتزام بالمواعيد
                </li>
                <li className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#D39D19] w-5 h-5" /> تنظيم يومي للرحلة يضمن الراحة
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-auto items-center px-2 md:px-0">
 <Link
  to="/Umrah"
  className="bg-[#D39D19] text-[#E0E0E0] text-xl md:text-2xl py-3 md:py-4 rounded-[20px] w-full flex justify-center"
>
     تفاصيل باقات اقتصادية 
</Link>

<a
   href="https://wa.me/9660535897080"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1EB361] text-[#E0E0E0] text-xl md:text-2xl py-3 md:py-4 rounded-[20px] w-full flex justify-center"
>
  اتصل بنا واتساب
</a>
</div>
        </div>

      </div>
    </div>
  );
}
