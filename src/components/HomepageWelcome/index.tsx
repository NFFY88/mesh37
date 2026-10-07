import styles from "./styles.module.css";
import Heading from "@theme/Heading";

const HomepageWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Добро пожаловать
        </Heading>
        <p>
          Данный сайт содержит информацию о mesh сетях на базе LoRa в Иванове.
          Более подробную информацию вы можете найти в разделе{" "}
          <a href="/docs/">Документация</a>.
        </p>
        <p>
          В данный момент сайт находится в стадии разработки, поэтому просим
          понять и простить. Вы всегда можете помочь в развитии сайта на{" "}
          <a href="https://github.com/NFFY88/mesh37" target="_blank">
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="container margin-vert--lg">
        <div className={styles.info}>
          <Heading as="h2" className="text--center">
            Тестовый переход на MediumFast
          </Heading>
          <p>
            <strong>Внимание!</strong> В период с{" "}
            <strong>8 по 18 октября 2026 года</strong> в тестовом режиме мы
            будем частично переводить Meshtastic на пресет{" "}
            <strong>MediumFast</strong>. Частота и остальные настройки при этом
            не меняются. В данный период времени вы можете столкнуться с
            проблемами в работе сети, поэтому просим вас быть внимательными и
            сообщать о любых проблемах в нашем{" "}
            <a href="https://t.me/meshtastic37">Telegram-чате</a> или в общем
            канале Meshtastic.
          </p>
          <Heading as="h3" className="text--center">
            Что это значит?
          </Heading>
          <p>
            В данный период времени мы будем тестировать пресет MediumFast,
            который позволяет увеличить скорость связи в сети Meshtastic.
            Однако, при этом немного уменьшается дальность передачи данных.
          </p>
          <Heading as="h3" className="text--center">
            Зачем это нужно?
          </Heading>
          <p>
            В данный момент мы наблюдаем загруженность канала у отдельных нод и
            периодические потери пакетов. Мы хотим понять, поможет ли переход на
            MediumFast в решении данной проблемы и стоит ли его использовать в
            будущем. Мы будем собирать данные о работе сети и анализировать их,
            чтобы принять решение о дальнейшем использовании данного пресета.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageWelcome;
