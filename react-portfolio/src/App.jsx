// App.jsx
import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/navbar/Hero/Hero';
import { About } from './components/navbar/About/About';
import { Experience } from './components/navbar/Experience/Experience';
import { Contact } from './components/Contact/Contact'
import CallMe from './components/navbar/callme/CallMe';
import Timeline from './components/Timeline/Timeline'; 

function App() {
    return (
        <div id="app" className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Timeline />
            <Contact />
            <CallMe/>
        </div>
    );
}

export default App;
