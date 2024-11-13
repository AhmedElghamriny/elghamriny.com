import React, { useState } from 'react';

import './Contact.css';

import { Navbar, TitleBar10 } from '../../components';

import { earthSpinning } from '../../assets';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false); // State to control success message popup


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "da2d12e1-10dc-44e4-8a21-3540fdba75a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowMessage(true); // Show success message
      event.target.reset(); // Clear the form

      // Hide the success message after 3 seconds
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className='contact'>
      <Navbar />
      <TitleBar10 title="Contact" backgroundColor="black" color="white" />

      <div className='contact-content'>
        <form className='contact-form' onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='fullName'>Name</label>
            <input type='text' id='fullName' name='fullName' placeholder='Enter your full name' required />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Enter your email' required />
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' placeholder='Your message here...' rows='5' required></textarea>
          </div>

          <button type='submit' className='submit-button'>Send Message</button>
        </form>

        {/* Success Message Popup */}
        {showMessage && (
          <div className="success-popup">
            Message has been sent to Ahmed's inbox!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;