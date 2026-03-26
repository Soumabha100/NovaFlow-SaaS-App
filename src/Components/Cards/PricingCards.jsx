import { FaDotCircle } from "react-icons/fa";
export default function PricingCards ({id, name, price, desc, features, button}) {

    return(
        <div className="mt-8">
            <div className=" w-85 border border-gray-300 rounded-3xl bg-white hover:border-highlightedHover hover:translate-y-2 hover:shadow-xl transition-all ease-in-out duration-300 group">
                <div className="p-6">

                {/* Name */}
                <h2 className="text-3xl text-primaryText font-bold mb-2">{name}</h2>
                <p className="text-secondaryText text-sm">{desc}</p>

                <p className="text-5xl py-6 text-primaryText font-semibold">${price}<span className="text-highlightedText">/mo</span></p>

                <div className="min-h-60">
                {features.map((index, feature) => (
                    <div key={index} className="flex flex-row items-center text-sm my-2">
                    <FaDotCircle className="text-highlightedText shirnk-0 text-lg"/>
                    <p className="px-2 text-secondaryText leading-relaxed">
                         {features[feature]}
                    </p>
                </div>
                ))}
                </div>
                
                <div className="text-center mt-6">
                    <button className="w-full text-xl group-hover:bg-highlightedHover transition-all ease-in-out duration-300 font-bold hover:cursor-pointer text-white bg-highlightedText px-4 py-3 rounded-3xl">
                        {button}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}