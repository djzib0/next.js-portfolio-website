import { projects } from "@/lib/data";
import styles from "./projects.module.css";
import ProjectCard from "@/components/projectCard/ProjectCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SectionDescription from "@/components/sectionDescription/SectionDescription";


const ProjectsPage = () => {

  const sectionDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi corrupti quis delectus possimus adipisci optio eos quod quos non quasi?"

  return (
    <div className={styles.container}>
      <SectionHeader title={"PROJECTS"} />
      <SectionDescription desc={
        sectionDesc
      }
      />
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}

    </div>
  )
}

export default ProjectsPage