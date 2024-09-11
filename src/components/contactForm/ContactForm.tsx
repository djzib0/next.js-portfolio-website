"use client"

import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import {sayHello} from "@/lib/actions"
import SectionHeader from "../sectionHeader/SectionHeader";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const ContactForm = () => {

  const [isSent, setIsSent] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [formData, setFormData] = useState<any>({
    message: ""
  })

  const handleForm = (formData: FormData) => {
    const {name, email} = Object.fromEntries(formData)
    console.log(name, " formData")
    setIsSent(true);
    sayHello();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value, type, checked} = e.target
    const newData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value
    }
    setFormData(newData);
  }

  const checkMessageLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageLength(e.target.value.length)
  }

  const resetMessage = () => {
    const newFormData = {messsage: ""}
    console.log("resetting data")
    setFormData(newFormData)
  }

  useEffect(() => {
    console.log("haha hihi hoho")
  }, [formData])

  return (
    <div className={styles.container}>
      <SectionHeader title="Contact me"/>
      <div className={styles.content}>
        <div className={styles.contactInformation}>
          <div className={styles.message}>
            <p>
              If you would like to contact me, please write me an
              email - <span className={styles.email}>piotrsabatura@gmail.com</span>
            </p>
          </div>
          <p>
              You can find me on other platforms:
          </p>
          <div className={styles.socials}>
            <div className={styles.socialContainer}>
              <p className={styles.socialTitle}>
                Linkedin
              </p>
              <div className={styles.socialIcon}>
                <FaLinkedin />
              </div>
            </div>
            <div className={styles.socialContainer}>
              <p className={styles.socialTitle}>
                Messenger
              </p>
              <div className={styles.socialIcon}>
                <FaFacebookMessenger />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.formHeader}>Or you can leave me a message via form.</p>
          <form className={styles.formContainer} action={handleForm}>
            <input type="text" placeholder="Your name" name="name" />
            <input type="email" placeholder="Your email" name="email" />
            <textarea 
              placeholder="Your message" 
              name="message"
              onChange={handleChange}
              maxLength={400}
              value={formData.message}
              />
            <label className={styles.label}>{messageLength}/400</label>
            {!isSent ? 
              <button>Send message</button>
              : <button>Message sent</button>}
            <button type="reset">Clear</button>
          </form>
          <button onClick={() => setFormData({message: ""})}>reset message</button>
          <p>jhkjh</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm