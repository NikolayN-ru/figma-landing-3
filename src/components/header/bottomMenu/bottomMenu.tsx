import styles from "./bottomMenu.module.scss";
import logo from '../../../images/logo.png';
import call from '../../../images/call.png';
import message from '../../../images/message.png';
import cart from '../../../images/cart.svg';

const BottomMenu = () => {
  return (
    <div className={styles.bottomMenu}>
      <img src={logo} />
      <div className={styles.description}>
        <p>STOPRADIATORS</p>
        <span>все инженерные сети</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>
        <p>МОНТАЖ ИНЖЕНЕРНЫХ СИСТЕМ</p>
        <span>И ПРОДАЖА ОБОРУДОВАНИЯ</span>
      </div>
      <div className={styles.item}>
        <img src={call} />
        <div className={styles.desc}>
          <p>8 (812) 245-23-46</p>
          <span>8 (812) 438-32-58</span>
        </div>
        <div className={styles.btn}>Заказать звонок</div>
      </div>
      <div  className={styles.item}>
        <img src={message} />
        <div>
          <p>Пн-Пт 9:00-19:00</p>
          <span>info@stopradiators.ru</span>
        </div>
      </div>
      <div className={styles.line}></div>
      <div  className={styles.item}>
        <img src={cart} />
        <div>
          <p>1 т. на сумму</p>
          <span>74 587 Руб.</span>
        </div>
      </div>
    </div>
  );
};
export default BottomMenu;
