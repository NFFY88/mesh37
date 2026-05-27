import styles from "./styles.module.css";
import Heading from "@theme/Heading";

const HomepageWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <Heading as="h2" className="text--center">Добро пожаловать</Heading>
        <p>Данный сайт содержит информацию о mesh сетях на базе LoRa в Иванове. Более подробную информацию вы можете найти в разделе <a href="/docs/intro">Документация</a></p>
        <p>В данный момент сайт находится в стадии разработки, поэтому просим понять и простить</p>
      </div>
    </section>
  );
};

export default HomepageWelcome;
