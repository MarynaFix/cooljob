import styles from "./styles.module.css";

function Cities() {
  const cities = [
    "Осака",
    "Коясан",
    "Токио",
    "Хаконэ",
    "Наэба",
    "Томаму",
    "Йокогама",
    "Нагоя",
    "Саппоро",
    "Кобе",
  ];
  return (
    <div className={styles.citiesDiv}>
      {cities.map((city) => {
        return <p key={city}>{city}</p>;
      })}
    </div>
  );
}
export default Cities;
