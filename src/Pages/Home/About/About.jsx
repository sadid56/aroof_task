import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Container from "../../../Components/Container/Container";
import { MdDone } from "react-icons/md";
import aboutImg from "../../../assets/images/Mask group.png";
import aboutImg2 from "../../../assets/images/Mask group-1.png";
import RoundedText from "../../../Components/RoundedText/RoundedText";

const About = () => {
  return (
    <Container className="flex flex-col md:flex-row items-center gap-20 md:gap-14 my-16 md:my-28 px-5 md:px-0">
      <div className="flex-1">
        {/* left image  container */}
        <div className="relative">
          <img
            src={aboutImg}
            className="w-full md:w-[535px] h-[400px] md:h-[610px] object-cover"
            alt=""
          />
          <img
            src={aboutImg2}
            className="w-[310px] h-[280px] object-cover absolute -right-4 -bottom-16"
            alt=""
          />
        </div>
      </div>
      {/* rigth side text content */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <RoundedText text={"About Us"} style={"bg-red-100 text-primary border-red-600 text-sm font-medium"}/>
        <h1 className="font-bold text-3xl md:text-[44px] text-primary leading-10">
          Professional & expert roofing contractors.
        </h1>
        {/* description */}
        <p className="font-normal text-[16px] leading-6 text-[#686868]">
          Aroof Roofing Services has been serving the community for over a
          decade is providing reliable and affordable roofing solutions. Our
          team of skilled the professionals is committed to delivering
          exceptional results and ensuring customer satisfaction every step of
          the way. <br />
          <br />
          Specific physical needs of the care recipient with regards to bathing
          and the grooming, dressing, meals and diet, mobility, and
          incontinence.
        </p>
        <div className="grid grid-cols-2 gap-3 font-medium">
          <p className="flex items-center gap-2">
            <MdDone className="text-secondary" /> Your Better Roofing Our
            Priority
          </p>
          <p className="flex items-center gap-2">
            <MdDone className="text-secondary" /> Roofing Firm In Locality
          </p>
          <p className="flex items-center gap-2">
            <MdDone className="text-secondary" /> Roofing Firm In Locality
          </p>
          <p className="flex items-center gap-2">
            <MdDone className="text-secondary" /> Your Better Roofing Our
            Priority
          </p>
        </div>
        <button className="bg-gradient-to-r from-secondary to-[#D92A06] h-12 w-[178px] flex items-center gap-2 px-3 py-6 rounded-md text-white text-lg ">
          Discover More <FaRegArrowAltCircleRight className="w-6" />
        </button>
      </div>
    </Container>
  );
};

export default About;
