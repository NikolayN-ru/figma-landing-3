import styles from "./section3Item.module.scss";

const Section3Item = ({ item }) => {
  return (
    <div className={styles.section3Item}>
      <p>{item.title}</p>
      <span>
        Пол выравнивается перед укладкой пенополистирола (сбиваются наплывы
        бетонного раствора).
      </span>
	  <div className={styles.label}>
		  {item.id}
	  </div>
    </div>
  );
};
export default Section3Item;
