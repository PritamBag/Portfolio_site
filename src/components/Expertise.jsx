import { useState } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";
import { HireMeModal } from "./Header"; // Adjust the import path as needed

const Expertise = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const toggleHireModal = () => {
    setIsHireModalOpen(!isHireModalOpen);
  };

  const handleFormSubmit = async (formData) => {
    // This function will be passed to the HireMeModal component
    // You can reuse the same logic from your Header component
    // or create a separate utility function for form submission
    
    let token = '';
    
    // Wait a bit more for reCAPTCHA to be ready
    if (window.grecaptcha) {
      await new Promise(resolve => {
        if (window.grecaptcha.ready) {
          window.grecaptcha.ready(() => resolve());
        } else {
          setTimeout(() => resolve(), 1000);
        }
      });
    }

    // Try to get reCAPTCHA token with multiple attempts
    if (window.grecaptcha && window.grecaptcha.execute) {
      try {
        token = await window.grecaptcha.execute("6Lf6ZNArAAAAALH2x5eIgW2RtN0omdVrt9X5vNxG", {
          action: 'hire_me_form'
        });
      } catch (recaptchaError) {
        console.error('reCAPTCHA execution error:', recaptchaError);
      }
    }

    // If we still don't have a token, try one more time after a delay
    if (!token && window.grecaptcha && window.grecaptcha.execute) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        token = await window.grecaptcha.execute("6Lf6ZNArAAAAALH2x5eIgW2RtN0omdVrt9X5vNxG", {
          action: 'hire_me_form'
        });
      } catch (retryError) {
        console.error('reCAPTCHA retry error:', retryError);
      }
    }

    if (!token) {
      throw new Error('Unable to get reCAPTCHA token');
    }

    // Submit the form using fetch API
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('g-recaptcha-response', token);

    // Submit the form
    await fetch('https://script.google.com/macros/s/AKfycbyBsjNLAE9lWS7xTru3Ooyi_DzZqbXS5p2bUU08hgcW7TG9kMX35_Gp13uw3-hivtbz/exec', {
      method: 'POST',
      body: formDataToSend,
      mode: 'no-cors'
    });
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

      {/* Use the HireMeModal component */}
      <HireMeModal 
        isOpen={isHireModalOpen} 
        onClose={toggleHireModal} 
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Expertise;