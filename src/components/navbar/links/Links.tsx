import { LinkObject } from "@/lib/types"
import Link from "next/link";
import NavLink from "./navLink/NavLink";
import { links } from "@/lib/data";

const Links = () => {

  return (
    <div>
      {links.map((link : LinkObject) => {
        return (
          <NavLink item={link} key={link.path + link.title} />
        )
      })}
    </div>
  )
}

export default Links