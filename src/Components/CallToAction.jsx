export default function CallToAction () {

    return (

        <section className="bg-backGround w-full py-16 px-4">

        <div className="font-inter flex flex-col max-w-7xl mx-auto  ">

           <div className=" bg-surface border rounded-3xl px-6 shadow-sm border-gray-200 flex flex-col text-center justify-center items-center py-12">

           {/* Text and subheadings */}
            <div className="text-center">
                <h2 className="text-primaryText font-bold text-3xl md:text-5xl mb-6 tracking-tight">
                    Start Building <span className="text-highlightedText">Smarter</span>  Workflows Today!
                </h2>
                <p className="text-lg text-secondaryText leading-relaxed mb-10">
                    Thousands of teams scaling up their work and productivity with NovaFlow,<br /> Join us Today and level up your productivity.
                </p>
            </div>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 mb-6 w-full sm:w-auto">
                <button className="bg-highlightedText hover:cursor-pointer hover:bg-highlightedHover hover:translate-y-1 transition-all ease-in-out duration-300 font-bold text-white px-8 py-4 text-lg rounded-2xl">
                    Start Free Trial
                </button>

                <button className="bg-white font-bold hover:cursor-pointer hover:border-highlightedHover hover:text-highlightedHover hover:translate-y-1 transition-all ease-in-out duration-300  text-highlightedText border border-highlightedText px-8 py-4 text-lg rounded-2xl">
                    Book a Demo
                </button>
            </div>
            {/* Trust Signal / Microcopy */}
        <p className="text-sm text-gray-500 font-medium">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
           </div>
           
        </div>
        </section>

    );
}