import styles from "./styles.module.css";

function Partners() {
  const partnersIcons = [
    { id: 1, src: "/partnersIcons/disney.svg", alt: "disney" },
    { id: 2, src: "/partnersIcons/facebook.svg", alt: "facebook" },
    { id: 3, src: "/partnersIcons/microsoft.svg", alt: "microsoft" },
    { id: 4, src: "/partnersIcons/sony.svg", alt: "sony" },
    { id: 5, src: "/partnersIcons/cocacola.svg", alt: "cocacola" },
  ];
  return (
    <section className={styles.partnersContainer}>
      <span className={styles.titlePartners}>Помогаем найти работу:</span>
      <div className={styles.partnersIconsContainer}>
        {partnersIcons.map((icon) => {
          return <img src={icon.src} key={icon.id} alt={icon.alt} />;
        })}
      </div>
    </section>
  );
}
export default Partners;
