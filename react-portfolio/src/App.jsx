
import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/navbar/Hero/Hero'
import { About } from './components/navbar/About/About'
import { Experience } from './components/navbar/Experience/Experience'
import { TextHeroCard } from "./components/navbar/TextRevealCard/TextHeroCard";
function App() {


  return (
    <div className={styles.App}>

      <Navbar/>
     <Hero />
     
     <About />
     <Experience />
    </div>
  )
}

export default App
