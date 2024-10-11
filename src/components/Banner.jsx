import { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/Photo.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Database Designer",
        "Android Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col md:flex-row items-center py-10 md:py-20 px-4 md:px-16"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center text-white mb-8 md:mb-0">
        <div className="space-y-4 md:space-y-5">
          <h3 className="text-lg md:text-xl font-semibold">Hi, I am</h3>
          <h1 className="text-3xl md:text-4xl font-bold">Pritam Bag</h1>
          <h2 className="text-lg md:text-xl">
            I am a <span className="underline" ref={el}></span>
          </h2>
          <p className="text-sm md:text-base ">
            As a seasoned software developer, I&apos;m adept in various programming
            languages and methodologies. Demonstrating strong problem-solving
            abilities, I excel as a collaborative team player. Committed to
            continuous learning, I strive to stay abreast of industry trends and
            deliver high-quality solutions.
          </p>
          <div className="icons-container flex space-x-4 pt-2 pb-3">
            <a
              href="https://www.linkedin.com/in/pritam-bag-6008b6282"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border hover:bg-orange-500 w-9 h-9 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-xl fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/PritamBag"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border hover:bg-orange-500 w-9 h-9 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-xl fa-github"></i>
            </a>
          </div>
          <a
            className="inline-block px-3 py-1 bg-orange-500 shadow rounded-full text-sm md:text-md cursor-pointer"
            onClick={toggleContactModal}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
          src={bannerImage}
          alt="Pritam Bag"
        />
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-auto ">
            <p className="text-2xl mb-4 font-bold text-center text-slate-700">
              Contact Information
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
                onClick={toggleContactModal}
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

export default Banner;
