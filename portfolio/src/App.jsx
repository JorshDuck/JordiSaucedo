import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className='portfolio'>
      <Header />
      <main id='main-content'>
        <Reveal direction='up'>
          <Hero />
        </Reveal>
        <Reveal direction='up' delay={80}>
          <About />
        </Reveal>
        <Reveal direction='up' delay={80}>
          <Projects />
        </Reveal>
        <Reveal direction='up' delay={80}>
          <Skills />
        </Reveal>
        <Reveal direction='up' delay={80}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
