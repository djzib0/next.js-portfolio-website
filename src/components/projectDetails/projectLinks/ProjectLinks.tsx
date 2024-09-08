import styles from "./projectLinks.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";



const ProjectLinks = ({gitLink, url} : {gitLink: string; url: string}) => {
  return (
    <div className={styles.projectLinksContainer}>
      <h2 className={styles.header}>
        Links
      </h2>
      <div className={styles.links}>
        {gitLink && 
          <a 
          href={gitLink} 
          target="_blank"
          className={styles.linkButton}
          >
            <div className={styles.linkButtonLeft}>{<FaGithub />}</div>
            <div className={styles.linkButtonRight}>GitHub</div>
          </a>
        }
        {url && 
          <a 
          href={gitLink} 
          target="_blank"
          className={styles.linkButton}
          >
            <div className={styles.linkButtonLeft}>{<TbWorldWww />}</div>
            <div className={styles.linkButtonRight}>Web page</div>
          </a>
        }
        <Link 
          href={"/projects"} 
          className={styles.goBackButton}
        >Go back</Link>
      </div>
    </div>
  )
}

export default ProjectLinks