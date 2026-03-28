import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function AuthModal( {isOpen, onClose}) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

    if (!isOpen) return null ;
    
  return (
    <div>
        <div
          onClick={onClose}
          className="bg-gray-600/50 fixed w-screen min-h-screen z-10 flex justify-center items-center top-0 left-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-backGround px-8 py-16 md:py-12 rounded-2xl min-w-full md:min-w-120 "
          >
            <div className="absolute top-4 cursor-pointer right-4">
              <IoMdClose className="hover:text-red-400 transition-all ease-in-out duration-300" onClick={onClose} size={32} />
            </div>
            <div className="flex justify-center gap-x-2 text-center text-2xl mb-6">
              Get Started with <span className="text-highlightedText">NovaFlow</span>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-medium" htmlFor="">
                {" "}
                Email:
              </label>
              <input
                name="email"
                type="email"
                className=" w-full px-4 py-3 border border-black rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-medium" htmlFor="password">
                {" "}
                Password:
              </label>
              <input
                name="password"
                type="password"
                className=" w-full px-4 py-3 border border-black rounded-xl"
              />
            </div>

            <div>
              <button className=" font-bold text-lg hover:cursor-pointer rounded-2xl mt-6 p-4 w-full text-white bg-highlightedText hover:bg-highlightedHover hover:scale-105 transition-all duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
