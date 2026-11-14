import '../assets/styles/About.css'
import { FaCode, FaRobot ,FaUsers } from 'react-icons/fa'

function About () {
  const highlgihts = [
    {
      icon: <FaCode />,
      title: 'Problem Solver',
      text: 'I enjoy breaking down complex problems and finding efficient and effective solutions through code.'
    },
    {
      icon: <FaRobot />,
      title: 'Automathion Enthusiast',
      text: 'I build tools that streamline processes and eliminate repetitive tasks.'
    },
    {
      icon: <FaUsers />,
      title: 'Team Leader',
      text: 'I led and manage small and medium-size groups of up to 30 people in stressed evnironments, learning the value of coordination and attention to details.'
    }
  ]

  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2>About Me</h2>
        <div className='about-highlights'>
          {highlgihts.map((item, index) => (
            <div key={index} className='highlight-card'>
              <div className='highlight-icon'>{item.icon}</div>
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