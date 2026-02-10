import Button from "./button";
import Navbar from "./navbar";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleAndList}>
        <h2 className={styles.logotitle}>Cooljob</h2>
        <Navbar />
      </div>
      <div className={styles.loginContainer}>
        <a>
          <span>Регистрация</span>
        </a>
        <Button />
      </div>
    </div>
  );
}
export default Header;
