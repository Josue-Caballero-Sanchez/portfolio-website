import { React, useEffect } from 'react'
import './App.css'
import { Helmet } from 'react-helmet';

import blog from "./assets/the-financial-posts.png";
import graph from "./assets/graph.png";
import minHeap from "./assets/min-heap.png";
import shoppingCart from "./assets/shopping-cart.png";
import profilePic from "./assets/IMG_0357.jpeg";
import encrypt from "./assets/encryption-thumbnail.png";


function App() {
  window.addEventListener("click", (e) => {
    const navbarLinks = document.querySelector(".navbar-links");
    const headerToggleButton = document.querySelector(".header-toggle-button");

    if (!navbarLinks.contains(e.target) && !headerToggleButton.contains(e.target)) {
      navbarLinks.classList.remove("visible");
    }
  });

  function handleHeaderButtonClick() {
    const navbarLinks = document.querySelector(".navbar-links");
    navbarLinks.classList.toggle("visible");
  }

  function Header() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
        </Helmet>

        <nav className="navbar">
          <div className="main-header-container">
            <p className="header-text">Josue C</p>
            <a href="#" className="header-toggle-button" onClick={handleHeaderButtonClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </div>

          <ul className="navbar-links">
            <li><a href="https://www.canva.com/design/DAGZSz1DKPA/BF90PXtg_x-cwpR9-9C-6g/view?utm_content=DAGZSz1DKPA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2dedfb5ab5" onClick={handleHeaderButtonClick} target='_blank'>Resume</a></li>
            <li><a href="#experience" onClick={handleHeaderButtonClick}>Experience</a></li>
            <li><a href="#projects" onClick={handleHeaderButtonClick}>Projects</a></li>
          </ul>
        </nav>
      </>
    )
  }


  return (
    <>
      <Header/>

      <main className="main">
        <div className="profile-container">
          <img src={profilePic} alt="profile picture" className="profile-picture" />
          <div>
            <h1>Hi, I'm Josue Caballero Sanchez <span className="waving-hand">&#128075;</span></h1>
            <h2>Computer Scientist and Web Developer</h2>
          </div>
        </div>
        
        <p className="paragraph">
            Hi there! I'm a 4th year computer science student at Arizona State University located in Glendale, Arizona.
            I have strong expertise in web design, Java, C++, and C#. Feel free to contact me for 
            opportunities or if you have any questions!
        </p>

        <div className="socials-container">
          <a href="https://www.canva.com/design/DAGZSz1DKPA/BF90PXtg_x-cwpR9-9C-6g/view?utm_content=DAGZSz1DKPA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2dedfb5ab5" target='_blank' className="socials-button">Resume</a>
          <a href="https://www.linkedin.com/in/josue-caballero-sanchez-8aaab9276/" target='_blank' className="socials-icon"><i className="devicon-linkedin-plain colored" style={{ fontSize: '30px' }}></i></a>
          <a href="https://github.com/Josue-Caballero-Sanchez" target='_blank' className="socials-icon"><i className="devicon-github-original" style={{ fontSize: '30px' }}></i></a>
        </div>

        <h1 className="section-2">Tools and Skills</h1>
        <div className="container">
          <div className="skills-container">
            <i className="devicon-react-original colored" style={{ fontSize: '40px'}}></i>
            <p>React</p>
          </div>
          <div className="skills-container">
            <i className="devicon-html5-plain colored" style={{ fontSize: '40px'}}></i>
            <p>HTML</p>
          </div>
          <div className="skills-container">
            <i className="devicon-css3-plain colored" style={{ fontSize: '40px' }}></i>
            <p>CSS</p>
          </div>
          <div className="skills-container">
            <i className="devicon-javascript-plain colored" style={{ fontSize: '40px' }}></i>
            <p>JavaScript</p>
          </div>
          <div className="skills-container">
            <i className="devicon-c-plain colored" style={{ fontSize: '40px' }}></i>
            <p>C</p>
          </div>
          <div className="skills-container">
            <i className="devicon-cplusplus-plain colored" style={{ fontSize: '40px' }}></i>
            <p>C++</p>
          </div>
          <div className="skills-container">
            <i className="devicon-csharp-plain colored" style={{ fontSize: '40px' }}></i>
            <p>C#</p>
          </div>
          <div className="skills-container">
            <i className="devicon-java-plain colored" style={{ fontSize: '40px' }}></i>
            <p>Java</p>
          </div>
          <div className="skills-container">
            <i className="devicon-webpack-plain colored" style={{ fontSize: '40px' }}></i>
            <p>Webpack</p>
          </div>
          <div className="skills-container">
            <i className="devicon-firebase-plain colored" style={{ fontSize: '40px'}}></i>
            <p>Firebase</p>
          </div>
          <div className="skills-container">
            <i className="devicon-postgresql-plain colored" style={{ fontSize: '40px' }}></i>
            <p>PostgreSQL</p>
          </div>
          <div className="skills-container">
            <i className="devicon-linux-plain" style={{ fontSize: '40px' }}></i>
            <p>Linux</p>
          </div>
          <div className="skills-container">
            <i className="devicon-git-plain colored" style={{ fontSize: '40px' }}></i>
            <p>Git</p>
          </div>
          <div className="skills-container">
            <i className="devicon-github-original" style={{ fontSize: '40px' }}></i>
            <p>GitHub</p>
          </div>
        </div>

        <h1 className="section-2" id="experience">Work Experience</h1>
        <div className="work-container">
          <p className="light-grey-small">Mar 2024 - Present, remote</p>
          <h3>Data Annotation</h3>
          <p className="light-grey-small spacing">Programmer - AI Trainer</p>
          <ul className="work-description">
            <li>
              Conducted in-depth evaluations of coding solutions generated by AI models across various
              programming languages, including but not limited to Python, Java, C++, C# and JavaScript
            </li>
            <li>
             Provided detailed feedback on AI model performance and identified areas for improvement
            </li>
          </ul>
        </div>

        <br />

        <div className="work-container">
          <p className="light-grey-small">May 2019 - Mar 2023, Peoria, Az</p>
          <h3>Discount Tire</h3>
          <p className="light-grey-small spacing">Tire Service Technician</p>
          <ul className="work-description">
            <li>
              Mounted, balanced, and repaired tires for consumer and commercial vehicles
            </li>
            <li>
              Worked with customers and learned how to help and communicate with customers
            </li>
          </ul>
        </div>

        <h1 className="section-2" id="projects">Projects</h1>
        <div className="main-container">
          <div className="project-container">
            <img src={shoppingCart} alt="project image" />
            <div className="project-info-container">
              <h3>Shopping Cart Website</h3>
              <p className="project-description">shopping cart application that lets users browse products, view details, and add items to their cart. Powered by the FakeStore API</p>
              <div className="tools-container">
                <div>
                  <i className="devicon-react-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>React</p>
                </div>
                <div>
                  <i className="devicon-html5-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>HTML</p>
                </div>
                <div>
                  <i className="devicon-css3-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>CSS</p>
                </div>
                <div>
                  <i className="devicon-javascript-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="https://2f1020f0.shopping-cart-3b6.pages.dev/" target="_blank">Live Demo</a>
              <a href="https://github.com/Josue-Caballero-Sanchez/shopping-cart" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={blog} alt="project image" />
            <div className="project-info-container">
              <h3>Finance Website/Blog</h3>
              <p className="project-description">Created a fully responsive finance website/blog with HTML, CSS, and JavaScript. Deployed and hosted using Hostinger.com</p>
              <div className="tools-container">
                <div>
                  <i className="devicon-html5-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>HTML</p>
                </div>
                <div>
                  <i className="devicon-css3-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>CSS</p>
                </div>
                <div>
                  <i className="devicon-javascript-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="https://thefinancialposts.com/" target="_blank">Live Demo</a>
              <a href="https://github.com/Josue-Caballero-Sanchez/the-financial-posts" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={encrypt} alt="project image" />
            <div className="project-info-container">
              <h3>Encryption Service</h3>
              <p className="project-description">This project is a RESTful WCF service for encrypting and decrypting messages with a front-end web page built using HTML, CSS, and JavaScript that calls the service</p>
              <div className="tools-container">
              <div>
                  <i className="devicon-csharp-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>C#</p>
                </div>
                <div>
                  <i className="devicon-html5-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>HTML</p>
                </div>
                <div>
                  <i className="devicon-css3-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>CSS</p>
                </div>
                <div>
                  <i className="devicon-javascript-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="https://github.com/Josue-Caballero-Sanchez/encryption-service" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={graph} alt="project image" />
            <div className="project-info-container">
              <h3>Graph Data Structure</h3>
              <p className="project-description">This project implements a graph data structure using JGraphT and Graphviz as well as JUnit for testing. It includes functionalities to create, modify, and query graphs as well as exporting them</p>
              <div className="tools-container">
              <div>
                  <i className="devicon-java-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>Java</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="https://github.com/Josue-Caballero-Sanchez/graph-data-structure" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={minHeap} alt="project image" />
            <div className="project-info-container">
              <h3>Min-Heap</h3>
              <p className="project-description">This project implements a Min-Heap data structure in C++, supporting operations such as insertion, deletion, decreasing a key, and heap construction from a file</p>
              <div className="tools-container">
              <div>
                  <i className="devicon-cplusplus-plain colored" style={{ fontSize: '35px' }}></i>
                  <p>C++</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="https://github.com/Josue-Caballero-Sanchez/min-heap-data-structure" target="_blank">GitHub Page</a>
            </div>
          </div>
          
        </div>
      </main>
    </>
  )
}

export default App
