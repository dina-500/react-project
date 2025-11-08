
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function BookingButtons() {
  const whatsappNumber = "9660535897080";
  const whatsappMessage = "السلام عليكم ورحمة الله وبركاته";
  const whatsappLink = () => {
    if (typeof window !== "undefined") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    }
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  };
  return (
    <div
      className="bg-[#F5F5F5] w-full max-w-[370px] p-4 rounded-[18px] flex flex-col gap-3 mt-6 order-last md:order-none"
      style={{ transform: "translateY(11px)", boxShadow: "10px 10px 20px rgba(0,0,0,0.3)" }}
    >
      <h1 className="text-[20px] md:text-[22px] lg:text-[24px] text-center font-bold text-[#333333] border-b border-[#333333] pb-2">
        احجز الآن
      </h1>
      <div className="flex flex-col gap-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white text-center py-2 rounded text-[14px] md:text-[15px] lg:text-[16px] font-semibold hover:bg-green-600 flex items-center justify-center transition-colors duration-200 active:text-yellow-400"
        >
          احجز عبر واتساب
          <IoLogoWhatsapp className="ml-[3px]" />
        </a>
        <a
          href="tel:0531820079"
          className="bg-[#D39D19] text-white text-center py-2 rounded text-[14px] md:text-[15px] lg:text-[16px] font-semibold hover:bg-yellow-500 flex items-center justify-center transition-colors duration-200 active:text-yellow-400"
        >
          اتصل بنا للحجز
          <BsFillTelephoneFill className="ml-[3px]" />
        </a>
      </div>
    </div>
  );
}
