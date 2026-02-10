import styles from "./styles.module.css";

function VacancyCards() {
  const vacancyCards = [
    {
      id: 1,
      category: "Финансы",
      name: "Менеджер по управлению финансами в крупной компании",
      location: "Осака, Япония",
      company: "companies/sony.png",
    },
    {
      id: 2,
      category: "Продажи",
      name: "Специалист по продажам",
      location: "Коясан, Япония",
      company: "companies/facebook.png",
    },
    {
      id: 3,
      category: "Служба поддержки",
      name: "Оператор колл центра",
      location: "Томаму, Япония",
      company: "companies/cocacola.png",
    },
    {
      id: 4,
      category: "Мультимедиа",
      name: "Системный администратор",
      location: "Токио, Япония",
      company: "companies/sony.png",
    },
    {
      id: 5,
      category: "Дизайн",
      name: "Дизайнер интерьера в профессиональную студию в центре города",
      location: "Йокогама, Япония",
      company: "companies/facebook.png",
    },
    {
      id: 6,
      category: "Грузоперевозки ",
      name: "Водитель на дальние дистанции",
      location: "Кобе, Япония",
      company: "companies/cocacola.png",
    },
  ];
  return (
    <div className={styles.vacancyCardsContainer}>
      {vacancyCards.map((item) => {
        return (
          <div key={item.id} className={styles.cardContainer}>
            <p className={styles.category}>{item.category}</p>
            <h3>{item.name}</h3>
            <div className={styles.locationDiv}>
              {" "}
              <img src="companies/location.svg" alt="location" />
              <p className={styles.location}>{item.location}</p>
            </div>
            <img src={item.company} />
          </div>
        );
      })}
    </div>
  );
}
export default VacancyCards;
