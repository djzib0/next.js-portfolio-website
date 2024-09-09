import Link from "next/link"
import styles from "./button.module.css"

const Button = ({title, url, isFile} : {title: string, url: string, isFile?: boolean}) => {
  return (
    <>
      <Link 
        href={url}
        className={!isFile ? styles.button: styles.buttonTransparent}
        target={isFile ? "_blank" : "_parent"}
        >
        {title}
      </Link>
    </>
  )
}

export default Button