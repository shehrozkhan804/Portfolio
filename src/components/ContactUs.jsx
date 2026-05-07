import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  const sendEmail = () => {
  const subject = encodeURIComponent("Contact Message");
  const body = encodeURIComponent("Name:\nEmail:\nMessage:");

  window.location.href =
    `mailto:sk1331806@gmail.com?subject=${subject}&body=${body}`;
};
  return (
    <div>

      <motion.h1 className="Contact-title">
        <FaEnvelope className="exp-icon" />
        Contact Me
      </motion.h1>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+92 300 0000000</p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>sk1331806@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Punjab, Pakistan</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM (ONLY STRUCTURE) */}
        <div className="contact-right">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
            
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              
            />

            <textarea
              name="message"
              placeholder="Your Message"
              
            />
          </form>
      <button type="button" onClick={sendEmail}>
  Send Message
</button>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;