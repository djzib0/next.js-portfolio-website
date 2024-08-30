import { LinkObject } from "@/lib/types"
import Link from "next/link";
import NavLink from "./navLink/NavLink";

const Links = () => {

  const links: LinkObject[] = [
    {
      title: "home",
      path: "/"
    },
    {
      title: "projects",
      path: "/projects"
    },
  ]

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