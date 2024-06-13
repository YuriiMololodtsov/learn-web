import Image from "next/image";
import styles from "./page.module.scss";
import './globals.css';
import mainPageImg from '@/public/main-page/main-image.webp';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainTextBlock}>
      <h1 className={styles.mainTitle}>Открой для себя возможности веб-разработки</h1>
     <p className={styles.mainDescription}>
        Присоединяйтесь к нам, чтобы узнать основы HTML, CSS и JavaScript. Наши уроки помогут вам стать профессионалом в веб-разработке.
      </p>
      </div>
      <div className={styles.imageWrap}>
        <Image src={mainPageImg} alt="programmer image" width={500} height={500} className={styles.image}/>
      </div>
    </main>
  );
}
