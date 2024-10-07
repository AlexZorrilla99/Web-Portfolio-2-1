import React from 'react';



const projects = [
    {
        title: 'Deadplant (Strategy Making Website)',
        image: 'deadplantlol.png', // Public path to the image
        description: 'This project is a comprehensive strategy platform for the game Deadlock. It allows users to create custom tier lists, plan character placements on an interactive map using drag-and-drop functionality, and includes a secure login system powered by AWS. The entire platform was developed using React, offering a dynamic and user-friendly experience for strategizing and sharing game plans.',
        github: 'https://github.com/shmablo/Deadplant',
        website: 'http://www.deadplant.lol/',
      },/*
      
      {
        title: 'Deadplant (Strategy Making Website)',
        image: '/assets/images/deadplant2.png', // Public path to the image
        description: 'This project is a comprehensive strategy platform for the game Deadlock...',
        github: 'https://github.com/yourproject1',
        website: 'https://project1.com',
      }, 
      {
        title: 'Deadplant (Strategy Making Website)',
        image: '/assets/images/deadplant2.png', // Public path to the image
        description: 'This project is a comprehensive strategy platform for the game Deadlock...',
        github: 'https://github.com/yourproject1',
        website: 'https://project1.com',
      },
      {
        title: 'Deadplant (Strategy Making Website)',
        image: '/assets/images/deadplant2.png', // Public path to the image
        description: 'This project is a comprehensive strategy platform for the game Deadlock...',
        github: 'https://github.com/yourproject1',
        website: 'https://project1.com',
      } 
  */

];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <button>Visit Website</button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button>GitHub Repository</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
