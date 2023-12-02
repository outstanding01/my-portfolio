import React from 'react';
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";


export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Get in Touch</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl('contact/mail.png')} alt="Email icon" /><a href="mailto:adebayoolanrewaju970@gmail.com">Send me an email</a></li>
        <li className={styles.link}><img src={getImageUrl('contact/giticon.png')} alt="Github icon" /><a href="https://github.com/outstanding01">Github.com</a></li>
        <li className={styles.link}><img src={getImageUrl('contact/mail.png')} alt="Linkedin icon" /><a href="https://www.linkedin.com/in/adebayo-olanrewaju-119bb1208/">Linkedin.com</a></li>
      </ul>
    </footer>
  )
}