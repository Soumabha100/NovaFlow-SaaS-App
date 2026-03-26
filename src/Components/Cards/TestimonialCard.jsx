import { FaStar, FaUserCircle } from "react-icons/fa";


export default function TestimonialCard ({id, name, role, company, review}) {

    return (
        <div className="flex flex-col h-full border min-h-100 bg-white border-gray-300 p-8 rounded-3xl hover:border-highlightedHover hover:translate-y-2 hover:shadow-xl transition-all ease-in-out duration-300 group" >
            
            {/* Stars */}
            <div className="flex flex-row gap-x-2 text-amber-500 mb-4">
                <FaStar className="w-5 h-5"/>
                <FaStar className="w-5 h-5"/>
                <FaStar className="w-5 h-5"/>
                <FaStar className="w-5 h-5"/>
                <FaStar className="w-5 h-5"/>
            </div>

            <p className="text-secondaryText leading-relaxed grow mb-8 text-lg">
               "{review}"
            </p>

            <div className="flex flex-col items-center justify-center mt-auto mb-8">
                <FaUserCircle className="h-16 w-16 text-gray-400"/>
            </div>

            <div className="flex flex-col text-center">
                <h4 className="text-primaryText group-hover:text-xl transition-all ease-in-out duration-300 font-bold text-">{name}</h4>
                <p className="text-secondaryText text-sm"> {role} at <span className="text-highlightedText font-semibold">{company}</span></p>
            </div>


        </div>
    );
}