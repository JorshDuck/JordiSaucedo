import './App.css'
import { useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className='portfolio'>
      <Header />
      <Reveal direction='up'>
        <Hero />
      </Reveal>
        <Reveal direction='up' delay={100}>
        <About />
      </Reveal>
      <Reveal direction='up' delay={100}>
        <Projects />
      </Reveal>
      <Reveal direction='up' delay={100}>
        <Skills />
      </Reveal>
      <Reveal direction='up' delay={100}>
        <Contact />
      </Reveal>
        <Footer />
    </div>
  )
}

export default App
