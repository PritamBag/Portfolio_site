import projectImage1 from "../assets/Rxefy-logo.png";
import projectImage2 from "../assets/Wrappid-logo.png";

const Experience = () => {
  return (
    <div className="main-container py-10 md:py-20 md:px-10 " id="experience">
      <h1 className="text-3xl pb-5 underline text-center font-bold">
        Experience
      </h1>
      
      <div className="projects-container flex flex-col gap-5 md:flex-row mt-12 md:gap-10 space-y-5 md:space-y-0 md:space-x-5 px-10">
        
        {/* Project 1: Rxefy Tech */}
        <div
          className="project hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-100"
          onClick={() => window.open("https://rxefy.com/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img
            className="rounded-full shadow-lg w-32 h-32 p-2 object-contain mx-auto bg-slate-50"
            src={projectImage1}
            alt="Rxefy Tech Logo"
          />
          <h1 className="text-2xl">Software Developer Engineer</h1>
          <p>
            Since July 2024, I’ve been part of the Rxefy team, actively contributing to a wide range of development projects focused on designing, building, and refining user-centric platforms. I work closely with cross-functional teams to deliver innovative features and enhance the overall user experience.
          </p>
        </div>

        {/* Project 2: Wrappid */}
        <div
          className="project hover:bg-gray-300 shadow-lg rounded-xl space-y-3 bg-slate-100 p-5 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-100"
          onClick={() => window.open("https://wrappid.dev/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img
            className="rounded-full shadow-lg w-32 h-32 p-2 object-contain mx-auto bg-slate-50"
            src={projectImage2}
            alt="Wrappid Logo"
            />
          <h1 className="text-2xl">Wrappider (Open-Source Contributor)</h1>
          <p>
            As a Wrappider, I contributed to various aspects of developing Wrappid, an open-source framework. This role enhanced my knowledge of modern development practices, improved my collaborative coding skills, and deepened my engagement with the open-source community.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Experience;
