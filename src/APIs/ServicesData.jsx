import { RiHomeSmileLine } from "react-icons/ri";
import img1 from "../assets/images/service1.jpeg";
import img2 from "../assets/images/services-2.jpeg";
import img3 from "../assets/images/services-3.jpeg";
import { HiOutlineHome } from "react-icons/hi";
import { FaSearchengin } from "react-icons/fa";

const ServicesData = () => {
    const servicesData = [
        {
            icon: <RiHomeSmileLine />,
            img: img1,
            title: "Roof Installation",
            description: "This service entails the professional installation of new roofs for residential, commercial, or industrial buildings."
        },
        {
            icon: <HiOutlineHome />,
            img: img2,
            title: "Roof Repair",
            description: "Roof repair services address a variety of issues that may compromise the integrity and functionality of a roof."
        },
        {
            icon: <FaSearchengin />,
            img: img3,
            title: "Roof Replacement",
            description: "When a roof is beyond repair or nearing the end of its lifespan, roof replacement becomes necessary."
        },
    ];
    return servicesData;  // Return serviceData directly
};

export default ServicesData;
