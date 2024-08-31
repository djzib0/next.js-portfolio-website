import styles from "./projectDashboardItem.module.css"

const ProjectDashboardItem = ({title} : {title: string}) => {
  return (
    <div className={styles.container}>
        {title}
    </div>
  )
}

export default ProjectDashboardItem