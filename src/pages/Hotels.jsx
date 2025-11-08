import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbClock } from "react-icons/tb";
import M1Img from "../assets/m-1.png";
import UmmMakkahImg from "../assets/ummmakkah.png";
import TifhImg from "../assets/tifh.png";
import Img8749 from "../assets/8749.png";
import PalsImg from "../assets/pals.png";
import Img47 from "../assets/47.png";
export default function Hotels() {
  const navigate = useNavigate();
  const hotelsData = [
    {
      img: UmmMakkahImg,
      name: "فندق ام مكه من ميلينيوم",
      desc: "فندق راقي بالقرب من الحرم مع غرف مريحة، مكيفات، واي فاي وخدمة استقبال على مدار الساعة",
      distance: "حوالي 700 متر",
      time: "حوالي 17 دقيقة مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+2 للمزيد", "مكيفات هواء", "واي فاي مجانا", "خدمة استقبال على مدار الساعة"],
      link: "/umm-makkah"
    },
  
    {
      img: PalsImg,
      name: "فندق فلسطين",
      desc: "إقامة مريحة للعائلات مع غرف مجهزة، واي فاي مجاني وخدمة نقل سهلة إلى الحرم",
      distance: "حوالي 700 متر",
      time: "حوالي 10 دقائق مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+3 للمزيد", "بدون توصيل مجانا", "مطعم", "واي فاي مجاني"],
      link: "/falasteen"
    },
      {
      img: M1Img,
      name: "فندق فوكو",
      desc: "فندق فاخر عصري بمرافق كاملة وموقع مثالي قريب من الحرم مع مطعم وخدمة توصيل مجانية",
      distance: "حوالي 1200 متر",
      time: "حوالي 12 دقيقة مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+3 للمزيد", "توصيل مجانا", "مطعم", "واي فاي مجاني"],
      link: "/voco"
    },
    {
      img: TifhImg,
      name: "فندق ضيافة الرجاء",
      desc: "غرف فسيحة وأنيقة مع تلفاز وخدمة استقبال متاحة على مدار الساعة، وموقع مناسب للوصول للحرم",
      distance: "حوالي 700 متر",
      time: "حوالي 10 دقائق مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+3 للمزيد", "بدون توصيل مجانا", "مطعم", "تلفاز بشاشة مسطحة"],
      link: "/diyafah-rajaa"
    },
    {
      img: Img47,
      name: "فندق قصر رزق",
      desc: "فندق فخم بالقرب من الحرم مع غرف مكيفة، خدمة تنظيف يومية ومرافق متكاملة للراحة والفخامة",
      distance: "حوالي 600 متر",
      time: "حوالي 15 دقيقة مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+3 للمزيد", "مطعم", "مكيفات هواء", "خدمة تنظيف يومية"],
      link: "/qaserrizq"
    },
    {
      img: Img8749,
      name: "فندق موطن لمار",
      desc: "فندق فاخر من فئة الخمس نجوم يتميّز بمرافق عصرية متكاملة، وموقع مثالي مع خدمة نقل مجانية إلى الحرم",
      distance: "حوالي 700 متر",
      time: "حوالي 15 دقائق مشيًا",
      street: "شارع ابراهيم الخليل",
      tags: ["+2 للمزيد", "توصيل مجانا", "مطعم", "خدمة استقبال على مدار الساعة"],
      link: "/motan-lamar"
    }
  ];
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-[140px] pb-20 px-4 sm:px-6 md:px-9">
     <h1 className="text-[24px] md:text-[30px] font-extrabold text-[#D39D19] mb-10 text-center">
  جميع الفنادق
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1400px] gap-6">
        {hotelsData.map((hotel, index) => (
          <div
            key={index}
            className="bg-white shadow-[8px_8px_25px_rgba(211,157,25,0.35)] overflow-hidden flex flex-col text-right rounded-lg"
          >
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-full h-48 sm:h-56  md:h-60 object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
          <h2 className="text-[18px] md:text-[24px] lg:text-[26px] font-bold text-[#D39D19]">
  {hotel.name}
</h2>
             <p className="text-gray-700 text-[12px] md:text-[13px] lg:text-[14px]">
  {hotel.desc}
</p>
              <div className="flex flex-wrap justify-end gap-3 text-[#915657] text-sm">
                <div className="flex items-center gap-[2px]">
                  {hotel.distance} <TbClock className="text-gray-400" />
                </div>
                <div className="flex items-center gap-[2px]">
                  {hotel.time} <TbClock className="text-gray-400" />
                </div>
                <div className="flex items-center gap-[2px]">
                  {hotel.street} <FaMapMarkerAlt className="text-[#78AD90]" />
                </div>
              </div>
              <div className="flex flex-wrap justify-end gap-2 mt-2">
                {hotel.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => navigate(hotel.link)}
                className="w-full bg-[#D39D19] text-white font-bold py-2 rounded mt-2 flex justify-center"
              >
                عرض تفاصيل الفندق
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
