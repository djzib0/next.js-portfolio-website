import Link from "next/link";
import styles from "./footer.module.css";
// icons imports
import { FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <div className={styles.header}>
        PIOTR SABATURA
        </div>
        <div className={styles.message}>
          A developer looking for new opportunities that leads to the success.
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FaGithub />
          </div>
          <div className={styles.icon}>
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className={styles.copyrightNotice}>
      © Copyright 2024. Made by &nbsp;
      <Link href={"/"} className={styles.name}>Piotr Sabatura</Link>
      </div>
    </div>
  )
}

export default Footer