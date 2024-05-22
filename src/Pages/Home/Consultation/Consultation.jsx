import { IoChatbubblesOutline } from "react-icons/io5";
import Container from "../../../Components/Container/Container";
import RoundedText from "../../../Components/RoundedText/RoundedText";
import { BiPhoneCall } from "react-icons/bi";
import { useState } from "react";

const Consultation = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const data = [
    {
      icon: <IoChatbubblesOutline />,
      title: "Chat Online",
    },
    {
      icon: <BiPhoneCall />,
      title: "Request a call back",
    },
    {
      icon: <IoChatbubblesOutline />,
      title: "Schedule a video call",
    },
  ];
  return (
    <div className="my-16 px-4">
      <Container>
        {/* description & title */}
        <div className="md:w-[650px] mx-auto text-center space-y-3">
          <RoundedText
            text={"Contact"}
            style={"bg-red-100 text-primary border-red-600 text-sm font-medium"}
          />
          <h2 className="text-primary font-bold text-3xl md:text-[44px]">
            Take advantage of consultation
          </h2>
          <p className="text-[#686868]">
            Welcome to [Your Financial Consulting Firm], where we specialize in
            helping individuals & businesses achieve financial stability and
            success.
          </p>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {data.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`flex gap-3 items-center  rounded-md px-3 py-4 cursor-pointer ${hoverIndex === i ? "bg-gradient-to-r from-secondary to-[#D92A06]" : "border"}`}
            >
              <h2 className={`w-10 h-10 flex items-center justify-center rounded-full  text-white text-xl ${hoverIndex === i ? "bg-white text-black" : "bg-secondary"}`}>
                {item.icon}
              </h2>
              <h2 className={`text-lg font-semibold ${hoverIndex === i ? "text-white" : "text-primary"}`}>{item.title}</h2>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Consultation;
