import Main from "../components/Main";
import SectionTwo from "../components/SectionTwo";
import SectionOmrah from "../components/SectionOmrah";
import SectionVipEconomy from "../components/SectionVipEconomy";
import Banner from "../components/Banner";
import Dina from "../components/Dina";
import HotelCard from "../components/HotelCard";
import BusSection from "../components/BusSection";
import Grid from "../components/Grid";
export default function Home() {
  return (
    <>
      <Main />
      <div className="bg-[#E0DFDF] text-purple-700">
        <SectionTwo />
        <SectionOmrah />
        <SectionVipEconomy />
        <Banner />
        <Dina/>
        <HotelCard/>
        <BusSection/>
        <Grid/>
      </div>
    </>
  );
}
