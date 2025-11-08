import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackToHotels = ({ className }) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-10 mt-[20px] ${className || ""}`}>
      <Link
        to="/hotels"
        className="flex items-center gap-1 text-[#D39D19] font-bold text-[16px] md:text-[18px] lg:text-[18px] hover:text-[#B37A10] translate-y-[10px]"
      >
        <AiOutlineArrowLeft className="w-5 h-5" />
        العودة للفنادق
      </Link>
    </div>
  );
};

export default BackToHotels;
