import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import styles from "./SkillsSection.module.css";

function SkillsSection() {
  return (
    <section className={styles.skills__section__container}>
      <div className={styles.skill__container}>
        <FaReact className={`${styles.react__icon} ${styles.skill__icon}`} />
        <p>React</p>
      </div>
      <div className={styles.skill__container}>
        <FaHtml5 className={`${styles.html__icon} ${styles.skill__icon}`} />
        <p>HTML</p>
      </div>
      <div className={styles.skill__container}>
        <FaCss3Alt className={`${styles.css__icon} ${styles.skill__icon}`} />
        <p>CSS</p>
      </div>
      <div className={styles.skill__container}>
        <IoLogoJavascript
          className={`${styles.javascript__icon} ${styles.skill__icon}`}
        />
        <p>JavaScript</p>
      </div>
      <div className={styles.skill__container}>
        <BiLogoTypescript
          className={`${styles.typescript__icon} ${styles.skill__icon}`}
        />
        <p>TypeScript</p>
      </div>
      <div className={styles.skill__container}>
        <FaNodeJs className={`${styles.nodejs__icon} ${styles.skill__icon}`} />
        <p>Node.js</p>
      </div>
      <div className={styles.skill__container}>
        <SiExpress className={styles.skill__icon} />
        <p>Express</p>
      </div>
      <div className={styles.skill__container}>
        <BiLogoPostgresql
          className={`${styles.postgresql__icon} ${styles.skill__icon}`}
        />
        <p>PostgreSQL</p>
      </div>
      <div className={styles.skill__container}>
        <TbBrandCSharp
          className={`${styles.csharp__icon} ${styles.skill__icon}`}
        />
        <p>C#</p>
      </div>
      <div className={styles.skill__container}>
        <FaJava className={`${styles.java__icon} ${styles.skill__icon}`} />
        <p>Java</p>
      </div>
      <div className={styles.skill__container}>
        <FaGitAlt className={`${styles.git__icon} ${styles.skill__icon}`} />
        <p>Git</p>
      </div>
      <div className={styles.skill__container}>
        <FaGithub className={styles.skill__icon} />
        <p>GitHub</p>
      </div>
      <div className={styles.skill__container}>
        <TbBrandPowershell className={styles.skill__icon} />
        <p>PowerShell</p>
      </div>
    </section>
  );
}

export default SkillsSection;
