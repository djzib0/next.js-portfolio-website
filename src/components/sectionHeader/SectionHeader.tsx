import styles from "./sectionHeader.module.css"

const SectionHeader = ({title}: {title: string}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
    </div>
  )
}

export default SectionHeader