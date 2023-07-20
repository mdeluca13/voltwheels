import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='contact-header'>Contact Us</h1>
        <p className='contact-content'>
          For any questions or inquiries, you can contact us through the following methods:
        </p>
        <div>
          <h3 className='contact-content'>Team's GitHub Profile:</h3>
          <p className='contact-content'>
            <a
              href="https://github.com/himali-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚗 Himali Panchal
            </a>
          </p>
          <p className='contact-content'>
            <a
              href="https://github.com/JSinc98"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚓 Josh Sinclair
            </a>
          </p>
          <p className='contact-content'>
            <a
              href="https://github.com/mdeluca13"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚕 Megan De Luca
            </a>
          </p>
          <p className='contact-content'>
            <a
              href="https://github.com/beerendan"
              target="_blank"
              rel="noopener noreferrer"
            >
              🏎️ Brendan Bowen
            </a>
          </p>
          <p className='contact-content'>
            <a
              href="https://github.com/Whowlett13"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚙 Wyatt Howlett
            </a>
          </p>
        </div>
        <div>
          <h3 className='contact-content'>Contact Number:</h3>
          <p className='contact-content'>+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className='contact-content'>Email:</h3>
          <p className='contact-content'>
            <a href="mailto:support@voltwheels.com">support@voltwheels.com</a>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactForm;
