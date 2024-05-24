import { useState } from "react";
import bannerImage from "../assets/PIC-3.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Software Designer & Developer",
    desc1: `As a Mathematics graduate and pursuing MCA, my journey into software development began with a passion for problem-solving. Starting with foundational languages like HTML, CSS, and JS, I've expanded my expertise across diverse technologies. Despite this journey, my hunger for learning remains insatiable. I'm driven by a relentless dedication to crafting high-quality software solutions. `,
    desc2: `My curiosity for emerging technologies and industry trends keeps me motivated to evolve continually. With each project, I seek to push boundaries, embrace challenges, and deliver innovative solutions. As a software designer and developer, I am committed to leveraging my skills and knowledge to contribute meaningfully to the ever-evolving tech landscape. My goal is to create impactful software solutions that address real-world challenges and leave a lasting positive impact on users and communities.`,
    actionButton: {
      title: "Read More..",
      link: "#about",
    },
  });

  return (
    <div className="main-container py-10 bg-gray-100" id="about">
      <h1 className="text-3xl pb-5 underline text-center font-bold">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 px-4">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
            src={data.image}
            alt="Pritam Bag"
          />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="space-y-5 w-full md:w-5/6 ">
            <h1 className="text-2xl md:text-3xl font-semibold">{data.title}</h1>
            <p className="text-sm md:text-base">{data.desc1}</p>
            <p className="text-sm md:text-base">{data.desc2}</p>
            <a
              href={data.actionButton.link}
              className="inline-block bg-orange-500 px-3 py-1 text-sm md:text-md rounded-full shadow-lg text-white"
            >
              {data.actionButton.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
