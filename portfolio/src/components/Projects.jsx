import '../assets/styles/Projects.css'

function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2>Featured Projects</h2>
        <div className='projects-grid'>
          <div className='project-card'>
            <h3 className='subtitle'>Massage Center Landing Page</h3>
            <p className='tech'>React · Vite</p>
            <p className='description'>Responsive landing page for a local business with reusable components and client specific requirements.</p>
            <a href="https://github.com/JorshDuck/VitalityGlow">View on Github →</a>
          </div>

          <div className='project-card'>
            <h3 className='subtitle'>Tab Automation Tool</h3>
            <p className='tech'>Python</p>
            <p className='description'>Script to automate copying links from the browser in a notepad file and closing the tabs.</p>
            <a href="https://github.com/JorshDuck/Tab-Automation-Tool">View on Github →</a>
          </div>

          <div className='project-card'>
            <h3 className='subtitle'>Posture Alarm Prototype</h3>
            <p className='tech'>Python · OpenCV</p>
            <p className='description'>App that monitors shoulders and head position using webcam and alerts on poor posture.</p>
            <a href="https://github.com/JorshDuck/Posture-Alarm">View on Github →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects