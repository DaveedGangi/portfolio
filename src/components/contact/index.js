import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./index.css";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sjg8h9b', 'template_cjfq61u', form.current, {
        publicKey: 'YvWU8saMuxvaxblEJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setMessage('Message sent successfully!');
          setTimeout(() => {
            setMessage('');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="contact-me-heading">Contact Me</h2>
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <div>Name</div>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="user-name"
              placeholder="Enter your name.."
              type="text"
              name="user_name"
            />
          </div>
        </div>

        <div className="form-group">
          <div>Email</div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="user-email"
              placeholder="Enter your email.."
              type="email"
              name="user_email"
            />
          </div>
        </div>

        <div className="form-group">
          <div>Message</div>
          <div>
            <textarea
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
          <input className="send" type="submit" value="Send" />
        </div>
      </form>

      {/* Success Message */}
      {message && <div className="message">{message}</div>}
    </div>
  );
};
