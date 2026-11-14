import '../assets/styles/Contact.css'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2>Contact</h2>
        <div className='contact-links'>
          <a href="mailto:jordi.saucedo.dev@gmail.com" className='btn btn-outline'>
            <FaEnvelope/> Email
          </a>
          <a href="https://www.linkedin.com/in/jordi-saucedo/" target='_blank' className='btn btn-outline'>
            <FaLinkedin/> LinkedIn</a>
          <a href="https://github.com/JorshDuck" target='_blank' className='btn btn-outline'>
            <FaGithub/> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact