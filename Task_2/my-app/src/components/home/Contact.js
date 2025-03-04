import React from 'react';
import '../../styles/style_home.css';

function Contact() {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-left">
          <h2>Building stellar websites for early startups</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="contact-right">
          <h3>Send inquiry</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Paste your Figma design URL" />
            <button type="submit">Send an Inquiry</button>
          </form>
          <a href="#">Get in touch with us &#8594;</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;