import styles from "./styles.module.css";
function FooterIcons() {
  const footerIcons = [
    { id: 1, src: "footerIcons/in.svg", alt: "linkedin" },
    { id: 2, src: "footerIcons/google.svg", alt: "google" },
    { id: 3, src: "footerIcons/twitter.svg", alt: "twitter" },
    { id: 4, src: "footerIcons/facebook.svg", alt: "facebook" },
  ];
  return (
    <div className={styles.footerIconsDiv}>
      {footerIcons.map((icon) => {
        return <img src={icon.src} key={icon.id} alt={icon.alt} />;
      })}
    </div>
  );
}
export default FooterIcons;
