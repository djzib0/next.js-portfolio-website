import Image from "next/image"
import styles from "./projectImage.module.css"

const ProjectImage = ({imgUrl} : {imgUrl: string}) => {
  return (
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
  )
}

export default ProjectImage