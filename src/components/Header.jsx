import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

// HireMeModal component
const HireMeModal = ({ isOpen, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Frontend required field validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      alert('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Call parent onSubmit which handles fetch
      await onSubmit(formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Close modal after 2s and reload page immediately
      setTimeout(() => {
        onClose();          // Close modal
        window.location.reload(); // Reload page immediately
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      alert(error.message || 'Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-100 px-5 py-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-lg max-h-screen overflow-y-auto">
        <p className="text-2xl font-bold mb-4 text-center text-slate-700">Hire Me</p>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="font-semibold">Success!</p>
            <p>Your message has been sent successfully. The modal will close shortly.</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-semibold">Error!</p>
            <p>There was a problem sending your message. Please check your input and try again.</p>
          </div>
        )}

        {/* Form Fields */}
        <div className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            maxLength={100}
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
            maxLength={100}
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500" 
          />
          <textarea 
            name="message" 
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            maxLength={1000}
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500 resize-vertical"
          ></textarea>

          <div className="text-sm text-gray-600 text-center">
            By submitting this form, you agree to our Privacy Policy and Terms and Conditions.
          </div>

          <div className="flex justify-center gap-2">
            <button 
              onClick={onClose} 
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-6 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white rounded-full mt-6 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HireMeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

// Header Component
const Header = () => {
  const [brandName] = useState("Pritam Bag");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const RECAPTCHA_SITE_KEY = "6Lf6ZNArAAAAALH2x5eIgW2RtN0omdVrt9X5vNxG";

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const existingScript = document.querySelector(`script[src*="recaptcha"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);
  const toggleHireMe = () => setIsHireMeOpen(!isHireMeOpen);

  const menuLinks = [
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Experience", link: "#experience", id: 3 },
    { title: "Skill", link: "#skill", id: 5 },
    { title: "Projects", link: "#projects", id: 4 },
    { title: "Contact", onClick: toggleContactModal, id: 6 },
  ];

  const hireButton = { title: "Hire Me", onClick: toggleHireMe };

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    let token = '';

    // Wait for reCAPTCHA ready
    if (window.grecaptcha) {
      await new Promise(resolve => {
        if (window.grecaptcha.ready) window.grecaptcha.ready(() => resolve());
        else setTimeout(() => resolve(), 1000);
      });
    }

    // Get reCAPTCHA token
    if (window.grecaptcha && window.grecaptcha.execute) {
      try {
        token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'hire_me_form' });
      } catch (err) {
        throw new Error('reCAPTCHA failed');
      }
    }

    if (!token) throw new Error('reCAPTCHA token not generated');

    // Send form to backend
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('g-recaptcha-response', token);

    const response = await fetch('https://script.google.com/macros/s/AKfycbyBsjNLAE9lWS7xTru3Ooyi_DzZqbXS5p2bUU08hgcW7TG9kMX35_Gp13uw3-hivtbz/exec', {
      method: 'POST',
      body: formDataToSend,
    });

    const text = await response.text();

    if (text !== 'Success') {
      throw new Error(text || 'Backend rejected submission');
    }
  };

  return (
    <div className="main h-20 border flex justify-between items-center px-4 md:px-16 bg-gray-100" id="home">
      <h1 className="text-xl md:text-2xl font-bold">{brandName}</h1>

      <div className="hidden md:flex space-x-6 cursor-pointer">
        {menuLinks.map(link => (
          <a key={link.id} href={link.link} onClick={link.onClick} className="hover:text-orange-600">{link.title}</a>
        ))}
      </div>

      <div className="hidden md:block">
        <button onClick={hireButton.onClick} className="px-4 py-2 bg-orange-500 rounded-full shadow text-white">
          {hireButton.title}
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-100 border-t md:hidden flex flex-col items-center py-4 space-y-4 cursor-pointer">
          {menuLinks.map(link => (
            <a key={link.id} href={link.link} onClick={link.onClick} className="hover:text-orange-600">{link.title}</a>
          ))}
          <button onClick={hireButton.onClick} className="px-4 py-2 bg-orange-500 rounded-full text-white">{hireButton.title}</button>
        </div>
      )}

      {isContactModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-auto">
            <p className="text-2xl font-bold mb-4 text-center text-slate-700">Contact Information</p>
            <p className="text-lg break-words">
              <span className="font-bold">Connect on LinkedIn - </span>
              <a href="https://www.linkedin.com/in/pritam-bag" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-700">
                https://www.linkedin.com/in/pritam-bag
              </a>
            </p>
            <div className="flex justify-center">
              <button onClick={toggleContactModal} className="px-4 py-2 bg-orange-500 text-white rounded-full mt-6">Close</button>
            </div>
          </div>
        </div>
      )}

      <HireMeModal 
        isOpen={isHireMeOpen} 
        onClose={toggleHireMe} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default Header;
export { HireMeModal };
