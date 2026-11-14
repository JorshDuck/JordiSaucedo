import '../assets/styles/Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id='projects' className='projects' aria-label='Featured Engineering Projects'>
      <div className='container'>
        <h2 className='section-title'>Featured Projects</h2>
        <p className='projects-intro'>
          A selection of software engineering systems, cloud architectures, and automation tools built with a focus on performance, scalability, and real-world problem solving.
        </p>

        <div className='projects-grid'>
          {projects.map((project) => (
            <article key={project.id} className='project-card'>
              <div className='project-header'>
                <span className='project-category'>{project.category}</span>
                <h3 className='project-title'>{project.title}</h3>
              </div>

              <div className='project-tags'>
                {project.tech.map((tech) => (
                  <span key={tech} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='project-body'>
                <p className='project-summary'>{project.summary}</p>

                <div className='project-spec'>
                  <div className='spec-item'>
                    <strong className='spec-label'>Challenge:</strong>
                    <span>{project.problem}</span>
                  </div>
                  <div className='spec-item'>
                    <strong className='spec-label'>Architecture:</strong>
                    <span>{project.solution}</span>
                  </div>
                  <div className='spec-item'>
                    <strong className='spec-label'>Impact:</strong>
                    <span className='impact-value'>{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className='project-actions'>
                {project.github ? (
                  <>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-link'
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub /> View on GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-link project-link-demo'
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </>
                ) : (
                  <span className='project-status-badge'>
                    <span className='status-dot'></span> In Active Development · Demo Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
