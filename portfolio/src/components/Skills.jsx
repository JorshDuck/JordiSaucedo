import '../assets/styles/Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'LUA']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Tkinter', 'PyAutoGUI', 'OpenCV', 'yt-dlp']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VSC', 'Vite', 'AutoHotKey', 'Automation']
    },
    {
      title: 'Soft SKills',
      skills: ['Team Leadership', 'Problem Solving', 'Communication', 'Adaptability']
    }
  ]

  return(
    <section id='skills' className='skills'>
      <div className='container'>
        <h2>Skills</h2>
        <div className='skills-grid'>
          {skillCategories.map((category, index) => (
            <div key={index} className='skill-category'>
              <h3>{category.title}</h3>
              <div className='skills-list'>
                {category.skills.map((skill, i) => (
                  <span key={i} className='skill-tag'>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </section>
  )
}

export default Skills