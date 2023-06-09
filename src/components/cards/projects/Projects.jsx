import React from 'react'
import './projects.css'

const Projects = (Info) => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {Info.projects.map((project, index) => (
        <div key={index} className="project">
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-bottom">
            <ul>
              {project.techs.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a target="_blank" href={project.link}>
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
