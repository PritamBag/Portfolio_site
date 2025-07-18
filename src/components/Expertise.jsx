import { useState } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const toggleHireModal = () => {
    setIsHireModalOpen(!isHireModalOpen);
  };

  return (
    <div className="main-container py-10 md:py-20" id="skill">
      {/* Box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          // backgroundSize: "cover",
        }}
        className="box-container flex flex-col md:flex-row py-10 bg-fit md:bg-cover"
      >
        <div className="flex text-white justify-center md:justify-start px-4 md:px-16 mb-10 md:mb-0">
          {/* Text container */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-3">
            <h1 className="text-2xl font-bold">I love these technologies</h1>
            <p>
              Driven by a passion for innovation and problem-solving, I&apos;m drawn
              to the boundless possibilities of technology, fueling my
              creativity and drive for excellence.
            </p>
            <button
              className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg"
              onClick={toggleHireModal}
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex h-fit space-x-3 flex-wrap w-full md:w-2/3 justify-center">
            {/* Skills container */}
            {[
              "Java",
              "Python",
              "Laravel",
              "HTML",
              "CSS",
              "SCSS",
              "Tailwind CSS",
              "Bootstrap",
              "JavaScript",
              "ReactJs",
              "Wrappid",
              "NodeJs",
              "Android",
              "MySQL",
              "MongoDB",
              "Git",
              "cPanel",
              "Wordpress",
              "Shopify",
              "SEO",
            ].map((skill) => (
              <p
                key={skill}
                className="bg-gray-300 w-fit py-1 px-3 mt-3 rounded-lg cursor-pointer hover:bg-orange-500"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me Modal */}
      {isHireModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-2/3">
            <p className="text-2xl mb-4 font-bold text-center text-slate-700">
              Hire Me
            </p>
            <p className="px-5 text-lg text-center">
              I&apos;m excited to bring my skills and passion for software
              development to new and challenging projects. Let&apos;s work together
              to create something amazing. Contact me to discuss how I can
              contribute to your team.
            </p>
            <p className=" text-lg pt-1 text-center mt-3 break-words">
              <span className="font-bold">Connect on LinkedIn - </span>{" "}
              <a
                href="https://www.linkedin.com/in/pritam-bag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-purple-700"
              >
                https://www.linkedin.com/in/pritam-bag
              </a>
            </p>
            <div className="flex justify-center">
              <button
                onClick={toggleHireModal}
                className="px-4 py-2 bg-orange-500 text-white rounded-full mt-6 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expertise;
