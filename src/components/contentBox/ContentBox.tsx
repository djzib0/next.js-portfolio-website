import styles from "./contentBox.module.css"

const ContentBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Title</p>
      </div>
      {/* below div is only for styling purposes
        it must contain the same title as the above paragraph
        it cover the "fake border" -> see css comments
      */}
      <div className={styles.cover}>Title</div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, laborum mollitia nam molestias iusto aliquam ipsam 
          voluptates fugit nesciunt quas.
        </div>
      </div>
    </div>
  )
}

export default ContentBox