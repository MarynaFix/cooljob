import styles from "./styles.module.css";
import CategoryCards from "./categoryCards";

function CategorySection() {
  return (
    <section className={styles.CategorySectionContainer}>
      <h2 className={styles.categoryTitle}>
        Работа<br></br> по категориям
      </h2>
      <CategoryCards />
    </section>
  );
}
export default CategorySection;
