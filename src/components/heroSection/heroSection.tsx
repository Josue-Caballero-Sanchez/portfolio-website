import profileImg from "../../assets/IMG_0377.jpeg";
import styles from "./heroSection.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.main__info__container}>
        <img className={styles.profile__image} src={profileImg} alt="" />
        <div>
          <h1>Hi, I'm Josue Caballero Sanchez 👋</h1>
          <h3>Web Developer & IT Professional</h3>
        </div>
      </div>
      <p>
        Hi there! I'm a 23 year old web developer & IT professional from
        Glendale, Arizona. Through academics and professional experience, I
        developed expertise in web design, Java, C#, and IT support. My current
        IT Specialist role has strengthened my skills in troubleshooting, system
        administration, and software development, enabling me to further improve
        my technical skills.
      </p>
      <div className={styles.buttons__container}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <SiGoogleforms size={18} />
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/josue-caballero-sanchez/"
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
      </div>
      <p className={styles.email__text}>Email: sanchez684.jc@gmail.com</p>
    </section>
  );
}

export default HeroSection;
