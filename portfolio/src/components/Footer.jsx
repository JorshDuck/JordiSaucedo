import '../assets/styles/Footer.css'
import { personalInfo } from '../data/portfolioData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer' aria-label='Site Footer'>
      <div className='container'>
        <p>
          &copy; {currentYear} {personalInfo.name}. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
