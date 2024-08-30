'use client'
import { projects } from "@/lib/data"
import { useParams } from "next/navigation"
import styles from "./project.module.css"
import Image from "next/image"

const ProjectPage = () => {

  const params = useParams();

  const project = projects.find((project) => project.id.toString() === params.projectId)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={"/noimg.png"}
          alt=""
          fill
          className={styles.imgContainer}
          />
      </div>
      This is a project with id {project?.desc}
      </div>
  )
}

export default ProjectPage