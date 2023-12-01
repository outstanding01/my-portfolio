import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import {Navbar} from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";
import { Profile } from "./components/profile/Profile";
import { Contact} from "./components/Contact/Contact";

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App
