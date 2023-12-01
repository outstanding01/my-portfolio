import { getImageUrl } from '../../utils';
import React from 'react';
import styles from "./About.module.css";

export const About = () => {
    
  return (
    <div className={styles.profileBody}>
        <div  className={styles.aboutContainer} id={'about'}>
            <div className={styles.aboutContents}>
                <section className={styles.imageSection}>
                    <img src={getImageUrl("about/image_50407425.JPG")} alt="Ola Picture" />
                </section>
                <section className={styles.infoSection}>
                    <h1>About Me</h1>
                    <h2>Certified frontend developer</h2>
                    <p>
                        I'm a Nigerian-based web developer with a deep love for crafting digital experiences that leave a lasting impact. Here's a bit about who I am.<br/><br/><strong>Journey into Code</strong><br/>My coding journey started during the pandemic because I witnessed how the tech industry was able to tackle and provide solutions to some of the challenges the world faced during the lockdown.
                        I saw some of the solutions the tech industry provided, such as COVID-19 tracking apps, Zoom, community support platforms, e-learning platforms, and many more, igniting a passion that has only grown brighter with time. From the early days of wrestling with HTML and CSS to mastering the intricacies of modern JavaScript frameworks, every line of code I write is a step forward in my pursuit of excellence.
                        <br/><strong>Tech Enthusiast</strong><br/>
                        I'm not just a developer; I'm a tech enthusiast who thrives on staying at the forefront of industry trends. Whether it's experimenting with the latest frameworks, exploring innovative design concepts, or diving into the world of react, I'm always hungry for knowledge and eager to push the boundaries of what's possible. I see each project as an opportunity to contribute to the future of the web. I believe in building user-centric, accessible, and innovative solutions that make a positive impact.
                    </p>
                    <div className={styles.aboutPersonalinfo}>
                        <div><span>Name:</span><span className={styles.details}>Olanrewju Adebayo</span></div>
                        <div><span>Age:</span><span>25 years</span></div>
                        <div><span>Email:</span><span>olanrewajuadebayo970@gmail.com</span></div>
                        <div><span>Address:</span><span> Lagos.</span></div>
                    </div>
                </section>
        <section className={styles.skillsSection}>
            <div className={styles.skills}>
                <div className={styles.subject}>Hard Work</div>
                    <div className={styles.progressbar}>
                        <div style={{maxWidth: "95%"}}  value="95%"  className={styles.progressLine}></div>
                    </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.subject}>Creativity</div>
                    <div className={styles.progressbar}>
                        <div style={{maxWidth: "80%"}}  value="80%"  className={styles.progressLine}></div>
                    </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.subject}>Web development</div>
                    <div  className={styles.progressbar}>
                        <div style={{maxWidth: "70%"}} value="70%" className={styles.progressLine}></div>
                    </div>
            </div>
        </section>
            </div>
        </div>
    </div>
  )
}
