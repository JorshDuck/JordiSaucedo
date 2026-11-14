import '../assets/styles/Hero.css'
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp, FaAws } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Hero() {
  const cvHref = `${import.meta.env.BASE_URL}${personalInfo.cvUrl}`

  return (
    <section className='hero' aria-label='Hero Profile'>
      <div className='container'>
        <div className='hero-badge-container'>
          <span className='hero-badge-cert'>
            <FaAws className='aws-icon' /> {personalInfo.certification}
          </span>
        </div>
        <h1 className='hero-name'>{personalInfo.name}</h1>
        <h2 className='hero-title'>{personalInfo.title}</h2>
        <p className='subtitle'>{personalInfo.subtitle}</p>

        <div className='hero-links'>
          <a
            href={personalInfo.social.github}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-outline'
            aria-label='Visit Jordi Saucedo on GitHub'
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-linkedin'
            aria-label='Visit Jordi Saucedo on LinkedIn'
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={personalInfo.social.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-whatsapp'
            aria-label='Chat with Jordi Saucedo on WhatsApp'
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={cvHref}
            download
            className='btn btn-primary'
            aria-label='Download Jordi Saucedo Curriculum Vitae'
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
