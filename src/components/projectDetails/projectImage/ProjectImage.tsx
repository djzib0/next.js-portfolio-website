import Image from "next/image"
import styles from "./projectImage.module.css"

const ProjectImage = ({imgUrl} : {imgUrl: string}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/testimg.jpg"}
          alt=""
          objectFit="cover"
          width={270}
          height={198}
          layout="responsive"
          />
      </div>
    </div>
  )
}

export default ProjectImage