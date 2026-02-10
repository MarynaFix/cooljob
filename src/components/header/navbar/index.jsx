import styles from "./styles.module.css";

function Navbar() {
  const navbarElements = ["Поиск работы", "Поиск стартапов"];
  return (
    <ul className={styles.list}>
      {navbarElements.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
}
export default Navbar;
