import styles from "./projectDesc.module.css"

const ProjectDesc = ({desc} : {desc: string[]}) => {
  return (
    <div className={styles.descriptionContainer}>
      <h2 className={styles.header}>
        Project description
      </h2>
      {desc.map((desc) => (
        <p 
          key={desc}
          className={styles.paragraph}
        >
          {desc}
        </p>
      ))}
    </div>
  )
}

export default ProjectDesc