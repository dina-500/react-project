import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Umrah from "./pages/Umrah";
import Hotels from "./pages/Hotels";
import Buses from "./pages/Buses";
import Contact from "./pages/Contact";
import VipDetails from "./pages/VipDetails";
import EconomyDetails from "./pages/EconomyDetails";

import QaserRizq from "./pages/QaserRizq.jsx";
import UmmMakkah from "./pages/UmmMakkah.jsx";
import Voco from "./pages/Voco.jsx";
import MotanLamar from "./pages/MotanLamar.jsx";
import DiyafahRajaa from "./pages/DiyafahRajaa.jsx";
import Falasteen from "./pages/Falasteen.jsx";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
      <motion.div 
        style={{ scaleX: scrollYProgress }}  
        className="fixed top-0 left-0 right-0 h-[4px] bg-[#D39D19] origin-left z-[9999]"
      />
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vip-details" element={<VipDetails />} />
          <Route path="/economy-details" element={<EconomyDetails />} />
          <Route path="/diyafah-rajaa" element={<DiyafahRajaa />} />
          <Route path="/falasteen" element={<Falasteen />} />
          <Route path="/motan-lamar" element={<MotanLamar />} />
          <Route path="/qaserrizq" element={<QaserRizq />} />
          <Route path="/umm-makkah" element={<UmmMakkah />} />
          <Route path="/voco" element={<Voco />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
