
import { FaBusAlt } from 'react-icons/fa'; 
import Grid from "../components/Grid";
import { useNavigate } from "react-router-dom";
export default function Buses() {
    const navigate = useNavigate();
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="p-6 sm:p-8 rounded-xl mx-auto text-center space-y-6 mt-[100px] max-w-4xl">
        <button className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-[#333333] font-semibold py-2 px-4 sm:px-6 rounded-[10px] transition mx-auto text-sm sm:text-base">
          باصات للعمرة
          <FaBusAlt /> 
        </button>
        <h1 className="font-extrabold text-[28px] sm:text-[35px] text-[#D39D19]">
          باصات مريحة وآمنة
        </h1>
       <p className="text-gray-800 font-medium text-[18px] sm:text-[25px] text-center mx-auto">
         نوفّر باصات حديثة ومكيفة تضمن لكم رحلة مريحة وآمنة من الرياض إلى مكة المكرمة
       </p>
        <section className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <button
            className="w-full sm:w-[300px] h-[50px] bg-[#E0E0E0] cursor-pointer text-[#D39D19] text-[16px] sm:text-[18px] font-bold py-2 sm:py-3 rounded-[6px] hover:bg-yellow-500 transition shadow-[3px_3px_6px_rgba(0,0,0,0.2)]"
            onClick={() => navigate("/vip-details")}
          >
            VIP تفاصيل باصات
          </button>
          <button
            className="w-full sm:w-[300px] h-[50px] bg-[#E0E0E0] cursor-pointer text-[#D39D19] text-[16px] sm:text-[18px] font-bold py-2 sm:py-3 rounded-[6px] hover:bg-yellow-500 transition shadow-[3px_3px_6px_rgba(0,0,0,0.2)]"
            onClick={() => navigate("/economy-details")}
          >
            تفاصيل باصات اقتصادية
          </button>
        </section>
      </div>
      <div className="mt-10">
        <Grid imageSize={3}/> 
      </div>

    </div>
  );
}
