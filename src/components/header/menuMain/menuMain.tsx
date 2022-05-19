import styles from "./menuMain.module.scss";
import MenuMainItem from "./menuMainItem/menuMainItem";

const MenuMain = ({ data }: { data: any }) => {
  return (
    <div className={styles.menuMain}>
      {data.map((item, id) => (
        <MenuMainItem key={id} item={item} />
      ))}
    </div>
  );
};
export default MenuMain;
