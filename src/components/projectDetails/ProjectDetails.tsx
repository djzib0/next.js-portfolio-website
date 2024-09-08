import { ProjectType } from "@/lib/types";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectImage from "./projectImage/ProjectImage";
import ProjectDesc from "./projectDesc/ProjectDesc";
import TechStackContainer from "./techStackContainer/TechStackContainer";
import ProjectLinks from "./projectLinks/ProjectLinks";


const ProjectDetails = ({project} : {project: ProjectType}) => {

  const {id, title, desc, img, tech, gitLink, url} = project;

  return (
    <div>
      <ProjectHeader title={title} />
      <ProjectImage imgUrl={img} />
      <ProjectDesc desc={desc} />
      <TechStackContainer techStack={tech} />
      <ProjectLinks gitLink={gitLink} url={url} />
    </div>
  )
}

export default ProjectDetails