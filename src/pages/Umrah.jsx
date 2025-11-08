import towImg from '../assets/tow.png';
import threeImg from '../assets/three-3.png';
import umarhImg from '../assets/umarh.png';
import umrah1Img from '../assets/umrah-1.png';
import { HiMiniCalendar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import SectionOmrah from '../components/SectionOmrah';
export default function Umrah() {
  const packages = [
  {
  img: towImg,
  days: "   ايام    7  ",
  title: "VIP",
  description: "تجربة عمرة ميسّرة تشمل كل ما تحتاجه لتؤدي المناسك بسهولة واطمئنان",
  details: "مكة فقط _ باصات 3 صفوف _ فنادق 5 نجوم",
  borderColor: "#D39D19",
},
    {
      img: threeImg,
      days: "3 أيام",
      title: "اقتصادية",
      description: "رحلة منظمة توفر جميع الخدمات وتضمن راحة المعتمرين أثناء أداء المناسك",
      details: "مكة فقط _باصات مكيفة _3-4 نجوم",
      borderColor: "#D39D19",
      tagBg: "bg-purple-600",
    },
    {
      img: umarhImg,
      days: "10 أيام",
      title: "VIP",
      description: "تجربة عمرة ميسّرة تشمل كل ما تحتاجه لتؤدي المناسك بسهولة واطمئنان",
      details: "مكة فقط _ باصات 3 صفوف _ فنادق 5 نجوم",
      borderColor: "#D39D19",
      tagBg: "bg-green-600",
    },
    {
      img: umrah1Img,
      days: "5 أيام",
      title: "اقتصادية",
      description: "رحلة منظمة توفر جميع الخدمات وتضمن راحة المعتمرين أثناء أداء المناسك",
      details: "مكة فقط _ باصات مكيفة _ فنادق 3-4 نجوم",
      borderColor: "#D39D19",
      tagBg: "bg-purple-600",
    },
  ];
  return (
    <div className="w-full bg-white flex flex-col items-center text-center py-10 px-4 sm:px-6 lg:px-12">
       <SectionOmrah bgColor="#ffffff" />
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px] w-full max-w-[1250px] justify-center px-[32px] sm:px-0">
        {packages.map((pkg, index) => (
          <Card key={index} {...pkg} />
        ))}
      </div>

    </div>
  );
}
function Card({ img, days, title, description, details, borderColor, tagBg }) {
  return (
    <div
      className="relative flex flex-col bg-white shadow-lg rounded-xl border-2 w-full mb-[20px]"
      style={{ borderColor }}
    >
     <div
  className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-[#D39D19]   rounded-[6px] flex items-center justify-center gap-[4px] px-4 py-2 z-10"
>
  <span className="text-white font-bold  text-[22px] w-[100px] h-[25px]">{title}</span>
</div>
   <div className="h-[200px] sm:h-[240px] lg:h-[260px] rounded-t-xl overflow-hidden relative">
  <img src={img} alt={title} className="w-full h-full object-cover" />
 <div
  className="absolute -top-2 right-3 w-[85px] h-[30px] bg-[#D39D19] rounded-md
  flex items-center justify-center gap-1 px-2 flex-row-reverse"
>
  <HiMiniCalendar className="text-white w-4 h-4" />
  <span className="text-white font-bold text-[13px]">{days}</span>
</div>
</div>
      <div className="flex flex-col items-center text-center px-3 py-4 space-y-2">
        <h2 className="text-[16px] sm:text-[20px] font-bold text-[#333333]">
          رحلات عمرة <span className="text-[#D39D19]">{title}</span>
        </h2>
        <p className="text-[12px] sm:text-[14px] text-[#000000] leading-[1.6]">
          {description}
        </p>
        <p className="text-[11px] sm:text-[13px] text-[#6C7079] leading-[1.6]">
          {details}
        </p>
      </div>
<div className="px-3 pb-4 text-right">
  <h3 className="flex items-center justify-end gap-2 font-semibold text-[#D39D19] mb-2 text-[14px]">
    <HiOutlineStar className="w-5 h-5" /> المميزات
  </h3>
  <ul className="text-[#000000] space-y-2 text-[12px] sm:text-[14px] leading-[1.6]">
    <li className="flex flex-row-reverse items-center gap-2">
      <LuShieldCheck className="w-5 h-5 text-[#D39D19]" /> إقامة فندقية فاخرة قريبة من الحرم
    </li>
    <li className="flex flex-row-reverse items-center gap-2">
      <LuShieldCheck className="w-5 h-5 text-[#D39D19]" /> باصات VIP حديثة ومكيفة للتنقل براحة تامة
    </li>
    <li className="flex flex-row-reverse items-center gap-2">
      <LuShieldCheck className="w-5 h-5 text-[#D39D19]" /> تنظيم احترافي للبرنامج يضمن الراحة والالتزام بالمواعيد
    </li>
    <li className="flex flex-row-reverse items-center gap-2">
      <LuShieldCheck className="w-5 h-5 text-[#D39D19]" /> تنظيم يومي للرحلة يضمن الراحة
    </li>
  </ul>
</div>
      <div className="flex justify-center pb-6">
<a
   href="https://wa.me/9660535897080"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1EB361] text-white text-[14px] sm:text-[16px] py-2 px-5 rounded-xl w-[90%] sm:w-[220px] flex items-center justify-center hover:bg-green-600 transition"
>
  تواصل معنا للحجز
</a>
      </div>
    </div>
  );
}
