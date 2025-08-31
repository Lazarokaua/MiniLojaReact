import styles from "./Navbar.module.css"


// eslint-disable-next-line react/prop-types
const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>MiniLoja</div>
          <div className={styles.navbarRight}>
        <button onClick={onToggleTheme} className={styles.themeToggle} aria-label="Alternar tema">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className={styles.cartBadge} aria-label="Carrinho com 3 itens">
          🛒
                  <span className={styles.cartCount}>3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
