"use client"

import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import {sayHello} from "@/lib/actions"
import SectionHeader from "../sectionHeader/SectionHeader";
// icons import
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";


const ContactForm = () => {

  const [isSent, setIsSent] = useState(false);
  const [messageLength, setMessageLength] = useState<number>(0);
  const [isMessageReseted, setIsMessageReseted] = useState<boolean>(false);
  const [messageInClipboard, setMessageInClipboard] = useState<string>("");
  const [formData, setFormData] = useState<{message: string}>({
    message: ""
  })

  const handleForm = (formData: FormData) => {
    const {name, email} = Object.fromEntries(formData)
    console.log(name, " formData")
    setIsSent(true);
    sayHello();
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const {name, value, type} = e.target
    const newData = {
      ...formData,
      [name]: value
    }
    setFormData(newData);
    setMessageLength(newData.message.length)
  }

  const resetMessage = (e: any) => {
    setMessageInClipboard(formData.message)
    setIsMessageReseted(true)
    const newFormData = {message: ""}
    setFormData(newFormData)
  }

  const undoMessage = () => {
    setIsMessageReseted(false);
    const newFormData = {message: messageInClipboard};
    setFormData(newFormData);
  }

  useEffect(() => {
    console.log("refreshing")
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

        <div className={styles.formContainer}>
          <p className={styles.formHeader}>Or you can leave me a message via form.</p>
          <form className={styles.form} action={handleForm}>
            <input type="text" placeholder="Your name" name="name" />
            <input type="email" placeholder="Your email" name="email" />
            <textarea 
              placeholder="Your message" 
              name="message"
              onChange={handleChange}
              maxLength={400}
              value={formData.message}
              />
            <div className={styles.messageDashboard}>
              <label className={styles.label}>{messageLength}/400</label>
              {messageLength > 0 && !isMessageReseted && 
                <button
                  onClick={resetMessage}
                  className={styles.iconButton}
                  >
                  <FaRegTrashCan />
                </button>
              }
              {isMessageReseted && 
                <button 
                  onClick={undoMessage}
                  className={styles.iconButton}
                >
                  <FaUndo />
                </button>
              }
            </div>
            {!isSent ? 
              <button>Send message</button>
              : <button>Message sent</button>}
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactForm