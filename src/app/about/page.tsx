import SectionHeader from "@/components/sectionHeader/SectionHeader";
import styles from "./about.module.css";
import SectionDescription from "@/components/sectionDescription/SectionDescription";
import Button from "@/components/button/Button";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title={"ABOUT ME"} />
      <SectionDescription desc={
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Fuga veritatis magni consequuntur nisi earum vel nobis nihil minima voluptas est?`
      } 
      />
      <div className={styles.content}>
        <div className={styles.desc}>
          <h3>Who am I?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolorem praesentium hic atque non in magnam officiis, suscipit accusantium cupiditate rerum veniam exercitationem officia dicta cum possimus ducimus eaque sint error inventore quod sit ut? Temporibus assumenda, commodi illo iste enim facere sint. Excepturi animi magnam recusandae ut obcaecati fugit eligendi! Nesciunt, id!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, animi, aliquid quibusdam suscipit cumque, tempore autem dolorum dolores repellendus laborum repellat dicta commodi libero rerum perferendis veritatis? Tempore modi debitis enim ducimus ad ex nostrum repellendus, deserunt accusamus dolores fugiat unde pariatur ipsum cum minima voluptas reprehenderit tenetur sunt voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum iure, ratione consequuntur modi molestias possimus dolorum adipisci esse praesentium officia ab! Sint, at voluptatibus! Voluptatibus earum perferendis, eligendi alias at ullam laudantium aut sit.</p>
          <div className={styles.button}>
            <Button title={"Contact"} url={"/contact"} />
            <Button title={"My CV"} url={"/testCV.pdf"} isFile={true} />
          </div>
        </div>
        <div className={styles.skills}>
          <h3>My Skills</h3>
          <div className={styles.skillsItems}>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default AboutPage