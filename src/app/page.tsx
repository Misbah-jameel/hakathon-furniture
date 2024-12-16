// import Image from "next/image";
// import Navbar1 from "./Components/Navbar1";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import FourthCards from "./Components/FourthCards";
import SideCard from "./Components/SideCard";
import OnlyImages from "./Components/OnlyImages";

// import Footer from './Components/Footer'
// import Pic from './Components/Pic';
export default function Home() {
  return (
   <div>
    {/* <Navbar1/> */}
    <Hero/>
    <Cards/>
    <FourthCards/>
    <SideCard/>
    <OnlyImages/>
  {/* <Footer/> */}
 
   </div>
  );
}
