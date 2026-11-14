import '../assets/styles/Header.css'
import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className='header'>
      <div className='container'>
        <a href='#' className='logo-link' aria-label={`${personalInfo.name} Home`}>
          <span className='logo'>{personalInfo.name}</span>
        </a>
        <nav className='navbar' aria-label='Primary Navigation'>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type='button'
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
