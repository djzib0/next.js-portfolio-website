import Button from "@/components/button/Button";
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Hi, my name is Piotr Sabatura
        </h1>
        <div className={styles.desc}>
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis" + 
          "earum amet ad aut, quia fuga enim laudantium esse blanditiis."}
        </div>
        <Button title={"projects"} url={"/projects"} />
      </div>
    </div>
  );
}
