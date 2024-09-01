import styles from "./projectCard.module.css";
import Image from "next/image";
import { ProjectType } from "@/lib/types";
import Button from "../button/Button";
import Link from "next/link";


const ProjectCard = ({project} : {project: ProjectType}) => {
  return (
    <div className={styles.container}>
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
      <h3 className={styles.title}>
        {project.title}
      </h3>
      {project.desc.map((item) => (
        <p key={"id" + item} className={styles.desc}>
          {item}
        </p>
      ))}
          <Link href={`/projects/${project.id}`} className={styles.button}>
            SHOW MORE
          </Link>
    </div>
  )
}

export default ProjectCard