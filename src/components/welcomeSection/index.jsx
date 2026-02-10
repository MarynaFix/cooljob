import styles from "./styles.module.css";
import Searchbar from "./searchbar";

function WelcomeSection() {
  return (
    <section className={styles.WelcomeSection}>
      <h1 className={styles.welcomeTitle}>
        Один клик<br></br>и работа в кармане
      </h1>
      <Searchbar />
    </section>
  );
}
export default WelcomeSection;
