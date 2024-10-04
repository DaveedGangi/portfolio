import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./index.css";

export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sjg8h9b', 'template_cjfq61u', form.current, {
        publicKey: 'YvWU8saMuxvaxblEJ',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setFormFeedback('Message sent successfully!');
          setTimeout(() => {
            setFormFeedback(''); // Clear feedback after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormFeedback('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-me-heading">Contact Me</h2>
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="user-name"
              placeholder="Enter your name..."
              type="text"
              name="user_name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="user-email"
              placeholder="Enter your email..."
              type="email"
              name="user_email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="user-message"
              placeholder="Enter your message here..."
              name="message"
            />
          </div>
        </div>

        <div className="form-group">
          <button className="send" type="submit" value="Send">Send</button>
        </div>
      </form>

      {/* Success or Error Message */}
      {formFeedback && <div className="form-feedback">{formFeedback}</div>}
    </div>
  );
};
