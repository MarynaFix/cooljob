import styles from "./styles.module.css";
import VacancyCards from "./vacancyCards";
function NewVacancySection() {
  return (
    <section className={styles.NewVacancyContainer}>
      <h2 className={styles.categoryTitle}>Новые вакансии</h2>
      <p className={styles.categorySubtitle}>
        Найди работу своей мечты прямо сейчас
      </p>
      <VacancyCards />
      <div className={styles.buttonDiv}>
        {" "}
        <button className={styles.allVacancy}>Все вакансии</button>
      </div>
    </section>
  );
}
export default NewVacancySection;
