import { projects } from "@/lib/data"
import { ProjectType } from "@/lib/types"
import styles from "./projects.module.css"
import Link from "next/link"

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      {projects.map((project: ProjectType) => (
        <Link href={`/projects/${project.id}`} key={project.id}>{project.title}</Link>
      ))}
    </div>
  )
}

export default ProjectsPage