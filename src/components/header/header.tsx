import styles from "./header.module.css";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header
        className={`${styles.header} ${isMenuOpen ? styles.header__border : ""}`}
      >
        <div className={styles.main__header__container}>
          <div className={styles.header__container}>
            <a href="#" className={styles.logo}>
              Josue C
            </a>
            <button
              className={styles.nav__button}
              onClick={handleNavButtonClick}
            >
              <TbMenu className={styles.nav__icon} size={30} />
            </button>
          </div>
          <nav
            className={`${styles.navbar__links__container} ${
              isMenuOpen ? styles.navbar__links__container__open : ""
            }`}
          >
            <a href="">Resume</a>
            <a href="">Experience</a>
            <a href="">Projects</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
