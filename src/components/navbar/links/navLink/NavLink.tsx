'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkObject } from "@/lib/types";
import "./navLink.module.css"
import styles from "./navLink.module.css"

const NavLink = ({item} : {item: LinkObject}) => {

  const pathname = usePathname();

  return (
    <Link 
      href={item.path} 
      key={item.path + item.title}
      className={`${styles.navbarButton} ${pathname === item.path && styles.active}`}
      >
      {item.title}
    </Link>
  )
}

export default NavLink