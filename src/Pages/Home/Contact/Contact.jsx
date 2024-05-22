import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Container from "../../../Components/Container/Container";
import { LuClock4 } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  // infoData
  const data = [
    {
      icon: <LuClock4 />,
      text: "Contact Us",
      desc: "8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 77381",
    },
    {
      icon: <FiPhoneCall />,
      text: "Call or text",
      desc: "+123-456-7890",
    },
    {
      icon: <MdOutlineEmail />,
      text: "Email us today",
      desc: "info@taxvice.com",
    },
  ];
  return (
    <div className="my-10 lg:my-20 px-4">
      <Container className="lg::h-[628px] flex flex-col-reverse lg:flex-row gap-10  items-center">
        <div className="flex-1 space-y-6">
          {/* title part */}
          <div>
            <h1 className="font-bold text-3xl md:text-[44px]">Send Us A Message</h1>
            <p className="text-[#686868] mt-3">
              Our response time is within 30 minutes during business hours
            </p>
          </div>
          {/* submit form */}
          <form className="space-y-6">
            <div className="grid  grid-cols-2 gap-3">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <select className="select select-bordered w-full text-gray-400">
              <option disabled selected>
                Servic Type
              </option>
              <option>App dev</option>
              <option>Web dev</option>
            </select>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Messages"
            ></textarea>
          </form>
          {/* button */}
          <button className="bg-gradient-to-r from-secondary to-[#D92A06] h-12 flex items-center gap-2 px-4 py-6 rounded-md text-white text-lg ">
            Browse All Project <FaRegArrowAltCircleRight className="w-6" />
          </button>
        </div>
        {/* contact info */}
        <div className="flex-1 flex flex-col gap-3">
          {data?.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`flex px-4 py-6 cursor-pointer transition-all duration-100 items-center gap-4 rounded-md hover:bg-gradient-to-r from-secondary to-[#D92A06] ${
                hoverIndex === i ? "text-white" : "hover:text-white"
              }`}
            >
              <h2
                className={`text-2xl ${
                  hoverIndex === i ? "text-white" : "text-secondary"
                }`}
              >
                {item.icon}
              </h2>
              <div>
                <h1 className="font-medium text-xl">{item.text}</h1>
                <p
                  className={`${
                    hoverIndex === i ? "text-white" : "text-[#686868]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
