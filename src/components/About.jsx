import { useState } from "react";
import bannerImage from "../assets/PIC-3.png";

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    image: bannerImage,
    title: "Software Designer & Developer",
    desc1: `As a Mathematics graduate and having completed my MCA, my journey into software development has been fueled by a deep passion for problem-solving and continuous learning. Starting with foundational technologies like HTML, CSS, and JavaScript, I have since expanded my expertise into frameworks and tools such as React, Laravel content management system like WordPress, Shopify including Java, and Android development. This journey has instilled in me a relentless drive to deliver high-quality, scalable software solutions while embracing new challenges along the way.`,
    desc2: `My curiosity for emerging technologies, such as open-source frameworks like Wrappid, motivates me to evolve continually. With each project, I strive to push the boundaries of what’s possible, deliver innovative solutions, and enhance user experiences. As a software designer and developer, I aim to leverage my growing skill set to make meaningful contributions to the tech industry. My ultimate goal is to create impactful software that solves real-world problems and leaves a positive, lasting impact on users and communities.`,
    actionButton: {
      title: "Read More..",
      link: "#about",
    },
  });

  return (
    <div className="main-container py-10 md:py-20 bg-gray-100" id="about">
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
