import React from 'react';
import './index.css'; 

import '@fortawesome/fontawesome-free/css/all.min.css';

 const skills = [
    { name: "HTML", icon: "fab fa-html5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "fab fa-css3-alt", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", link: "https://getbootstrap.com/docs/" },
    { name: "JavaScript", icon: "fab fa-js", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: "fab fa-react", link: "https://reactjs.org/docs/getting-started.html" },
    { name: "Node.js", icon: "fab fa-node", link: "https://nodejs.org/en/docs" },
    { name: "Python", icon: "fab fa-python", link: "https://docs.python.org/3/" },
    { name: "SQL", icon: "fas fa-database", link: "https://www.w3schools.com/sql/" },
    { name: "MongoDB", icon: "fab fa-envira", link: "https://www.mongodb.com/docs/" }
  ];

const Skills = () => {
  return (
  
      <div className="skills-section">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-item"
            title={`Learn more about ${skill.name}`}
            onClick={() => window.open(skill.link, '_blank')}
          >
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Skills;
