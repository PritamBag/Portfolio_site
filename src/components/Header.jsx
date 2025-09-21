import { useState, useEffect } from "react";

const Header = () => {
  const [brandName] = useState("Pritam Bag");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [debugLogs, setDebugLogs] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}`;
    setDebugLogs(prev => [...prev, logEntry]);
    console.log(logEntry);
  };

  // Your reCAPTCHA site key - using test key for now
  const RECAPTCHA_SITE_KEY = "6LfCOtArAAAAAKXCqJBOVGM9DjCmrl89hthCgFqa"; // Google's test key

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const loadRecaptcha = () => {
      addLog('Starting reCAPTCHA loading process...');
      
      // Check if script already exists
      const existingScript = document.querySelector(`script[src*="recaptcha"]`);
      if (existingScript) {
        addLog('reCAPTCHA script already exists in DOM');
        // Wait for grecaptcha to be available
        const checkRecaptcha = setInterval(() => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            addLog('grecaptcha.ready found, initializing...');
            window.grecaptcha.ready(() => {
              addLog('reCAPTCHA is ready!');
              setIsRecaptchaLoaded(true);
            });
            clearInterval(checkRecaptcha);
          }
        }, 100);
        return;
      }

      addLog(`Loading reCAPTCHA script with site key: ${RECAPTCHA_SITE_KEY}`);
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        addLog('reCAPTCHA script loaded successfully');
        if (window.grecaptcha) {
          addLog('grecaptcha object found, waiting for ready...');
          window.grecaptcha.ready(() => {
            addLog('reCAPTCHA is ready after script load!');
            setIsRecaptchaLoaded(true);
          });
        } else {
          addLog('ERROR: grecaptcha object not found after script load');
        }
      };
      script.onerror = (error) => {
        addLog('ERROR: Failed to load reCAPTCHA script - ' + error);
      };
      document.head.appendChild(script);
      addLog('reCAPTCHA script added to DOM');
    };

    loadRecaptcha();
  }, [RECAPTCHA_SITE_KEY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);
  const toggleHireMe = () => {
    setIsHireMeOpen(!isHireMeOpen);
    if (!isHireMeOpen) {
      setFormData({ name: '', email: '', message: '' });
      setDebugLogs([]); // Clear logs when opening modal
      setSubmitStatus(null); // Reset status
      addLog('Hire Me modal opened');
    } else {
      addLog('Hire Me modal closed');
    }
  };

  const menuLinks = [
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Experience", link: "#experience", id: 3 },
    { title: "Skill", link: "#skill", id: 5 },
    { title: "Projects", link: "#projects", id: 4 },
    { title: "Contact", onClick: toggleContactModal, id: 6 },
  ];

  const hireButton = { title: "Hire Me", onClick: toggleHireMe };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async () => {
    addLog('Form submission started');
    setSubmitStatus(null); // Reset status
    
    if (!formData.name || !formData.email || !formData.message) {
      addLog('ERROR: Missing required fields');
      setSubmitStatus('error');
      alert('Please fill in all fields.');
      return;
    }

    addLog(`Form data: Name="${formData.name}", Email="${formData.email}"`);
    setIsSubmitting(true);

    try {
      let token = '';
      
      addLog('Checking if grecaptcha is available...');
      addLog(`window.grecaptcha exists: ${!!window.grecaptcha}`);
      addLog(`window.grecaptcha.execute exists: ${!!(window.grecaptcha && window.grecaptcha.execute)}`);
      addLog(`window.grecaptcha.ready exists: ${!!(window.grecaptcha && window.grecaptcha.ready)}`);
      
      // Wait a bit more for reCAPTCHA to be ready
      if (window.grecaptcha) {
        addLog('Waiting for grecaptcha.ready...');
        await new Promise(resolve => {
          if (window.grecaptcha.ready) {
            window.grecaptcha.ready(() => {
              addLog('grecaptcha.ready callback executed');
              resolve();
            });
          } else {
            addLog('grecaptcha.ready not available, waiting 1 second...');
            setTimeout(() => {
              addLog('Timeout completed, continuing...');
              resolve();
            }, 1000);
          }
        });
      } else {
        addLog('ERROR: window.grecaptcha not available');
      }
      
      // Try to get reCAPTCHA token with multiple attempts
      if (window.grecaptcha && window.grecaptcha.execute) {
        try {
          addLog(`Attempting to execute reCAPTCHA with site key: ${RECAPTCHA_SITE_KEY}`);
          token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
            action: 'hire_me_form'
          });
          addLog(`reCAPTCHA token generated: ${token ? 'SUCCESS' : 'FAILED'}`);
          if (token) {
            addLog(`Token length: ${token.length} characters`);
            addLog(`Token preview: ${token.substring(0, 20)}...`);
          }
        } catch (recaptchaError) {
          addLog(`reCAPTCHA execution error: ${recaptchaError.message}`);
          addLog(`Error details: ${JSON.stringify(recaptchaError)}`);
        }
      } else {
        addLog('ERROR: grecaptcha.execute not available');
      }

      // If we still don't have a token, try one more time after a delay
      if (!token && window.grecaptcha && window.grecaptcha.execute) {
        addLog('First attempt failed, retrying after 1 second delay...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
          addLog('Executing reCAPTCHA retry...');
          token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
            action: 'hire_me_form'
          });
          addLog(`reCAPTCHA retry result: ${token ? 'SUCCESS' : 'FAILED'}`);
          if (token) {
            addLog(`Retry token length: ${token.length} characters`);
          }
        } catch (retryError) {
          addLog(`reCAPTCHA retry error: ${retryError.message}`);
          addLog(`Retry error details: ${JSON.stringify(retryError)}`);
        }
      }

      if (!token) {
        addLog('ERROR: Unable to get reCAPTCHA token after all attempts');
        setSubmitStatus('error');
        alert('Unable to verify reCAPTCHA. Please refresh the page and try again.');
        return;
      }

      addLog('Submitting form data via fetch API...');
      
      // Submit the form using fetch API instead of creating a form
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('g-recaptcha-response', token);

      // Submit the form (we don't need the response variable since we're using no-cors)
      await fetch('https://script.google.com/macros/s/AKfycbyhj1bORvRdzQwYoR3cwdKkU4oT-1S-r0ZbSmKuxWTbSo8rbjZfaNFdrIxQO4wYlqq_/exec', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      addLog('Form submitted successfully via fetch');
      
      // Show success message
      setSubmitStatus('success');
      addLog('Success status set, will reload page shortly');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Reload page after 2 seconds
      setTimeout(() => {
        addLog('Reloading page...');
        window.location.reload();
      }, 2000);

    } catch (error) {
      addLog(`CRITICAL ERROR: ${error.message}`);
      addLog(`Error stack: ${error.stack}`);
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
      addLog('Form submission process completed');
    }
  };

  return (
    <div className="main h-20 border flex justify-between items-center px-4 md:px-16 bg-gray-100" id="home">
      {/* Brand */}
      <h1 className="text-xl md:text-2xl font-bold">{brandName}</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 cursor-pointer">
        {menuLinks.map((link) => (
          <a key={link.id} href={link.link} onClick={link.onClick} className="hover:text-orange-600">
            {link.title}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <div className="hidden md:block">
        <button onClick={hireButton.onClick} className="px-4 py-2 bg-orange-500 rounded-full shadow text-white">
          {hireButton.title}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-100 border-t md:hidden flex flex-col items-center py-4 space-y-4 cursor-pointer">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} onClick={link.onClick} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
          <button onClick={hireButton.onClick} className="px-4 py-2 bg-orange-500 rounded-full text-white">
            {hireButton.title}
          </button>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-2/3 md:w-auto">
            <p className="text-2xl font-bold mb-4 text-center text-slate-700">Contact Information</p>
            <p className="text-lg break-words">
              <span className="font-bold">Connect on LinkedIn - </span>
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
              <button onClick={toggleContactModal} className="px-4 py-2 bg-orange-500 text-white rounded-full mt-6">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      {isHireMeOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-100 px-5 py-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-lg max-h-screen overflow-y-auto">
            <p className="text-2xl font-bold mb-4 text-center text-slate-700">Hire Me</p>

            {/* Status Message */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="font-semibold">Success!</p>
                <p>Your message has been sent successfully. The page will reload shortly.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="font-semibold">Error!</p>
                <p>There was a problem sending your message. Please try again.</p>
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
                required 
                className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500" 
              />
              <textarea 
                name="message" 
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required 
                rows="4"
                className="px-4 py-2 border rounded focus:outline-none focus:border-orange-500 resize-vertical"
              ></textarea>

              <div className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms and Conditions.
              </div>

              <div className="flex justify-center gap-2">
                  <button onClick={toggleHireMe} className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full mt-6 transition-colors">
                    Close
                  </button>

                <button 
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white rounded-full mt-6 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>

              </div>
            </div>

            {/* Debug Logs Section */}
            {/* <div className="mt-4 p-3 bg-gray-50 border rounded max-h-32 overflow-y-auto">
              <p className="text-sm font-semibold text-gray-700 mb-2">Debug Logs:</p>
              {debugLogs.length === 0 ? (
                <p className="text-xs text-gray-500">No logs yet...</p>
              ) : (
                debugLogs.slice(-10).map((log, index) => (
                  <div key={index} className="text-xs text-gray-600 font-mono">
                    {log}
                  </div>
                ))
              )}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;