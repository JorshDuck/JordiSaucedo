import '../assets/styles/Hero.css'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <h2>Computer Engineer</h2>
        <p className='subtitle'>
          Oriented in automation, web development and problem solving
        </p>
        <div className='hero-links'>
          <a href="https://github.com/JorshDuck" target='_blank' className='btn btn-outline'>
            <FaGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/jordi-saucedo/" target='_blank' className='btn btn-linkedin'>
            <FaLinkedin /> LinkedIn
          </a>
          <a href="/Jordi_Saucedo_CV.pdf" download className='btn btn-outline'>
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero