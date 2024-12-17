import { React, useState, useEffect } from 'react'
import './App.css'
import { Helmet } from 'react-helmet';

import blog from "./assets/the-financial-posts.png";
import resume from "./assets/cv-app.png";
import weather from "./assets/weather-app.png";
import graph from "./assets/graph.png";
import minHeap from "./assets/min-heap.png";
import battleship from "./assets/battleship.png"


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            <li><a href="#projects" onClick={handleHeaderButtonClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleHeaderButtonClick}>Contact</a></li>
          </ul>
        </nav>
      </>
    )
  }


  return (
    <>
      <Header/>

      <main className="main">
        <p className={`name ${isLoaded ? "animated" : ""}`}>Josue Caballero Sanchez</p>
        <p className={`name occupation ${isLoaded ? "animated" : ""}`}>Computer Scientist</p>
        <p className="arrow">&#8595;</p>

        <h1 className="section">About</h1>
        <p className="paragraph">
            Hi there! I am currently a 4th year computer science student at ASU with expertise in HTML, CSS, JavaScript, React, Java,
            C++, and C#. I have hands-on experience collaborating in a team using Scrum methodologies and Git to
            develop a React Native mobile application. I am actively seeking internship or job opportunities where I can
            apply and further develop my skills as a programmer.
        </p>

        <h1 className="section-2">Tools and Skills</h1>
        <div className="container">
          <div className="center-text">
            <h2>Languages</h2>
            <div className="skills-container">
              <div>
                <i className="devicon-html5-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>HTML</p>
              </div>
              <div>
                <i className="devicon-css3-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>CSS</p>
              </div>
              <div>
                <i className="devicon-javascript-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>JavaScript</p>
              </div>
              <div>
                <i className="devicon-cplusplus-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>C++</p>
              </div>
              <div>
                <i className="devicon-c-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>C</p>
              </div>
              <div>
                <i className="devicon-csharp-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>C#</p>
              </div>
              <div>
                <i className="devicon-java-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Java</p>
              </div>
          
            </div>
          </div>

          <div className="center-text">
            <h2>Miscellaneous</h2>
            <div className="skills-container">
            <div>
                <i className="devicon-react-original" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>React</p>
              </div>
              <div>
                <i className="devicon-webpack-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Webpack</p>
              </div>
              <div>
                <i className="devicon-npm-original-wordmark" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>npm</p>
              </div>
              <div>
                <i className="devicon-linux-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Linux</p>
              </div>
              <div>
                <i className="devicon-git-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Git</p>
              </div>
              <div>
                <i className="devicon-github-original" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>GitHub</p>
              </div>
              <div>
                <i className="devicon-unity-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Unity</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="section-2" id="projects">Projects</h1>
        <div className="main-container">
          <div className="project-container">
            <img src={blog} alt="project image" />
            <h1>Finance Website</h1>
            <div>Created a finance website with HTML, CSS, and JavaScript</div>
            <h3>Built with:</h3>
            <div className="tools-container">
              <div>
                <i className="devicon-html5-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>HTML</p>
              </div>
              <div>
                <i className="devicon-css3-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>CSS</p>
              </div>
              <div>
                <i className="devicon-javascript-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://thefinancialposts.com/" target="_blank">Live Demo</a>
            </div>
          </div>

          <div className="project-container">
            <img src={resume} alt="project image" />
            <h1>Resume Builder Webpage</h1>
            <div>Resume Builder app created with React, HTML, CSS, and JavaScript. Deployed on Cloudflare</div>
            <h3>Built with:</h3>
            <div className="tools-container">
              <div>
                <i className="devicon-react-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>React</p>
              </div>
              <div>
                <i className="devicon-html5-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>HTML</p>
              </div>
              <div>
                <i className="devicon-css3-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>CSS</p>
              </div>
              <div>
                <i className="devicon-javascript-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://ba9b29cd.cv-application-63l.pages.dev/" target="_blank">Live Demo</a>
              <a href="https://github.com/Josue-Caballero-Sanchez/cv-application" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={graph} alt="project image" />
            <h1>Graph Data Structure</h1>
            <div>Graph data structure created in Java. Uses JUnit to test functions</div>
            <h3>Built with:</h3>
            <div className="tools-container">
            <div>
                <i className="devicon-java-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Java</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://github.com/Josue-Caballero-Sanchez/graph-data-structure" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={minHeap} alt="project image" />
            <h1>Min-Heap Data Structure</h1>
            <div>Min heap data structure created in C++. Allows user to interact and use min-heap functions</div>
            <h3>Built with:</h3>
            <div className="tools-container">
            <div>
                <i className="devicon-cplusplus-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>C++</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://github.com/Josue-Caballero-Sanchez/min-heap" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={weather} alt="project image" />
            <h1>Weather Webpage</h1>
            <div>Weather app created with HTML, CSS, and JavaScript. Uses API calls to get data</div>
            <h3>Built with:</h3>
            <div className="tools-container">
              <div>
                <i className="devicon-html5-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>HTML</p>
              </div>
              <div>
                <i className="devicon-css3-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>CSS</p>
              </div>
              <div>
                <i className="devicon-javascript-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://josue-caballero-sanchez.github.io/weather-app/" target="_blank">Live Demo</a>
              <a href="https://github.com/Josue-Caballero-Sanchez/weather-app" target="_blank">GitHub Page</a>
            </div>
          </div>

          <div className="project-container">
            <img src={battleship} alt="project image" />
            <h1>Battleship Game</h1>
            <div>Battleship game created with HTML, CSS, and JavaScript. Compiled using webpack</div>
            <h3>Built with:</h3>
            <div className="tools-container">
              <div>
                <i className="devicon-html5-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>HTML</p>
              </div>
              <div>
                <i className="devicon-css3-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>CSS</p>
              </div>
              <div>
                <i className="devicon-javascript-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>JavaScript</p>
              </div>
              <div>
                <i className="devicon-webpack-plain" style={{ fontSize: '50px', color: 'white' }}></i>
                <p>Webpack</p>
              </div>
            </div>
            <div className="button-container">
              <a href="https://josue-caballero-sanchez.github.io/battleship/dist/" target="_blank">Live Demo</a>
              <a href="https://github.com/Josue-Caballero-Sanchez/battleship" target="_blank">GitHub Page</a>
            </div>
          </div>
          
        </div>

        <h1 className="section-2" id="contact">Contact</h1>
        <div className="main-container">
          <a href="https://www.linkedin.com/in/josue-caballero-sanchez-8aaab9276/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Josue-Caballero-Sanchez" target="_blank">GitHub</a>
          <a href="https://www.canva.com/design/DAGZSz1DKPA/BF90PXtg_x-cwpR9-9C-6g/view?utm_content=DAGZSz1DKPA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2dedfb5ab5" target="_blank">Resume</a>
          <p>sanchez684.jc@gmail.com</p>
        </div>
      </main>
    </>
  )
}

export default App
