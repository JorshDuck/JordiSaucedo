import '../assets/styles/Contact.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Contact() {
  return (
    <section id='contact' className='contact' aria-label='Contact Section'>
      <div className='container'>
        <h2 className='section-title'>Let's Connect</h2>
        <p className='contact-subtitle'>
          I am always open to discussing new software projects, automation challenges, or engineering opportunities. Feel free to reach out via WhatsApp, Email, or LinkedIn!
        </p>

        <div className='contact-links'>
          <a
            href={personalInfo.social.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-whatsapp'
            aria-label='Direct chat with Jordi Saucedo on WhatsApp'
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

          <a
            href={personalInfo.social.email}
            className='btn btn-primary'
            aria-label='Send email to Jordi Saucedo'
          >
            <FaEnvelope /> Email Me
          </a>

          <a
            href={personalInfo.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-linkedin'
            aria-label='Connect with Jordi Saucedo on LinkedIn'
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href={personalInfo.social.github}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-outline'
            aria-label='View Jordi Saucedo on GitHub'
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
