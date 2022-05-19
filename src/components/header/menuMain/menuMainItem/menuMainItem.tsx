import { FC, ReactNode } from "react";
import styles from "./menuMainItem.module.scss";

import { ReactComponent as Arrow } from "../../../../images/arrow-green.svg";

interface MenuMainItemProp {
  item: any;
}

const MenuMainItem: FC<MenuMainItemProp> = ({ item }): JSX.Element => {
  const Img = item.img;
  return (
    <div className={styles.item}>
      {item.img && <Img className={styles.image} />}
      {item.title}
      {item.count > 0 && ` (${item.count})`}
      {item.arrow && <Arrow className={styles.arrow} />}
    </div>
  );
};
export default MenuMainItem;
