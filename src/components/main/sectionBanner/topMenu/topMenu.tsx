import styles from "./topMenu.module.scss";
import TopMenuItem from "./topmenuItem/topMeniItem";
import { ReactComponent as Search } from "../../../../images/search.svg";

const data: string[] = [
  "Услуги",
  "Каталог оборудования",
  "Наши работы",
  "Контакты"
];

const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      {data.map((item, index) => (
        <TopMenuItem title={item} key={index} />
      ))}
      <div className={styles.input}>
        <input type="text" placeholder="Поиск по сайту" />
        <Search className={styles.search}/>
      </div>
    </div>
  );
};
export default TopMenu;
