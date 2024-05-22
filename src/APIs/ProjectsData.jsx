
import img1 from "../assets/images/service1.jpeg";
import img2 from "../assets/images/services-2.jpeg";
import img3 from "../assets/images/services-3.jpeg";
import { FaLocationArrow, } from "react-icons/fa";

const ProjectData = () => {
    const projectData = [
        {
            icon: <FaLocationArrow />,
            img: img1,
            title: "Roof renovation in New York, NY",
            description: "We’ve worked on homes and commercial buildings across the country we know what it takes to do a quality job on structures big."
        },
        {
            icon: <FaLocationArrow />,
            img: img2,
            title: "Roof renovation in New York, NY",
            description: "We’ve worked on homes and commercial buildings across the country we know what it takes to do a quality job on structures big."
        },
        {
            icon: <FaLocationArrow />,
            img: img3,
            title: "Roof renovation in New York, NY",
            description: "We’ve worked on homes and commercial buildings across the country we know what it takes to do a quality job on structures big."
        },
    ];
    return projectData;  // Return serviceData directly
};

export default ProjectData;
