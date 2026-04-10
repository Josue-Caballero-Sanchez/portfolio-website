import styles from "./header.module.css";
import { TbMenu } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";

type HeaderProps = {
  experienceText: string;
};

function Header({ experienceText }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  function handleToggleButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isMenuOpen ? styles.header__border : ""}`}
        ref={headerRef}
      >
        <div className={styles.main__header__container}>
          <div className={styles.header__container}>
            <a href="" className={styles.logo}>
              Josue C
            </a>
            <button
              className={styles.nav__button}
              onClick={handleToggleButtonClick}
            >
              <TbMenu className={styles.nav__icon} size={30} />
            </button>
          </div>
          <nav
            className={`${styles.navbar__links__container} ${
              isMenuOpen ? styles.navbar__links__container__open : ""
            }`}
          >
            <a
              href="https://canva.link/i454i0eaewc4v94"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleToggleButtonClick}
            >
              Resume
            </a>
            <a href="#experience" onClick={handleToggleButtonClick}>
              {experienceText}
            </a>
            <a href="#projects" onClick={handleToggleButtonClick}>
              Projects
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
