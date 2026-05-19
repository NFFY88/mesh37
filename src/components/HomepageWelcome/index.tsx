import styles from "./styles.module.css";
import Heading from "@theme/Heading";

const HomepageWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <Heading as="h2" className="text--center">Добро пожаловать</Heading>
        <p></p>
      </div>
    </section>
  );
};

export default HomepageWelcome;
