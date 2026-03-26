import { featuresData } from "../Data/Data.js";
import FeatureCard from "./Cards/FeatureCard.jsx";

export default function Features() {
  return (
    <section id="features" className="w-full bg-backGround py-24">
      <div className="font-inter max-w-7xl mx-auto mt-4 px-4 flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center mb-16 text-center">
          {/* Header Section */}
          <h1 className="text-3xl md:text-5xl pt-4 text-primaryText font-bold uppercase tracking-tight mb-4">
            Features to Boost Your{" "}
            <span className="text-highlightedText">Productivity</span>{" "}
          </h1>

          <p className="text-secondaryText text-lg max-w-2xl">
            Everything you need to manage workflows, automate tasks, and collaborate seamlessly in one place.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-4">
          {featuresData.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
