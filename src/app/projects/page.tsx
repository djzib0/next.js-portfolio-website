import { projects } from "@/lib/data"
import { ProjectType } from "@/lib/types"
import styles from "./projects.module.css"

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      {projects.map((project: ProjectType) => (
        <div key={project.id}>project.title</div>
      ))}
    </div>
  )
}

export default ProjectsPage