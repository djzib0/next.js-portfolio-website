import { TechStack } from "@/lib/types"
import styles from "./techStackContainer.module.css"

const TechStackContainer = ({techStack} : {techStack: TechStack[] }) => {
  return (
    <div className={styles.techStackContainer}>
      <h2 className={styles.header}>
        Used technologies
      </h2>
      <div className={styles.techStack}>
        {techStack.map((item) => (
          <p 
            key={item}
            className={styles.stackItem}
          >
            {item}
          </p>
        ))}
      </div>

    </div>
  )
}

export default TechStackContainer