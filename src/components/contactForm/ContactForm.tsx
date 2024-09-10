"use client"

import { useState } from "react";
import styles from "./contactForm.module.css";
import {sayHello} from "@/lib/actions"
import SectionHeader from "../sectionHeader/SectionHeader";

const ContactForm = () => {

  const [isSent, setIsSent] = useState(false);

  const handleForm = () => {
    setIsSent(true);
    sayHello();
  }

  return (
    <div className={styles.container}>
      <SectionHeader title="Contact me"/>
      <div className={styles.content}>
        <div className={styles.contactInformation}>
          Here will be contacts informations
        </div>
        <form className={styles.formContainer} action={handleForm}>
          <input type="text" placeholder="Your name" name="name" />
          <input type="email" placeholder="Your email" name="email" />
          <textarea placeholder="Your message" name="message" />
          {!isSent ? 
            <button>Send message</button>
            : <button>Message sent</button>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm