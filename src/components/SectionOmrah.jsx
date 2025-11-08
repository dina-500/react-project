export default function SectionOmrah({ bgColor }) {
  return (
    <div
      className="w-full mt-[20px] sm:mt-2 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: bgColor || "#E0DFDF" }}
    >
      <div className="flex flex-col items-center justify-center py-10 sm:py-12 md:py-16">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold text-[#333333]">
          باقات العمرة المتنوعة
        </h1>
        <h2 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold mt-2 text-[#C8A44C]">
          اختر ما يناسب ميزانيتك
        </h2>
        <p className="mt-4 text-[14px] sm:text-[20px] md:text-[28px] lg:text-[32px] text-[#5C5555] font-semibold leading-relaxed max-w-full sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1255px]">
          اختر من بين باقات العمرة المصممة خصيصاً لتلبية احتياجاتك الروحانية والمالية
          <span className="block mt-2">رحلات يومية من الرياض بأفضل الأسعار</span>
        </p>
      </div>
    </div>
  );
}
