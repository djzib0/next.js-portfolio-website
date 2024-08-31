import { projects } from "@/lib/data"
import Link from "next/link"
import ProjectDashboardItem from "./projectDashboardItem/ProjectDashboardItem"
import styles from "./projectsDashboard.module.css"

const ProjectsDashboard = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div className="test" key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <ProjectDashboardItem title={project.title} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProjectsDashboard