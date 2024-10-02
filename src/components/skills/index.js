import React from 'react';
import './index.css'; 

import '@fortawesome/fontawesome-free/css/all.min.css';


const Skills = () => {
  return (
    <div className="skills-section">
    
      <div className="skills-container">
        <div className="skill-item">
          <i className="fab fa-html5"></i>
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-css3-alt"></i>
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-bootstrap"></i>
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-node"></i>
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-python"></i>
          <p>Python</p>
        </div>
        <div className="skill-item">
          <i className="fas fa-database"></i>
          <p>SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
