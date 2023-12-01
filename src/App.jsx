import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import {Navbar} from "./components/Navbar/Navbar";
import { Profile } from "./components/profile/Profile";

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App
