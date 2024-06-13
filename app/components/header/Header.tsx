import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/lessons/html">
              HTML
            </Link>
          </li>
          <li>
            <Link href="/lessons/css">
              CSS
            </Link>
          </li>
          <li>
            <Link href="/lessons/javascript">
              JavaScript
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/register">
              регистрация
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
