import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Container from "../../../Components/Container/Container";
import RoundedText from "../../../Components/RoundedText/RoundedText";
import BlogData from "../../../APIs/BlogsData";
import { IoAddOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Blogs = () => {
  const blogData = BlogData();
  const [activeBlogIndex, setActiveBlogIndex] = useState(null);

  // conditional button
  const toggleReadMore = (index) => {
    setActiveBlogIndex(activeBlogIndex === index ? null : index);
  };

  return (
    <div className="bg-primary lg:h-[935px] flex items-center py-16 lg:py-0 px-4 lg:px-0">
      <Container>
        {/* blog  contect  header */}
        <div className="flex flex-col lg:items-center gap-5 lg:flex-row justify-between w-full">
          <div className=" space-y-5 lg:w-[609px]">
            <RoundedText
              text={"Our Blogs"}
              style={"bg-slate-700 border-white text-white"}
            />
            <h2 className="text-3xl md:text-[44px] font-bold text-white">
              Explore Our News and Blogs
            </h2>
            <p className="text-gray-300">
              Specific physical needs of the care recipient with regards to
              bathing and the grooming most of dressing, meals and diet,
              mobility, and incontinence step.
            </p>
          </div>
          <button className="bg-gradient-to-r from-secondary to-[#D92A06] flex items-center gap-2 px-6 py-2 w-fit rounded-md text-white text-lg">
            View All Blogs <FaRegArrowAltCircleRight className="text-xl" />
          </button>
        </div>
        {/* blog card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {blogData.map((item, i) => (
            <div
              key={i}
              className={`bg-[#222E47] rounded-md transition-all duration-300 ${
                activeBlogIndex === i ? "h-auto" : "h-[445px]"
              }`}
            >
              <div className="h-[280px] relative">
                <img
                  src={item.img}
                  className="w-full h-full object-cover rounded-t-md"
                  alt=""
                />
                <button
                  onClick={() => toggleReadMore(i)}
                  className="btn btn-circle btn-sm text-secondary absolute top-5 text-xl right-5 transition-all duration-300"
                >
                  {activeBlogIndex === i ? <MdClose /> : <IoAddOutline />}
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex justify-between w-full">
                  <h3 className="bg-slate-700 border-white border rounded-[35px] text-sm text-white px-2">
                    {item?.category}
                  </h3>
                  <p className="text-gray-300">{item.date}</p>
                </div>
                <h4 className="text-xl font-medium text-white">
                  {item.description}
                </h4>
                {activeBlogIndex === i && (
                  <button className="btn bg-white text-black text-[16px] flex items-center gap-2">
                    Read More <FaRegArrowAltCircleRight />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
