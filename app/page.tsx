import Image from "next/image";
import styles from "./page.module.scss";
import './globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.mainTitle}>Главная страница</h1>
    </main>
  );
}
