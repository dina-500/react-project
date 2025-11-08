
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "/about" },
  { label: "باقات عمرة", to: "/umrah" },
  { label: "الفنادق", to: "/hotels" },
  { label: "الباصات", to: "/buses" },
  { label: "اتصل بنا", to: "tel:0531820079" },
  { label: "مواعيدنا", to: "#" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].label);
  const [modalOpen, setModalOpen] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link.label);
    setMenuOpen(false);
    if (link.label === "مواعيدنا") {
      setModalOpen(true);
    }
  };
  return (
    <>
      <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 relative">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] rounded-full object-cover order-1"
          />
         <ul
  className={`flex flex-col md:flex-row-reverse justify-center md:justify-center gap-8 text-[20px] tracking-[2px] font-semibold
    absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent
    overflow-hidden transition-all duration-300 ease-in-out md:order-2
    ${menuOpen ? "max-h-[500px] p-6" : "max-h-0 md:max-h-full"}`}
>
            {navLinks.map((link) => {
              const isCall = link.label === "اتصل بنا";
              const isModal = link.label === "مواعيدنا";
              const isActive = activeLink === link.label;

              if (isCall) {
                return (
                  <li
                    key={link.label}
                    className="relative"
                    style={{
                      backgroundColor: isActive ? "#D39D19" : "white",
                      borderRadius: 5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <a
                      href={link.to}
                      className="relative z-10 px-4 py-2 inline-block"
                      style={{
                        color: isActive ? "white" : "#D39D19",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }

              if (isModal) {
                return (
                  <li
                    key={link.label}
                    className="relative"
                    style={{
                      backgroundColor: isActive ? "#D39D19" : "white",
                      borderRadius: 5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <button
                      className="relative z-10 px-4 py-2 inline-block text-[#D39D19]"
                      style={{
                        color: isActive ? "white" : "#D39D19",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              }
              return (
                <li
                  key={link.label}
                  className="relative"
                  style={{
                    backgroundColor: isActive ? "#D39D19" : "white",
                    borderRadius: 5,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Link
                    to={link.to}
                    className="relative z-10 px-4 py-2 inline-block text-[#D39D19]"
                    style={{
                      color: isActive ? "white" : "#D39D19",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className="md:hidden text-[#D39D19] text-3xl z-50 order-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 text-center max-w-sm mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#D39D19]">مواعيد الرحلات</h2>
              <p className="text-gray-700 text-lg">
                يومياً من الرياض فقط من 12 ظهرًا حتى 4 عصرًا
              </p>
              <button
                className="mt-4 bg-[#D39D19] text-white px-4 py-2 rounded-md"
                onClick={() => setModalOpen(false)}
              >
                اغلق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
