import {Component} from "react"

import {Route,Switch} from "react-router-dom"

import Home from "./components/home"

import Work from "./components/work"

import  "./App.css"

class App extends Component {
    render() {
        return (
            <div>
               
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
            </Switch>

            <footer className="footer">
              <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} All rights reserved by Daveed.</p>
    <br/>
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


            </div>
        )
    }
}

export default App