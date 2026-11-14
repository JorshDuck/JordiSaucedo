import '../assets/styles/About.css'
import { FaCode, FaRobot, FaUsers } from 'react-icons/fa'
import { aboutHighlights, personalInfo } from '../data/portfolioData'

const iconMap = {
  code: <FaCode />,
  robot: <FaRobot />,
  users: <FaUsers />,
}

function About() {
  return (
    <section id='about' className='about' aria-label='About Me'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <p className='about-bio'>{personalInfo.bio}</p>

        <div className='about-highlights'>
          {aboutHighlights.map((item) => (
            <div
              key={item.id}
              className={`highlight-card ${item.badge ? 'highlight-featured' : ''}`}
            >
              {item.badge && <span className='highlight-badge'>{item.badge}</span>}
              <div className='highlight-icon'>{iconMap[item.icon] || <FaCode />}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
