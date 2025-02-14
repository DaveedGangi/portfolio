import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

class Work extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar-for-work">
            <div>Daveed</div>
            <div><Link to="/">Home</Link></div>

        </div>
        <h2>My Projects</h2>
        <p className="work-para">
        "Welcome to my portfolio! Below is a collection of projects that showcase my skills in web development, ranging from dynamic web applications to engaging user interfaces. Each project reflects my passion for creating efficient, scalable, and visually appealing solutions.<br/><br/> I've employed various tools and technologies, including React, third-party packages, and API integrations, to deliver interactive and functional user experiences. Feel free to explore the projects by clicking the links, and don’t hesitate to reach out if you'd like to learn more about my work!"
        </p>

        <div className="work-container">

        <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/tp5tZT5D/Screenshot-2025-02-14-182419.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Simple Calculator</h5>
                        <p className="card-text">The Simple Calculator App is designed to provide users with an easy-to-use tool for performing basic arithmetic operations. Whether you need to add, subtract, multiply, or divide, this app offers a straightforward interface to handle all your basic mathematical needs. </p>
                        <a href="https://daveedsimplecalculator.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Simple Calculator<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


        <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/1vRBsYC/Screenshot-2024-10-04-115254.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">CareerLaunch</h5>
                        <p className="card-text">"CareerLaunch is a job exploration platform where users can discover and bookmark jobs of interest with ease. Upon clicking on job listings, users have the option to save them for later reference using local storage, ensuring that their bookmarked jobs persist even across sessions. This feature provides a seamless and intuitive job search experience, tailored for convenience and efficiency." </p>
                        <a href="https://jobsandbookmarksdaveedgangi.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-primary">Go CareerLaunch <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

        <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/qnwXWn6/Screenshot-2024-10-04-114716.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Chatbot</h5>
                        <p className="card-text">"I've created a dynamic chatbot using Google Dialogflow, designed to engage users with conversational intelligence. The chatbot includes a small talk feature that allows it to respond naturally to casual conversations. It can handle greetings, basic questions, and polite interactions, making the user experience more engaging and personable." </p>
                        <a href="https://chatbotdaveed.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Chatbot <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

        <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/vYnn2VX/Screenshot-2024-10-02-230711.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">BreezeCast App</h5>
                        <p className="card-text">BreezeCast is a weather application designed to provide real-time weather information for cities around the world. With a clean, user-friendly interface, BreezeCast allows users to easily search for and view detailed weather conditions including temperature, humidity, wind speed, and more. The app is built using modern web technologies to ensure a seamless and responsive experience across devices.  </p>
                        <a href="https://weatherappdaveed.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-primary">Go BreezeCast App <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/VNr2phf/Screenshot-2024-03-11-110504.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Prime Video</h5>
                        <p className="card-text">I developed a simple application for Prime Video using React.I used some third-party packages to enhance the functionality and appearance of the application, such as react-player, react-slick and react-popup.
                        </p>
                        <a href="https://DaveedPrimeVi.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Prime Video <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

          
            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/PDGdCmn/Screenshot-2023-12-09-223058.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Nxt Trendz</h5>
                        <p className="card-text">I built a web app called Nxt Trendz using React. The app also has authentication features.

To test the app, you can use these credentials:

Prime User credentials

username: rahul
password: rahul@2021

Non-Prime User credentials

