import { Component } from "react";
import { ContactUs } from "../contact";
import Lottie from "lottie-react";
import { Link as ScrollLink } from "react-scroll";
import {Link} from "react-router-dom";

import { IoMenu } from "react-icons/io5";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { ReactTyped } from "react-typed";

import Skills from "../skills";

import groovyWalkAnimation from "./groovyWalk.json";

import "./index.css";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class Home extends Component {
  state = {
    lat: 17.95394,
    lon: 78.624727,
    showingItems:false
  };

  show=()=>{
    this.setState(prevState=>({showingItems:!prevState.showingItems}));
  }

  render() {
    const { lat, lon,showingItems} = this.state;
    return (
      <div>
        {/* Navbar */}
        <div className="nav-bar">
          <div>Daveed</div>
     
          <div className="nav-items">
            <div>
              <ScrollLink to="about" smooth={true} duration={500}>
                About Me
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
              </ScrollLink>
            </div>
            
            <div>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </div>
          </div>


        </div>

        <div className="nav-bar-smaller">
           <div>
            Daveed
           </div>
           <div>
            <button onClick={this.show} className={showingItems?"hamberg-menu-off":"hamberg-menu-on"}  type="button">
            <IoMenu size={33} />
            </button>
           </div>
          
        </div>

        <div className={showingItems?"showItems":"hideItems"}>
             <ScrollLink to="about" smooth={true} duration={500}>
                About Me
             </ScrollLink>
             <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
             </ScrollLink>
             <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
             </ScrollLink>
            
               
            
           </div>



        {/* Hero Section */}
        <header className="hero-section">
          <div>
            <img
              className="hero-image"
              src="https://i.ibb.co/T4YX7Jh/IMG-20221229-170952.jpg"
              alt="not-found-image"
            />
          </div>
          {/* Dynamic Typing for Name and Profession */}
          <ReactTyped
            className="typed-text"
            strings={["Hello, I'm Daveed", "Web Developer", "Designer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p>I create interactive, responsive, and high-quality web applications.</p>
          <Link to="/work" className="cta-btn">
            View My Work
          </Link>
        </header>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>

Hello! I’m Daveed, a passionate and dedicated web developer with a strong focus on building interactive and high-quality web applications. With experience in HTML, CSS, JavaScript, React, Node.js, and more, I specialize in creating visually appealing, responsive, and user-friendly websites.<br/>

I thrive in environments where creativity and problem-solving come together, allowing me to craft unique digital experiences. My work is driven by a deep passion for design and functionality, ensuring that every project I develop not only looks good but also performs flawlessly.<br/>

Whether I’m coding dynamic front-end features or handling complex back-end logic, my goal is to always deliver efficient, scalable, and innovative solutions tailored to meet the needs of users and businesses alike.<br/>

Let’s create something great together!


          </p>
        </section>

        <br/>
        <br/>

        {/* Lottie Animation */}

       
       
        <section id="skills">
          
        <h2 className="skills-heading">My Skills</h2>
        <div className="lottie-container">
          <Lottie animationData={groovyWalkAnimation} />
         
        </div>
       
          <Skills/>
         
        </section>
        


        {/* Map Section */}
        <MapContainer center={[lat, lon]} zoom={13} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lon]}>
          <Popup>Daveed is here — let's build something awesome!</Popup>
          </Marker>
        </MapContainer>












        {/* Contact Section */}
        <section id="contact" style={{ height: "100vh", background: "lightyellow" }}>
          <ContactUs />
        </section>




  







        
      </div>
    );
  }
}

export default Home;
