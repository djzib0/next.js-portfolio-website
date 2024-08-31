import { projects } from "@/lib/data"
import { ProjectType } from "@/lib/types"
import styles from "./projects.module.css"
import Link from "next/link"
import ProjectsDashboard from "@/components/projectsDashboard/ProjectsDashboard"
import ContentBox from "@/components/contentBox/ContentBox";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <ProjectsDashboard />
      <ContentBox />
    </div>
  )
}

export default ProjectsPage