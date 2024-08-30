import styles from "./navbar.module.css";
// components import
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
          <Links />
        </div>
      </div>
    </div>
  )
}

export default Navbar