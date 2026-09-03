import profileImg from "../../assets/IMG_0377.jpeg";
import styles from "./HeroSection.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.main__info__container}>
        <img className={styles.profile__image} src={profileImg} alt="" />
        <div>
          <h1>
            Hi, I'm Josue Caballero Sanchez{" "}
            <span className={styles.waving__hand}>👋</span>
          </h1>
          <h3>Web Developer & IT Professional</h3>
        </div>
      </div>
      <p>
        Hi there! I'm a full-stack web developer and IT Specialist from
        Glendale, Arizona. Through my education and professional experience,
        I've gained experience in software development, troubleshooting, and
        system administration.
      </p>
      <div className={styles.buttons__container}>
        <a
          href="https://www.linkedin.com/in/josue-caballero-sanchez-8aaab9276/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://github.com/josue-caballero-sanchez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
          GitHub
        </a>
        <a href="mailto:sanchez684.jc@gmail.com">
          <MdEmail size={18} />
          Email
        </a>
      </div>
      <p className={styles.email__text}>Email: sanchez684.jc@gmail.com</p>
    </section>
  );
}

export default HeroSection;
