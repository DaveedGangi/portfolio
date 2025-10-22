import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import InitialAnimation from "./components/initial/InitialAnimation.js";

import Home from "./components/home";
import Work from "./components/work";
import ChatBot from "./components/chatbot/index.js";
import "./App.css";

class App extends Component {
  state = {
    showAnimation: true,
  };

  handleAnimationEnd = () => {
    this.setState({ showAnimation: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showAnimation: false });
    }, 4000); // Change duration as needed

        // Load the Dialogflow Messenger script dynamically
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);
  }

  render() {
    const { showAnimation } = this.state;

    return (
      <div>
        {showAnimation && <InitialAnimation onAnimationEnd={this.handleAnimationEnd} />}
        
        {!showAnimation && (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/work" component={Work} />
            </Switch>

          {/* Dialogflow Messenger Component */}
          {/*
          <df-messenger
              chat-icon="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?w=740&st=1718261464~exp=1718262064~hmac=ff5527dee568fee0a0bfbff2c2582f6f91e7d184c0391f70295e31d688b8705b"
              intent="WELCOME"
              chat-title="DaveedBot"
              agent-id="7dbc5cd0-9536-48da-bd38-7bd988282d91"
              language-code="en"
            ></df-messenger>

            */}
          

          <ChatBot/>










            <footer className="footer">
              <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} All rights reserved by Daveed.</p>
                <br />
                <div className="footer-links">
                  <a href="https://www.linkedin.com/in/g-daveed-365958190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    LinkedIn
                  </a>
                  <a href="https://x.com/Daveed53460412" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  <a href="https://github.com/DaveedGangi" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://wa.me/9573230254" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a href="tel:+919573230254">
                    +919573230254
                  </a>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    );
  }
}

export default App;
