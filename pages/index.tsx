import styles from "../styles/Home.module.css";

import tdd from '../components/tddExample'

tdd();

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Blog!</a>
        </h1>
      </main>
      <footer className={styles.footer}>
        blog by saenal
      </footer>
    </div>
  );
}
