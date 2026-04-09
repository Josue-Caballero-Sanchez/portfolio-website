import { useState } from "react";
import Header from "../components/header/header";
import HeroSection from "../components/heroSection/HeroSection";
import SkillsSection from "../components/skillsSection/SkillsSection";
import ExperienceSection from "../components/experienceSection/experienceSection";
import styles from "./App.module.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("experience");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />

        <p className={styles.header__text}>Tools & Skills</p>
        <SkillsSection />

        <div className={styles.button__container}>
          <button
            className={selectedTab === "experience" ? styles.active : ""}
            onClick={() => setSelectedTab("experience")}
          >
            Work Experience
          </button>
          <button
            className={selectedTab === "education" ? styles.active : ""}
            onClick={() => setSelectedTab("education")}
          >
            Education
          </button>
        </div>
        <div key={selectedTab} className={styles.tab__content}>
          <p
            className={`${styles.header__text} ${styles.experience__header__text}`}
          >
            {selectedTab === "experience" ? "Work Experience" : "Education"}
          </p>
          <ExperienceSection selectedTab={selectedTab} />
        </div>
      </main>
    </>
  );
}

export default App;
