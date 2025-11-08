import busImage from '../assets/bus.png';
import { Link } from "react-router-dom";
export default function BusSection() {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] flex flex-col items-center text-center overflow-hidden mt-16">
      <img
        src={busImage}
        alt="Bus"
        className="absolute w-full h-full object-cover top-0 left-0"
      />
      <div className="absolute inset-0 bg-black/29"></div>
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 mt-[80px] md:mt-[100px] lg:mt-[120px]">
        {/* الكلمة باللون الأبيض */}
      <h1 className="text-[#333333] text-[30px] md:text-[44px] font-extrabold">
           باصات مريحة وامنه
</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white max-w-[90%] md:max-w-[700px] lg:max-w-[900px] mt-1">
          نوفّر باصات حديثة ومكيفة تضمن لكم رحلة مريحة وآمنة من الرياض إلى مكة المكرمة
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 mt-4">
<div className="flex flex-col gap-3 sm:gap-4 mt-4 items-center">
  <Link
    to="/vip-details"
    className="bg-[#E0E0E0] w-[90%] sm:w-[350px] h-[50px] sm:h-[60px] text-[#D39D19] font-bold px-4 sm:px-6 text-base sm:text-lg rounded-[18px] shadow-lg hover:bg-yellow-600 hover:text-white transition flex items-center justify-center whitespace-nowrap"
  >
    VIP تفاصيل باصات
  </Link>
  <Link
    to="/economy-details"
    className="bg-[#E0E0E0] w-[90%] sm:w-[350px] h-[50px] sm:h-[60px] text-[#D39D19] font-bold px-4 sm:px-6 text-base sm:text-lg rounded-[18px] shadow-lg hover:bg-yellow-600 hover:text-white transition flex items-center justify-center whitespace-nowrap"
  >
    تفاصيل باصات اقتصادية
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

