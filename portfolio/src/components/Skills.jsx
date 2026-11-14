import '../assets/styles/Skills.css'
import { skillCategories } from '../data/portfolioData'

function Skills() {
  return (
    <section id='skills' className='skills' aria-label='Technical and Professional Skills'>
      <div className='container'>
        <h2 className='section-title'>Technical &amp; Engineering Skills</h2>
        <div className='skills-grid'>
          {skillCategories.map((category) => (
            <div key={category.id} className='skill-category'>
              <h3>{category.title}</h3>
              <div className='skills-list'>
                {category.skills.map((skill) => (
                  <span key={skill} className='skill-tag'>
                    {skill}
                  </span>
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
