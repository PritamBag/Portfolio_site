import projectImage1 from '../assets/TriviaNuts Logo.png';
import projectImage2 from '../assets/poqolo.png';
import projectImage3 from '../assets/nomad-journey.png';
import projectImage4 from "../assets/Queriverse-Logo.png";
import { useState } from 'react';
const Projects = () => {
    // const [data, setData] = useState([
    //     {
    //         id:"",
    //         title:"",
    //         description:"",
    //         actionButton:{
    //             title:"",
    //             link:"",
    //         },
    //     },
    // ]);

    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    const toggleDownloadModal = () => {
      setIsDownloadModalOpen(!isDownloadModalOpen);

    };

    const handleDownloadAPK = () => {
      const downloadUrl = "Queriverse.apk"; // Adjust path as needed
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = "Queriverse.apk";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setIsDownloadModalOpen(false); // Close modal after initiating download
    };







    return (
      <div className="main-container py-10" id="projects">
        <h1 className="text-3xl pb-5  underline text-center font-bold">
          Projects
        </h1>
        <div className="projects-container flex flex-col md:flex-row mt-12 space-y-5 md:space-y-0 md:space-x-5 px-10">
          <div
            className="project1 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center  text-center"
            onClick={() =>
              window.open("https://github.com/saikatdutta713/TriviaNuts", "_blank")
            }
            style={{ cursor: "pointer" }}
          >
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage1}
            ></img>
            <h1 className="text-2xl">Trivianuts - Quiz Application</h1>
            <p>
              TriviaNuts is an educational quiz platform developed in Laravel
              that enables users to enhance their knowledge and skills in
              various subjects. My responsibilities included development,
              database design, frontend design, and version control using
              GitHub.
            </p>

            <button className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg cursor-pointer text-white">
              Check
            </button>
          </div>

          <div
            className="project4 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center text-center"
            onClick={toggleDownloadModal}
            style={{ cursor: "pointer" }}
          >
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage4}
            ></img>
            <h1 className="text-2xl">Queriverse - An android app</h1>
            <p>
              Queriverse is an Android application for social interaction
              through Q&A, image sharing, and quizzes, with a backend powered by
              an API developed in Laravel and a MySQL database, ensuring
              seamless knowledge sharing and lively community engagement.
            </p>
            <button className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg cursor-pointer text-white">
              Check
            </button>
          </div>

          <div
            className="project2 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center text-center"
            onClick={() => window.open("https://poqolo.com", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage2}
            ></img>
            <h1 className="text-2xl">Poqolo - Ecom Website</h1>
            <p>
              Poqolo is an eCommerce website built with WordPress, featuring responsive design, custom themes, and plugin integration. It enables smooth product browsing, secure checkout, and showcases strong skills in web development and user-centered design.
            </p>
            <button className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg cursor-pointer text-white">
              Check
            </button>
          </div>

          <div
            className="project3 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center  text-center"
            onClick={() => window.open("https://nomadjourney.in", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage3}
            ></img>
            <h1 className="text-2xl">Nomad Journey - Blog</h1>
            <p>
              Nomad Journey is a collaborative blog built to explore culture, ideas, and design. It highlights our storytelling and creative approach, featuring original content, thoughtful layout, and a responsive design to connect with curious, modern readers.
            </p>
            <button className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg text-white">
              Check
            </button>
          </div>
        </div>

        {/* Download Modal */}
        {isDownloadModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-2/3">
              <p className="text-2xl mb-4 font-bold text-center text-slate-700">
                Download Queriverse APK
              </p>
              <div className=" flex justify-center">
                <button
                  onClick={handleDownloadAPK}
                  className="px-4 py-2 bg-slate-700 text-white rounded-full"
                >
                  Download
                </button>
                <button
                  onClick={() => setIsDownloadModalOpen(false)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-full ml-3"
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

export default Projects;