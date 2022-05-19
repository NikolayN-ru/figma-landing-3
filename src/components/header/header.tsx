import styles from "./header.module.scss";
import MenuMain from "./menuMain/menuMain";
import BottomMenu from "./bottomMenu/bottomMenu";

import { ReactComponent as Location } from "../../images/location.svg";
import { ReactComponent as Like } from "../../images/like.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Home } from "../../images/home.svg";
import HeaderMobile from "./headerMobile/headerMobile";

interface dataProps {
  id: number;
  title?: string;
  img?: string | null | any;
  arrow?: boolean;
  count?: number;
  content?: string[];
}

const data1: dataProps[] = [
  { id: 0, img: Home },
  { id: 1, title: "О компании", arrow: true },
  { id: 2, title: "Покупателям", arrow: true },
  { id: 3, title: "Статьи", arrow: false },
  { id: 4, title: "Акции", arrow: false }
];

const data2: dataProps[] = [
  { id: 1, title: "Санкт-Петербург", img: Location },
  { id: 1, title: "В избраном", img: Like, count: 1 },
  { id: 1, title: "Вход / Регистрация", img: User }
];

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <MenuMain data={data1} />
        <MenuMain data={data2} />
      </div>
      <div className={styles.bottomMenu}>
        <BottomMenu />
      </div>
      <div className={styles.headerMobile}>
        <HeaderMobile />
      </div>
    </>
  );
};
export default Header;
