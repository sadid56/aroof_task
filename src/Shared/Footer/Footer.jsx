import {
  FaFacebook,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegArrowAltCircleRight,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Container from "../../Components/Container/Container";
import logo from "../../assets/logo/fav-icon.svg";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-primary flex items-center md:h-[800px] p-5">
      <Container>
        {/* main content */}
        <div className="text-center space-y-6 p-5 md:p-20 border-2 border-secondary rounded-md">
          <div className="flex justify-center items-center gap-2">
            <img src={logo} alt="" />
            <h2 className="text-4xl font-bold text-white">Aroof</h2>
          </div>
          <h2 className="font-bold text-3xl md:text-[44px] text-gray-300 leading-10">
            Sign Up for Newsletters For Letest News & Update
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="text"
              className="px-3 py-3 outline-none rounded-md md:w-[340px]"
              placeholder="Enter your Email"
            />
            <button className="bg-gradient-to-r from-secondary to-[#D92A06] flex items-center gap-2 px-3 py-2 rounded-md text-white text-lg ">
              Subscribe
              <FaRegArrowAltCircleRight className="w-6" />
            </button>
          </div>
          <hr className="border border-gray-400" />
          <ul className="flex flex-wrap items-center justify-between pa-5 text-gray-400">
            <li>Home</li>
            <li>Privecy & Policy</li>
            <li>Privecy Policy</li>
            <li>Terms & Conditions</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Our Teams</li>
            <li>Our Blogs</li>
            <li>Contact Us</li>
          </ul>
          <div className="text-gray-300 flex justify-center md:gap-10 flex-col md:flex-row">
            <h2 className="flex items-center gap-1">
              <span>
                <FaPhoneAlt />
              </span>
              +3(924)4596512
            </h2>
            <h2 className="flex items-center gap-1">
              <span>
                <MdOutlineMail />
              </span>
              info@example.com
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center gap-4 items-center justify-between mt-10">
          <p className="text-gray-300">
            © Copyright 2023 Advisor Consulting Ltd. <br />
            Terms & Conditions
          </p>
          <div className="flex items-center gap-3">
            <button className="btn btn-circle btn-sm text-black hover:text-secondary">
              <FaFacebook />
            </button>
            <button className="btn btn-circle btn-sm text-black hover:text-secondary">
              <FaLinkedinIn />
            </button>
            <button className="btn btn-circle btn-sm text-black hover:text-secondary">
              <FaYoutube/>
            </button>
            <button className="btn btn-circle btn-sm text-black hover:text-secondary">
              <FaTwitter/>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
