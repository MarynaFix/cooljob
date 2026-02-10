import styles from "./styles.module.css";

function CategoryCards() {
  const categoryCards = [
    { id: 1, img: "/categoryIcons/finance.svg", name: "Финансы" },
    { id: 2, img: "/categoryIcons/delivery.svg", name: "Грузоперевозки" },
    { id: 3, img: "/categoryIcons/design.svg", name: "Дизайн" },
    { id: 4, img: "/categoryIcons/restaurant.svg", name: "Ресторанный бизнес" },
    { id: 5, img: "/categoryIcons/medicin.svg", name: "Медицина" },
    { id: 6, img: "/categoryIcons/multimedia.svg", name: "Мультимедиа" },
    { id: 7, img: "/categoryIcons/helpservice.svg", name: "Служба поддержки" },
    { id: 8, img: "/categoryIcons/management.svg", name: "Менеджмент" },
    { id: 9, img: "/categoryIcons/sales.svg", name: "Продажи" },
  ];
  return (
    <div className={styles.categoryCardsContainer}>
      {categoryCards.map((item) => {
        return (
          <div key={item.id} className={styles.cardContainer}>
            <img src={item.img} alt={item.name}></img>
            <p>{item.name}</p>
          </div>
        );
      })}
      <div className={styles.cardMoreCategories}>
        <img src="/categoryIcons/arrow.svg" alt="arrow"></img>
        <p>Больше категорий</p>
      </div>
    </div>
  );
}
export default CategoryCards;
