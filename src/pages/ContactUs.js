import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Your form submission logic goes here
  };

  return (
    <div>
     
      <main>
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li><i className="fa fa-phone"></i> 555-555-5555</li>
              <li><i className="fa fa-envelope"></i> contact@example.com</li>
              <li><i className="fa fa-map-marker"></i> 123 Main Street, Anytown USA</li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Your Message" rows="5" style={{width: 264, height: 40}} value={formData.message} onChange={handleInputChange} required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default ContactUs;