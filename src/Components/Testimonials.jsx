import { testimonialsData } from "../Data/Data.js";
import TestimonialCard from "./Cards/TestimonialCard.jsx";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-backGround w-full py-16 px-5 ">
      <div className="font-inter flex flex-col items-center justify-center max-w-7xl mx-auto ">
        {/* Heading Part */}
        <div className="text-center mb-16">
          <h2 className="text-primaryText text-3xl md:text-5xl uppercase font-bold tracking-tight mb-5">
            <span className="text-highlightedText">Loved</span> by Innovative
            Teams
          </h2>

          <p className="text-secondaryText text-lg max-w-2xl">
            Dont just take for our Words, See NovaFlow in action and growing
            teams and their productivity
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              company={item.company}
              role={item.role}
              review={item.review}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
