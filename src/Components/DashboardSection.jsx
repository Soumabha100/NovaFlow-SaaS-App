import { imageCards } from "../Data/Data.js";
import Carousel from "./Carousels/Carousel.jsx";

export default function DashboardSection() {
  return (
    <section id="about" className="bg-backGround w-full py-20">
      
    <div className="font-inter max-w-7xl mx-auto  flex flex-col items-center ">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-primaryText mb-4 tracking-wide font-bold uppercase text-3xl md:text-5xl">
          <span className="text-highlightedText">Live</span> Preview of Our APP
        </h1>
        <p className="text-secondaryText text-lg max-w-xl mx-auto">
          Experience the true power of NovaFlow. Swipe through our interactive
          dashboard and see how we streamline your workflow.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-[95%] lg:w-[85%] m-auto">
        <Carousel images={imageCards} />
      </div>
    </div>
    </section>
  );
}
