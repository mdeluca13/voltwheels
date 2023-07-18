import React from 'react';

const ContactForm = () => {
  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <p>
        For any questions or inquiries, you can contact us through the following methods:
      </p>
      <div>
        <h3>Team's GitHub Profile:</h3>
        <p>
          <a
            href="https://github.com/himali-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Himali Panchal
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JSinc98"
            target="_blank"
            rel="noopener noreferrer"
          >
            Josh Sinclair
          </a>
        </p>
        <p>
          <a
            href="https://github.com/mdeluca13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Megan De Luca
          </a>
        </p>
        <p>
          <a
            href="https://github.com/beerendan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brendan Bowen
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Whowlett13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wyatt Howlett
          </a>
        </p>
      </div>
      <div>
        <h3>Contact Number:</h3>
        <p>+1 (555) 123-4567</p>
      </div>
      <div>
        <h3>Email:</h3>
        <p>
          <a href="mailto:support@voltwheels.com">support@voltwheels.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
