import { useState } from "react";

const Header = () => {
  const [brandName] = useState("Pritam Bag");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const toggleHireMe = () => {
    setIsHireMeOpen(!isHireMeOpen);
  };

  const menuLinks = [
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Projects", link: "#projects", id: 3 },
    { title: "Skill", link: "#skill", id: 4 },
    { title: "Contact", onClick: toggleContactModal, id: 5 },
  ];

  const hireButton = {
    title: "Hire Me",
    onClick: toggleHireMe,
  };

  return (
    <div
      className="main h-20 border flex justify-between items-center px-4 md:px-16 bg-gray-100"
      id="home"
    >
      <div>
        {/* Portfolio brand logo */}
        <h1 className="text-xl md:text-2xl font-bold">{brandName}</h1>
      </div>

      <div className="hidden md:flex space-x-4 lg:space-x-6 cursor-pointer">
        {/* Menu links */}
        {menuLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            onClick={link.onClick}
            className="hover:text-orange-600"
          >
            {link.title}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        {/* Action button */}
        <button
          onClick={hireButton.onClick}
          className="px-4 py-2 bg-orange-500 rounded-full shadow text-sm md:text-base text-white "
        >
          {hireButton.title}
        </button>
      </div>

      <div className="md:hidden flex items-center">
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-100 border-t md:hidden flex flex-col items-center space-y-4 py-4 cursor-pointer">
          {/* Mobile menu links */}
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={link.onClick}
              className="hover:text-orange-600"
            >
              {link.title}
            </a>
          ))}
          {/* Action button */}
          <button
            onClick={hireButton.onClick}
            className="px-4 py-2 bg-orange-500 rounded-full shadow text-sm text-white"
          >
            {hireButton.title}
          </button>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-auto ">
            <p className="text-2xl mb-4 font-bold text-center text-slate-700">
              Contact Information
            </p>
            <p className=" text-lg pt-1 break-words">
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
                className="px-4 py-2 bg-orange-500 text-white rounded-full mt-6"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      {isHireMeOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-2/3">
            <p className="text-2xl mb-4 font-bold text-center text-slate-700">
              Hire Me
            </p>
            <p className="px-5 text-lg text-center">
              I'm excited to bring my skills and passion for software
              development to new and challenging projects. Let's work together
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
                onClick={toggleHireMe}
                className="px-4 py-2 bg-orange-500 text-white rounded-full mt-6"
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

export default Header;
