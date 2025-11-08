import userImg from "../assets/user.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row bg-[#F2F1EF] items-center justify-center text-center p-6 md:p-12 rounded-lg shadow-md relative mt-16 min-h-[360px]">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center z-10 px-4">
        <h2 className="text-[20px] sm:text-[22px] md:text-2xl font-extrabold text-[#333333] leading-relaxed mb-4">
          اعتمر وأنت راضٍ عن رحلتك' لا تحمل هم البحث عن رحلات مريحة بأسعار مميزة
        </h2>

        <p className="text-[#333333] text-[14px] sm:text-[15px] md:text-[15px] font-semibold leading-relaxed max-w-[90%] md:w-[560px] mb-6">
          فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الاختيارات وابتكار أفضل الحلول لتيسير أداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صافٍ وقلب مطمئن ..
          نتمنى لكم رحلة سعيدة وطاعة جدّية
        </p>
<a
   href="https://wa.me/9660535897080"

  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#D39D19] text-[16px] sm:text-[18px] md:text-[20px] text-white w-full sm:w-[280px] md:w-[310px] h-[50px] sm:h-[53px] font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-1 shadow-[0_8px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
>
  احجز رحلتك الآن
  <IoIosArrowDropleftCircle className="text-[20px] sm:text-[22px] text-white" />
</a>
      </div>
      <div className="hidden md:block md:absolute md:right-20 md:top-0 z-0">
        <img
          src={userImg}
          alt="رمز"
          className="w-[420px] h-[360px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
