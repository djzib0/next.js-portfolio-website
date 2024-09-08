import Link from "next/link"
import styles from "./button.module.css"

const Button = ({title, url} : {title: string, url: string}) => {
  return (
    <Link 
      href={url}
      className={styles.button}
      >
      {title}
    </Link>
  )
}

export default Button