import styles from "./mainBanner.module.scss";
import Baner from '../../../../images/baner1.png';

const MainBanner = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.image}>
        <img src={Baner} />
        <p className={styles.descImage}>
          *Технология Energy Efficent Economy (EEE, или энергосберегающая
          экономия) предполагает внедрение в доме сбалансированной и экологичной
          системы напольного отопления на основе теплотехнического расчета.
          Система регулируется зонально настенными термометрами. Ее
          экономическая эффективность по сравнению с традиционными отопительными
          системами достигает 25%. Технологическая цель - экономия энергии и Ваш
          комфорт!
        </p>
      </div>
      <div className={styles.description}>
        <h2>монтаж водяного теплого пола под ключ</h2>
        <h3>по технологии energy efficient economy* за 5 дней с гарантией!</h3>
        <p>
          Рассчитаем стоимость водяного теплого пола с учетом индивидуальных
          параметров объекта в течении 24 часов! Для этого заполните заявку и
          отправьте ее нам
        </p>
        <button>рассчитать стоимость</button>
      </div>
    </div>
  );
};
export default MainBanner;
