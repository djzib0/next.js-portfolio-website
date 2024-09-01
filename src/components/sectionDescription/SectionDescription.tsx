import styles from "./sectionDescription.module.css"

const SectionDescription = ({desc} : {desc: string}) => {
  return (
    <div className={styles.container}>
      {desc}
    </div>
  )
}

export default SectionDescription