import styles from "./projectHeader.module.css"

const ProjectHeader = ({title} : {title: string}) => {
  return (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {`Below you can find description of "${title}" project,
      which includes used technologies and links to github or live demo.`}
      </div>
    </div>
  </div>
  )
}

export default ProjectHeader