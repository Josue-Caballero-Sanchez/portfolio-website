import styles from "./Projects.module.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiCplusplus, SiWebpack } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";
import reactStorefront from "../../assets/react-storefront.png";
import battleship from "../../assets/battleship.png";
import graphDataStructure from "../../assets/graph-data-structure.png";
import encryptionService from "../../assets/encryption-service.png";
import minHeap from "../../assets/min-heap.png";

function Projects() {
  return (
    <section className={styles.projects__section}>
      <div className={styles.project__container}>
        <img src={reactStorefront} alt="React Storefront Thumbnail" />
        <div className={styles.project__info__container}>
          <p className={styles.project__title}>React Storefront</p>
          <p>
            A mock storefront website built with React, TypeScript, and a
            Node.js/Express backend with the DummyJSON API. Features include
            product browsing, product searching, a cart, and favorites
            management.
          </p>
          <div className={styles.project__tech__container}>
            <FaReact
              className={`${styles.react__icon} ${styles.skill__icon}`}
            />
            <FaHtml5 className={`${styles.html__icon} ${styles.skill__icon}`} />
            <FaCss3Alt
              className={`${styles.css__icon} ${styles.skill__icon}`}
            />
            <BiLogoTypescript
              className={`${styles.typescript__icon} ${styles.skill__icon}`}
            />
            <FaNodeJs
              className={`${styles.nodejs__icon} ${styles.skill__icon}`}
            />
            <SiExpress className={styles.skill__icon} />
          </div>
          <div className={styles.buttons__container}>
            <a
              href="https://react-storefront-frontend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiGlobe />
              Live Demo
            </a>
            <a
              href="https://github.com/Josue-Caballero-Sanchez/react-storefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Page
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__container}>
        <img src={battleship} alt="Battleship Thumbnail" />
        <div className={styles.project__info__container}>
          <p className={styles.project__title}>Battleship Web Game</p>
          <p>
            Battleship Web game created with HTML, CSS, JavaScript, and Webpack.
            Features include placing your ships, receiving visual feedback
            during gameplay, and playing against a computer opponent.
          </p>
          <div className={styles.project__tech__container}>
            <FaHtml5 className={`${styles.html__icon} ${styles.skill__icon}`} />
            <FaCss3Alt
              className={`${styles.css__icon} ${styles.skill__icon}`}
            />
            <IoLogoJavascript
              className={`${styles.javascript__icon} ${styles.skill__icon}`}
            />
            <SiWebpack
              className={`${styles.webpack__icon} ${styles.skill__icon}`}
            />
          </div>
          <div className={styles.buttons__container}>
            <a
              href="https://josue-caballero-sanchez.github.io/battleship/dist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiGlobe />
              Live Demo
            </a>
            <a
              href="https://github.com/Josue-Caballero-Sanchez/battleship"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Page
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__container}>
        <img src={encryptionService} alt="Encryption Service Thumbnail" />
        <div className={styles.project__info__container}>
          <p className={styles.project__title}>Encryption Service</p>
          <p>
            A RESTful WCF service for encrypting and decrypting messages with a
            front-end web page that calls the service. Built with C#, ASP.NET,
            HTML, CSS, and JavaScript
          </p>
          <div className={styles.project__tech__container}>
            <TbBrandCSharp
              className={`${styles.csharp__icon} ${styles.skill__icon}`}
            />
            <AiOutlineDotNet
              className={`${styles.dotnet__icon} ${styles.skill__icon}`}
            />
            <FaHtml5 className={`${styles.html__icon} ${styles.skill__icon}`} />
            <FaCss3Alt
              className={`${styles.css__icon} ${styles.skill__icon}`}
            />
            <IoLogoJavascript
              className={`${styles.javascript__icon} ${styles.skill__icon}`}
            />
          </div>
          <div className={styles.buttons__container}>
            <a
              href="http://github.com/Josue-Caballero-Sanchez/encryption-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Page
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__container}>
        <img src={graphDataStructure} alt="Graph Data Structure Thumbnail" />
        <div className={styles.project__info__container}>
          <p className={styles.project__title}>Graph Data Structure</p>
          <p>
            A graph data structure built with Java, JGraphT, Graphviz, and JUnit
            for testing. It includes functionalities to create, modify, and
            query graphs as well as exporting them.
          </p>
          <div className={styles.project__tech__container}>
            <FaJava className={`${styles.java__icon} ${styles.skill__icon}`} />
          </div>
          <div className={styles.buttons__container}>
            <a
              href="https://github.com/Josue-Caballero-Sanchez/graph-data-structure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Page
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__container}>
        <img src={minHeap} alt="Min Heap Thumbnail" />
        <div className={styles.project__info__container}>
          <p className={styles.project__title}>Min Heap Data Structure</p>
          <p>
            This project implements a Min-Heap data structure in C++, supporting
            operations such as insertion, deletion, decreasing a key, and heap
            construction from a file.
          </p>
          <div className={styles.project__tech__container}>
            <SiCplusplus
              className={`${styles.cplusplus__icon} ${styles.skill__icon}`}
            />
          </div>
          <div className={styles.buttons__container}>
            <a
              href="https://github.com/Josue-Caballero-Sanchez/min-heap-data-structure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
