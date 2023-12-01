import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Profile.module.css";
export const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contain}>
        <h1 className={styles.title}>Hello, I'm Ola</h1>
        <p className={styles.description}>I'm a web enthusiast dancing in the realm of code. With a passion for elegant design and seamless functionality, I specialize in frontend technologies like HTML, CSS, Javascript and React. My coding journey is a symphony of pixels, and I'm always orchestrating the perfect user experience. Let's turn ideas into interactive realities!</p>
        <a className={styles.contactbtn} href="mailto:adebayoolanrewaju970@gmail.com"> Contact Me</a>
        </div>
        <img className={styles.profile} src={getImageUrl('profile/olapix.jpg')} alt="My Profile picture" />
        
    </section>
  )
}