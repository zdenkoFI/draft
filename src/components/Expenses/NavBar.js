import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={`${styles.navbar} ${styles.responsive}`}>
      <h1 className={styles.title}>引き出し</h1>
      <button className={styles.menuButton}>☰</button>
      <ul className={styles.navLinks}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
