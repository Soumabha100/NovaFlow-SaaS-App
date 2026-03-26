import PricingCards from "./Cards/PricingCards";

import { pricingData } from "../Data/Data.js";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-backGround w-full py-16">
      <div className="font-inter mt-6 mx-auto max-w-7xl  px-4 flex flex-col justify-center items-center ">
        {/* Heading and Subtext  */}
        <div className="flex flex-col text-center">
          <h1 className="text-primaryText text-3xl md:text-5xl uppercase font-bold mb-4">
            Simple <span className="text-highlightedText">Transparent</span>{" "}
            Pricing
          </h1>

          <p className="text-secondaryText text-lg mb-6">
            Choose the best plan that fits for you, Change and upgrade anytime
            as your business grows!
          </p>
        </div>

        {/* Cards for Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
          {pricingData.map((item) => (
            <PricingCards
              key={item.id}
              name={item.name}
              price={item.priceMonthly}
              desc={item.description}
              features={item.features}
              button={item.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
