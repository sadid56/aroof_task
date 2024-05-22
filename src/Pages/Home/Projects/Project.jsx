import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ProjectData from "../../../APIs/ProjectsData";
import Container from "../../../Components/Container/Container";
import RoundedText from "../../../Components/RoundedText/RoundedText";

const Project = () => {
  const projectData = ProjectData(); // project fake data
  return (
    <Container className="my-14 px-4 md:my-24">
      <div className="flex flex-col gap-3 md:flex-row justify-between md:items-end">
        {/* project  title & description */}
        <div className="flex-1">
          <RoundedText
            text={"Our Work"}
            style={"bg-red-100 text-primary border-red-600 text-sm font-medium"}
          />
          <h1 className="font-bold text-3xl md:text-5xl text-primary mt-3">
            Explore Recent Projects
          </h1>
        </div>
        <p className="text-[16px] flex-1">
          Specific physical needs of the care recipient with regards to bathing
          and the grooming, dressing, meals and diet, mobility, and incontinence
          step.
        </p>
      </div>
      {/* project card */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-5 md:mt-16">
        {projectData.map((item, i) => (
          <div
            key={i}
            className="relative h-[450px] w-full flex-1 hover:flex-[3] transition-all duration-300"
          >
            <img
              src={item.img}
              className="h-[450px] w-full object-cover rounded"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-xl w-14 h-14 bg-secondary text-white absolute right-6 top-6 rounded-full flex items-center justify-center">
                {item?.icon}
              </button>
              <div className="text-white p-10 w-full">
                <h3 className="text-2xl mb-2 font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* all project button */}
      <div className="flex justify-center mt-7">
          <button className="bg-gradient-to-r from-secondary to-[#D92A06] h-12 flex items-center gap-2 px-4 py-6 rounded-md text-white text-lg ">
            Browse All Project <FaRegArrowAltCircleRight className="w-6" />
          </button>
        </div>
    </Container>
  );
};

export default Project;
