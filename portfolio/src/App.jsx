import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 850
    })
  },[])

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
} 

export default App;
