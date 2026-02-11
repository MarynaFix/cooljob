import styles from "./styles.module.css";
import Cities from "./cities";
import FooterIcons from "./footerIcons";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerTitle}>Популярные города</p>
      <Cities />
      <div className={styles.borderFooter}></div>
      <div className={styles.logoDiv}>
        <h2>Cooljob</h2>
        <FooterIcons />
      </div>
    </div>
  );
}
export default Footer;
