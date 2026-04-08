import Header from "../components/header/header";
import HeroSection from "../components/heroSection/heroSection";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