username: raja
password: raja@2021.  </p>
                        <a href="https://daveednextt.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Nxt Trendz <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/9nH6wsW/Screenshot-2024-10-04-120903.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Jobby App</h5>
                        <p className="card-text">"Jobby App is a comprehensive job exploration platform where users can search through a wide variety of job listings and view detailed company information with just a click. The intuitive interface allows for easy navigation, making job hunting efficient and straightforward. Users can log in using the provided credentials (username: rahul, password: rahul@2021) to access job details and explore opportunities tailored to their interests."
 </p>
                        <a href="https://daveedjobby.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Jobby App <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/4Y7fhW4/Screenshot-2023-12-09-221825.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Github Popular Repos</h5>
                        <p className="card-text">This project is a web application that allows users to browse and view the most popular repositories on Github based on the selected programming language and a brief description of the repository. </p>
                        <a href="https://daveedpopularre.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Github Popular Repos <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/KjFxnfV/Screenshot-2023-12-09-220950.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Events App</h5>
                        <p className="card-text">Events is the ultimate app for finding and booking the best events near you. Whether you are looking for concerts, festivals, sports, comedy, theater, or anything else, Events has you covered. </p>
                        <a href="https://daveedevents.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Events App <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>



            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/fpJjcWb/Screenshot-2023-12-09-220212.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Stopwatch </h5>
                        <p className="card-text">Stopwatch is a simple and elegant app that lets you track time with ease. Whether you need to measure your workouts, cooking, studying, or any other activity, Stopwatch has you covered. </p>
                        <a href="https://daveedstopwatch.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Stopwatch<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/m6LLYWM/Screenshot-2023-12-09-215320.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">IPL Dashboard App</h5>
                        <p className="card-text">The IPL dashboard is a web application that provides insights and analytics on the Indian Premier League (IPL), a professional cricket league in India. </p>
                        <a href="https://daveedipldashbo.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go IPL Dashboard App<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/1J4gbFf/Screenshot-2023-12-09-213507.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Fetch and Routing</h5>
                        <p className="card-text">Fetch and routing are two important concepts in web development. Fetch refers to the process of sending requests to a server and receiving responses. </p>
                        <a href="https://daveedfetchrou.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Fetch and Routing<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/dcRP7NP/Screenshot-2023-12-09-212609.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Blog List</h5>
                        <p className="card-text">Here you will find a list of my latest posts on various topics You can browse the list by clicking on the Home tab at the top of the page.</p>
                        <a href="https://daveedbloglist.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Blog List<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/FgVrrG0/Screenshot-2023-12-09-211936.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Match Game</h5>
                        <p className="card-text">Match Game is a fun and challenging game where you have to click on the top image that matches one of the images below. </p>
                        <a href="https://DaveedMatchGame.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Match Game<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/xDN5JP9/Screenshot-2023-11-14-171822.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Password Manager App</h5>
                        <p className="card-text">A simple password manager app with React.It allows users to add, delete and show their passwords. </p>
                        <a href="https://DaveedPasswordM.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Password Manager<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/RhLrC2k/Screenshot-2023-11-15-112520.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Emoji Game</h5>
                        <p className="card-text">The emoji game is a fun and challenging memory game.Click on different emoji you will get one pont. </p>
                        <a href="https://DaveedEmojiGame.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Emoji Game<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/VHhHdz5/Screenshot-2023-11-15-113425.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Coin Toss Game</h5>
                        <p className="card-text">A coin toss game is a simple application that simulates the flipping of a coin. </p>
                        <a href="https://DaveedCoinToss.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Coin Toss Game<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/5KDbCyB/Screenshot-2024-03-11-104658.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">App Store</h5>
                        <p className="card-text">App store is a simple application that allows users to browse.Users can also search for specific apps using the search bar. </p>
                        <a href="https://DaveedAppStore.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go App Store<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/VpqFK36/Screenshot-2023-11-15-114746.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Comments</h5>
                        <p className="card-text">Write down the comments , delete the comments ,like the comment. </p>
                        <a href="https://DaveedCommentAp.ccbp.tech" target="_blank" rel="noreferrer" class="btn btn-primary">Go Comments<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/y5czsN5/Screenshot-2024-03-25-011315.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Todo Project</h5>
                        <p className="card-text">A todo app can also help you track your progress. A todo app can be a useful tool for personal and professional productivity. </p>
                        <a href="https://daveedtodos.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Todo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>

            <div className="card">
                    <img className="card-img-top" src="https://i.ibb.co/xh208Tx/Screenshot-2023-10-23-142312.png" alt="not-found"/>
                    <div className="card-body">
                        <h5 className="card-title">Travel Blog</h5>
                        <p className="card-text">If you love to explore new places and cultures, you might enjoy reading a travel blog. </p>
                        <a href="https://gdaveedtourism.ccbp.tech/" target="_blank" rel="noreferrer" class="btn btn-primary">Go Travel Blog<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>


        </div>
      </div>
    );
  }
}

export default Work;