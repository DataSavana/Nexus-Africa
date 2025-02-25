import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show pop-up
    setShowPopup(true);

    // Hide pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
