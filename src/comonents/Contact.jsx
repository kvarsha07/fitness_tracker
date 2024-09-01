// components/ContactUs.js
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import { Layout } from './Layout';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., send to server)
    setSubmitted(true);
  };

  return (
   <Layout>
      <div className='contact-container'>
<div className="contact-us-container">
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
             
            />
             <PersonIcon/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <EmailIcon/>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="contact"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <LocalPhoneIcon/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <MessageIcon/>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      )}
    </div>
    </div>
   </Layout>
  );
};

export default Contact;
