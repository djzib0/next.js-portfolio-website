import ContactForm from "@/components/contactForm/ContactForm"
import styles from "./contactPage.module.css";


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  )
}

export default ContactPage