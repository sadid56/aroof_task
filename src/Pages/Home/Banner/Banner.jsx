/* eslint-disable react/no-unescaped-entities */
import { FaRegArrowAltCircleRight, FaStar } from "react-icons/fa";
import Container from "../../../Components/Container/Container";
import videoImg from "../../../assets/logo/video-img.png";
import RoundedText from "../../../Components/RoundedText/RoundedText";
import "./Banner.css";
import { MdOutlineDone } from "react-icons/md";
const Banner = () => {
  // group fake data
  const groupData = [
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  ];
  return (
    <div className="w-full  md:h-[950px] overflow-hidden flex items-center bg-primary px-4 py-10 md:py-0">
      {/* content */}
      <Container className="flex flex-col-reverse md:flex-row gap-24 lg:gap-0 relative">
        {/* left content */}
        <div className="lg:w-1/2 space-y-5 md:space-y-10">
          <RoundedText
            text={"Practice Area"}
            style={"bg-slate-700 border-white text-white"}
          />
          {/* title */}
          <div className=" text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[62px] text-white z-20">
            We Provide Effectiv<span>e</span> <br />
            Roofing Service.
          </div>
          {/* description */}
          <p className="font-medium text-[16px] leading-6 text-gray-300">
            At ABC Roofing Services, we're dedicated to providing top-quality
            roofing solution tailored to your needs. With years of experience
            and a commitment to excellence we're your go-to choice for all your
            roofing needs
          </p>
          {/* service & watch button */}
          <div className="flex  items-center gap-2">
            <button className="bg-gradient-to-r from-secondary to-[#D92A06] h-12 w-[178px] flex items-center gap-2 px-3 py-6 rounded-md text-white text-lg ">
              Our Services <FaRegArrowAltCircleRight className="w-6" />
            </button>
            <img src={videoImg} className="w-32" alt="" />
          </div>
          {/* group content */}
          <div className="flex  items-center gap-4">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              {groupData.map((item, i) => (
                <div key={i} className="avatar">
                  <div className="w-12">
                    <img src={item.img} />
                  </div>
                </div>
              ))}
              <div className="avatar placeholder">
                <div className="w-12 bg-secondary text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className="text-gray-300">
              <h6>Our Happy Customer</h6>
              <p className="flex  items-center gap-2">
                <span className="text-secondary">
                  <FaStar />
                </span>{" "}
                4.9 ( 123k Review )
              </p>
            </div>
          </div>
        </div>
        {/* right positional image */}
        <div className="flex justify-center relative md:absolute right-0">
          <div className="bg-slate-700 flex items-center gap-2 py-6 px-5 rounded-md absolute md:right-32  -bottom-16 md:-bottom-96 h-20 md:w-[321px] z-50  text-3xl text-white ">
            <div className="w-12 h-12  rounded-lg p-2 bg-secondary text-white">
              <MdOutlineDone />
            </div>
            <h2 className="text-sm md:text-lg">20 Years of Experience</h2>
          </div>
          <div className="md:absolute -right-[400px] -top-72 header rounded-[60px] flex-1 md:w-[800px] md:h-[800px] w-[300px] h-[300px] z-10"></div>
          <div className="hidden md:block layer absolute -right-96 -top-60 md:w-[800px] md:h-[800px] border-[4px] rounded-[60px]"></div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
