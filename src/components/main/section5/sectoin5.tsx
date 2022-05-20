import styles from "./section5.module.scss";

const Section5 = () => {
  return (
    <div className={styles.section5}>
      <h5>работаем с любыми типами зданий</h5>
      <div className={styles.description}>
        <span>
          Результатом работы нашей команды за 16 лет остались довольны сотни
          клиентов. В этом разделе мы публикуем самые интересные из них.
        </span>
        <button>Все проекты</button>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <img src="" />
          <p>таунхаусы и дома</p>
        </div>
      </div>
    </div>
  );
};
export default Section5;
