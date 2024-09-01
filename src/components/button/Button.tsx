import styles from "./button.module.css"

const Button = ({children} : {children: any}) => {
  return (
    <button 
      type="button"
      className={styles.button}
      >
      {children}
    </button>
  )
}

export default Button