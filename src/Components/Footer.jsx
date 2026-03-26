import logoNF from "../assets/Svg.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-backGround border
     border-gray-300 w-full font-inter pt-16"
    >
      {/* Main Grid */}
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto px-4 mb-12">
        {/* Logo and About */}
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoNF} alt="NovaFlow" className=" w-10 " />

            <h3 className="text-primaryText uppercase text-xl font-bold tracking-wide">
              {" "}
              <span className="text-highlightedText">Nova</span>Flow
            </h3>
          </div>
          <p className="text-secondaryText leading-relaxed text-sm max-w-sm mb-6">
            Streamline your workflow with smart automation. Manage tasks,
            automate processes, and boost team productivity with our all-in-one
            modern platform.
          </p>
          <div className="flex gap-4 ">
            <a href="">
              <FaTwitter className="w-6 h-6 hover:text-highlightedText hover:translate-y-1 transition-all ease-in-out duration-300" />
            </a>
            <a href="">
              <FaGithub className="w-6 h-6 hover:text-highlightedText hover:translate-y-1 transition-all ease-in-out duration-300" />
            </a>
            <a href="">
              <FaLinkedin className="w-6 h-6 hover:text-highlightedText hover:translate-y-1 transition-all ease-in-out duration-300" />
            </a>
          </div>
        </div>
        <div>
          {" "}
          <h3 className="text-lg text-primaryText">Products</h3>
          <ul className="pt-4 space-y-2 text-gray-600">
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Features</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Pricing</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Integrations</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Updates</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-primaryText">Comapany</h3>
          <ul className="pt-4 space-y-2 text-gray-600">
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Career</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Blog</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-primaryText">Support</h3>
          <ul className="pt-4 space-y-2 text-gray-600">
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Help Center</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Terms of Service</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Status</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between px-8 gap-y-2">
          <div>
            <p className="text-gray-600 text-sm font-medium">
              © {new Date().getFullYear()} Nova Flow
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Privacy</a>
            <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Terms</a>
            <a className="hover:text-highlightedHover transition-colors ease-in-out duration-300" href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
