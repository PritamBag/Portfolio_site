export const RECAPTCHA_SITE_KEY = "6Lf6ZNArAAAAALH2x5eIgW2RtN0omdVrt9X5vNxG";

export const loadRecaptchaScript = () => {
  const existingScript = document.querySelector('script[src*="recaptcha"]');

  if (existingScript) {
    return;
  }

  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

export const submitContactForm = async (formData) => {
  let token = "";

  if (window.grecaptcha) {
    await new Promise((resolve) => {
      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve());
      } else {
        setTimeout(() => resolve(), 1000);
      }
    });
  }

  if (window.grecaptcha && window.grecaptcha.execute) {
    try {
      token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "hire_me_form",
      });
    } catch (error) {
      throw new Error("reCAPTCHA failed");
    }
  }

  if (!token) {
    throw new Error("reCAPTCHA token not generated");
  }

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);
  formDataToSend.append("g-recaptcha-response", token);

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyBsjNLAE9lWS7xTru3Ooyi_DzZqbXS5p2bUU08hgcW7TG9kMX35_Gp13uw3-hivtbz/exec",
    {
      method: "POST",
      body: formDataToSend,
    }
  );

  const text = await response.text();

  if (text !== "Success") {
    throw new Error(text || "Backend rejected submission");
  }
};
