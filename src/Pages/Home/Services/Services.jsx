// import ServicesData from "../../../APIs/ServicesData";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ServicesData from "../../../APIs/ServicesData";
import Container from "../../../Components/Container/Container";
import RoundedText from "../../../Components/RoundedText/RoundedText";

const Services = () => {
  const servicesData = ServicesData(); // service APIs
  return (
    <div className="w-full lg:h-[1021px] flex items-center bg-primary px-4 py-10 lg:py-0 md:px-0">
      <Container className="">
        {/* image & icon */}
        <div className="md:w-[478px] mx-auto text-center">
          <RoundedText
            text={"Our Services"}
            style={"bg-slate-700 border-white text-white"}
          />
          <h2 className="font-bold text-3xl md:text-4xl leading-10 text-white mt-5">
            We offer High Quality & Best Roofing Services
          </h2>
        </div>
        {/* service card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-10">
          {servicesData?.map((item, i) => (
            <div key={i} className="h-[537px] bg-[#222E47] rounded-md">
              <div className="h-[260px] relative">
                <img
                  src={item?.img}
                  className="w-full h-full object-cover rounded-t-md"
                  alt=""
                />
                <div className="text-secondary text-3xl absolute w-16 h-16 bg-white flex items-center justify-center rounded-full -bottom-9 left-9">
                  {item?.icon}
                </div>
              </div>
              <div className="space-y-4 mt-5 p-7">
                <h4 className="font-semibold  text-2xl text-white">
                  {item?.title}
                </h4>
                <p className=" text-[16px] text-gray-300">
                  {item?.description}
                </p>
                <button className=" h-12  flex items-center gap-2 px-3 py-4 rounded-md border border-white text-white text-lg hover:bg-white hover:text-primary transition-all duration-300 ">
                  Read More <FaRegArrowAltCircleRight className="w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* view more button */}
        <div className="flex justify-center mt-7">
          <button className="bg-gradient-to-r from-secondary to-[#D92A06] h-12 flex items-center gap-2 px-4 py-6 rounded-md text-white text-lg ">
            View All Services <FaRegArrowAltCircleRight className="w-6" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
