import projectImage1 from '../assets/TriviaNuts Logo.png';
import projectImage2 from '../assets/Logo1.png';
import projectImage3 from '../assets/PIC-background.png';
import { useState } from 'react';
const Projects = () => {
    const [data, setData] = useState([
        {
            id:"",
            title:"",
            description:"",
            actionButton:{
                title:"",
                link:"",
            },
        },
    ]);
    return (
      <div className="main-container py-10" id="projects">
        <h1 className="text-3xl pb-5  underline text-center font-bold">
          My Projects
        </h1>
        <div className="projects-container flex flex-col md:flex-row mt-12 space-y-5 md:space-y-0 md:space-x-5 px-10">
          <div className="project1 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center  text-center">
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage1}
            ></img>
            <h1 className="text-2xl">Trivianuts - Quiz Application</h1>
            <p>
              TriviaNuts is an educational quiz platform developed in Laravel
              that enables users to enhance their knowledge and skills in
              various subjects. My responsibilities were development, database
              design, frontend design and version control using GitHub.
            </p>
            <a
              href="https://trivianuts.bytelure.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg cursor-pointer text-white"
            >
              Check
            </a>
          </div>
          <div className="project2 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center text-center">
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage2}
            ></img>
            <h1 className="text-2xl">Bytelure - Blogging Website</h1>
            <p>
              ByteLure is a website for tech blogs developed using WordPress.
              Showcased content creation, and community engagement skills.
              Produced impactful technical content and optimized SEO.
              Demonstrates a passion for tech trends and effective
              communication.
            </p>
            <a
              href="https://bytelure.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg cursor-pointer text-white"
            >
              Check
            </a>
          </div>
          <div className="project3 hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center  text-center">
            <img
              className=" rounded-full shadow-lg w-32 h-32 border border-slate-400"
              src={projectImage3}
            ></img>
            <h1 className="text-2xl">Portfolio Website</h1>
            <p>
              My portfolio website, built with ReactJS, showcases my skills and
              projects. Also, where I talked about myself, it highlights my
              front-end development and design expertise, featuring interactive
              elements and a responsive layout to engage visitors.
            </p>
            <button className="px-3 py-1 bg-orange-500 text-md rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    );
};

export default Projects;