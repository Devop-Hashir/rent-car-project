import CarouselPage from "@/components/CarouselPage";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import SubFooter from "@/components/SubFooter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <CarouselPage/>
     <div className="relative">
      <Explore/>
      <SubFooter/>
      <OurObjective/>
     </div>
    </div>
  );
}
