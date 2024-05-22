import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import TestimonialAPIs from "../../../APIs/TestimonialAPIs";
import Container from "../../../Components/Container/Container";
import RoundedText from "../../../Components/RoundedText/RoundedText";

const Testimonial = () => {
  const testimonialData = TestimonialAPIs();
  return (
    <div className="w-full lg:h-[915px] flex items-center bg-primary px-4 py-16 lg:py-0">
      <Container className="">
        {/* title */}
        <div className="md:w-[478px] mx-auto text-center">
          <RoundedText
            text={"Testimonials"}
            style={"bg-slate-700 border-white text-white"}
          />
          <h2 className="font-bold text-3xl md:text-[44px] leading-10 md:leading-[50px] text-white mt-5">
            Testimonials Froms Our Valued Clients
          </h2>
        </div>
        {/* testimonial card */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-10">
          {testimonialData?.map((item, i) => (
            <div
              key={i}
              className="md:h-[448px] bg-[#222E47] rounded-[10px] flex flex-col items-start justify-center gap-8 py-10 px-9"
            >
              <div className="flex items-center gap-2 text-secondary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className=" text-[16px] text-gray-300">{item?.description}</p>
              <hr className="border w-full border-gray-400" />
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={item.img} />
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-[22px] text-gray-300">
                    {item?.name}
                  </h2>
                  <p className="text-gray-300 font-normal text-sm">
                    {item?.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* next & prev button */}
        <div className="flex items-start gap-4 justify-center mt-10">
          {/* prev button */}
          <button className="btn btn-sm  btn-circle bg-transparent border-gray-400 text-gray-300 hover:bg-secondary border-2 hover:border-0">
            <FaArrowLeft />
          </button>
          {/* next  button */}
          <button className="btn btn-sm  btn-circle bg-transparent border-gray-400 text-gray-300 hover:bg-secondary border-2 hover:border-0">
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
