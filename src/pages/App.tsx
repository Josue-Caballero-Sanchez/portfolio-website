import Header from "../components/header/header";
import HeroSection from "../components/heroSection/HeroSection";
import SkillsSection from "../components/skillsSection/SkillsSection";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />

        <p className={styles.header__text}>Tools & Skills</p>
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
