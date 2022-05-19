import styles from "./headerMobile.module.scss";
import { ReactComponent as Cart } from "../../../images/cart.svg";
import { ReactComponent as Call2 } from "../../../images/call2.svg";
import { ReactComponent as Search } from "../../../images/search.svg";

const HeaderMobile = () => {
  return (
    <div className={styles.headerMobile}>
      <div className={styles.main}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <img src="./logo.png" />
        <div className={styles.desc}>
          <p>STOPRADIATORS</p>
          <span>все инженерные сети</span>
        </div>
      </div>
      <div className={styles.link}>
        <Cart className={styles.cart} />
        <Call2 className={styles.call2} />
        <Search className={styles.search} />
      </div>
    </div>
  );
};
export default HeaderMobile;
