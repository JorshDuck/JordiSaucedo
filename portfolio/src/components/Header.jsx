import '../assets/styles/Header.css'
import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className='header'>
      <div className='container'>
        <h1 className='logo'>Jordi Saucedo</h1>
        <nav className='navbar'>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header