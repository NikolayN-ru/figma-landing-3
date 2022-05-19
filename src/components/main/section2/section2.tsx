import styles from "./section2.module.scss";
import { ReactComponent as Link3 } from "../../../images/link3.svg";
import { ReactComponent as Link4 } from "../../../images/link4.svg";
import { ReactComponent as Link5 } from "../../../images/link5.svg";

import { ReactComponent as House } from "../../../images/house.svg";
import { ReactComponent as Box } from "../../../images/box.svg";
import { ReactComponent as Obvod } from "../../../images/obvod.svg";
import { ReactComponent as Plan } from "../../../images/plan.svg";
import { ReactComponent as Climate } from "../../../images/climate.svg";
import { ReactComponent as Hot } from "../../../images/hot.svg";
import CardQuestion from "./cardQuestion/cardQuestion";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.content}>
        <div className={styles.topDesc}>
          <div className={styles.item}>
            <Link3 className={styles.img} />
            <div className={styles.line}></div>
            <p>Точный расчет теплопотерь помещений</p>
          </div>
          <div className={styles.item}>
            <Link4 className={styles.img} />
            <div className={styles.line}></div>
            <p>Надежное европейское оборудование</p>
          </div>
          <div className={styles.item}>
            <Link5 className={styles.img} />
            <div className={styles.line}></div>
            <p>Профессиональный проект и расширенная гарантия 3 года</p>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <h4>Что влияет на стоимость водяного теплого пола?</h4>
          <div className={styles.line}></div>
        </div>
        <div className={styles.headerLink}>
          <div className={styles.headerLinkItem}>
            <House />
            <p>Размер строения</p>
          </div>
          <div className={styles.headerLinkItem}>
            <Box />
            <p>Выбор материала</p>
          </div>
          <div className={styles.headerLinkItem}>
            <Obvod />
            <p>Способ монтажа</p>
          </div>
          <div className={styles.headerLinkItem}>
            <Plan />
            <p>Техническое решение</p>
          </div>
          <div className={styles.headerLinkItem}>
            <Climate />
            <p>Зональное управление</p>
          </div>
          <div className={styles.headerLinkItem}>
            <Hot />
            <p>Толщина утеплителя</p>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <h4>
            Подберем и рассчитаем водяной теплый пол</h4>
          <div className={styles.line}></div>
        </div>
		<CardQuestion />

      </div>
    </div>
  );
};
export default Section2;
