import heroImg1 from "../assets/HeroImage.webp";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-12 bg-backGround">

    <div className="font-inter px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-150">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight font-bold mb-6 text-primaryText">
            Streamline your work flow with
            <br />
            <span className="text-highlightedText"> Smart Automation.</span>{" "}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-lg mb-12 text-secondaryText">
            Manage tasks, automate processes, and boost team productivity with
            an all-in-one modern platform.
          </p>
          <div className="flex flex-col sm:flex-row text-white gap-6 w-full sm:w-auto">
            <button className="rounded-xl py-4 px-8 hover:cursor-pointer font-bold bg-highlightedText hover:bg-highlightedHover hover:translate-y-1 transition-all hover:shadow-lg duration-300">
              Start for Free
            </button>
            <button className="rounded-xl py-4 px-8 font-bold bg-surface text-highlightedText border hover:cursor-pointer border-highlightedText hover:text-highlightedHover hover:border-highlightedHover hover:shadow-lg transition-all  hover:translate-y-1 duration-300">
              Book a Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img src={heroImg1} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
}
