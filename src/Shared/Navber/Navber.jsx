
import logo from "../../assets/logo/logo.svg";
import { FaPhoneAlt, FaRegArrowAltCircleRight } from "react-icons/fa";

const Navber = () => {
  return (
    <div style={{ padding: "12px 24px 12px  24px" }} className="navbar max-w-[1170px] h-[73px] bg-white fixed left-1/2 transform -translate-x-1/2 top-0 md:top-5 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      {/* responsive button */}
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {/* this item list for mobile device */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
      <li><a>Home</a></li>
      <li><a>About Us</a></li>
      <li><a>Services</a></li>
        <li>
          <a>Pages</a>
          <ul className="p-2">
            <li><a>Submenu</a></li>
            <li><a>Submenu</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
        <li><div className="flex items-center">
          <h2 className="text-secondary">
            <FaPhoneAlt />
          </h2>
          <h1 className="font-medium">+1 (888) 423-3526</h1>
        </div></li>
        <li><button className="bg-gradient-to-r from-secondary to-[#D92A06] flex items-center gap-2 px-3 py-2 rounded-md text-white text-lg ">
          Free Estimate <FaRegArrowAltCircleRight className="w-6" />
        </button></li>
      </ul>
    </div>
    <img className="w-24" src={logo} alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* this item for laptop  device */}
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About Us</a></li>
      <li><a>Services</a></li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li><a>Submenu</a></li>
            <li><a>Submenu</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  {/* hidden for mobile device */}
  <div className="md:flex hidden  navbar-end items-center gap-5">
        <div className="flex items-center">
          <h2 className="text-secondary">
            <FaPhoneAlt />
          </h2>
          <h1 className="font-medium">+1 (888) 423-3526</h1>
        </div>
        <button className="bg-gradient-to-r from-secondary to-[#D92A06] flex items-center gap-2 px-3 py-2 rounded-md text-white text-lg ">
          Free Estimate <FaRegArrowAltCircleRight className="w-6" />
        </button>
      </div>
</div>
    
  );
};

export default Navber;
