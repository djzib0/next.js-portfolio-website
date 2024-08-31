import { projects } from "@/lib/data"
import Link from "next/link"

const ProjectsDashboard = () => {
  return (
    <div>
      {projects.map((project) => (
        <div className="test" key={project.id}>
          <Link href={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProjectsDashboard