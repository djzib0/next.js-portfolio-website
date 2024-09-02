'use client'
import { projects } from "@/lib/data"
import { useParams } from "next/navigation"
import styles from "./project.module.css"
import Image from "next/image";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

const ProjectPage = () => {

  const params = useParams();

  const project = projects.find((project) => project.id.toString() === params.projectId)

  return (
    <div className={styles.container}>
      {project && <SectionHeader title={project.title}/>}
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={"/testimg.jpg"}
            alt=""
            objectFit="cover"
            width={220}
            height={198}
            layout="responsive"
          />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>
            {project?.title}
          </h3>
          <div>
            {project?.desc.map((item) => (
              <p key={"id" + item} className={styles.desc}>
                {item}
              </p>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage