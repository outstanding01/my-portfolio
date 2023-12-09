import styles from './Experience.module.css'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl} from "../../utils"

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div className={styles.skill} key={id}>
                            <div className={styles.skillImagecontainer}><img style={{width:"80px"}} src={getImageUrl (skill.imagesrc)} alt={skill.title} /></div>
                            <p>{skill.title}</p>

                        </div>
                    })
                    }
                </div> 



                <ul className={styles.history}>{
                history.map((histori, id) => {
                    return <li className={styles.historyItem} key={id}>
                        <img style={{width:"100px"}} src={getImageUrl(histori.imagesrc)} alt={histori.title} />
                        <div className={styles.historyitemdetails}>
                        <h3>{`${histori.role}, ${histori.organization}`}</h3>
                        <p>{`${histori.startdate} - ${histori.enddate}`}</p>
                        <ul>{histori.experiences.map((experience, id) => {
                            return <li key={id}>{experience}</li>
                        })}</ul>
                        </div>

                    </li>
                })
                }</ul>
        </div>
    </section>
  )
}