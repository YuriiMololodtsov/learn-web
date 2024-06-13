import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
<nav className={styles.nav}>
    <ul className={styles.list}>
        <li>Главная</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</nav>
    </header>
  )
}

export default Header
