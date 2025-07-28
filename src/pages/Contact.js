import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>📞 Contact Us</h1>
      <p className="subtitle">We're always here to help you out!</p>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Visit Us</h2>
          <p><strong>Address:</strong> 123 Flame Street, Foodville</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Email:</strong> hello@forkandfire.com</p>
          <div className="map-container">
            <iframe
              title="Fork & Fire Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13220.374636271047!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951d06cfcbab%3A0xcfae9c20a35d0f30!2sFood%20Street!5e0!3m2!1sen!2s!4v1611111111111"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
