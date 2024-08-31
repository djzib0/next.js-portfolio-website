'use client'
import styles from "./navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";
import { useState } from "react";
import { links } from "@/lib/data";
import { link } from "fs";
import NavLink from "./links/navLink/NavLink";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbarWide}>
        <div className={styles.logo}>
          <Image 
              src={"/logo.svg"}
              alt={"logo"}
              width={40}
              height={40}
          />
        </div>
        <div className={styles.links}>
          <Links />
        </div>
      </div>
      <div className={styles.navbarNarrow}>
        <div className={styles.logo}>
          <Image 
              src={"/logo.svg"}
              alt={"logo"}
              width={40}
              height={40}
          />
        </div>
        <div className={styles.hamburgerMenuContainer}>
          <Image 
            src={"/hammenu1.svg"}
            alt={"hamburger menu icon"}
            width={40}
            height={40}
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            className={styles.hamburgerButton}
          />
        </div>
      </div>
      {isMenuOpen &&
        <div className={styles.linksNarrow}>
          {links.map((link) => (
            <NavLink item={link} key={link.path + link.title}/>
          ))}
        </div>
      }
    </div>
  )
}

export default Navbar