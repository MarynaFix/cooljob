import styles from "./styles.module.css";
function Searchbar() {
  return (
    <div className={styles.searchDiv}>
      <div className={styles.searchWrapper}>
        <img src="/search.svg" alt="Поиск" className={styles.searchIcon} />
        <input
          type="text"
          className={styles.mainSearch}
          placeholder="Должность или компания"
        ></input>
      </div>
      <div className={styles.locationWrapper}>
        <img src="/location.svg" alt="Поиск" className={styles.locationIcon} />
        <input
          type="text"
          className={styles.secondSearch}
          placeholder="Город, Страна"
        ></input>
      </div>
      <button className={styles.searchBtn}>Поиск</button>
    </div>
  );
}
export default Searchbar;
