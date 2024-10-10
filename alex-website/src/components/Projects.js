import React from 'react';



const projects = [
    {
        title: 'Deadplant (Strategy Making Website)',
        image: 'deadplant2.jpg', // Public path to the image
        description: 'This project is a comprehensive strategy platform for the game Deadlock. It allows users to create custom tier lists, plan character placements on an interactive map using drag-and-drop functionality, and includes a secure login system powered by AWS. The entire platform was developed using React, offering a dynamic and user-friendly experience for strategizing and sharing game plans.',
        github: 'https://github.com/shmablo/Deadplant',
        website: 'http://www.deadplant.lol/',
      },
      
      {
        title: 'Top Music Genre Website',
        image: 'music.png', // Public path to the image
        description: 'Developed a Python web application that enables users to explore the top 50 most popular songs across any music genre. The project leverages Flask for the web framework and integrates with the Spotify API to fetch real-time music data. Key features include a user-friendly interface with a dropdown menu for popular genres, scheduled weekly data updates for the latest charts, and enhanced styling using CSS and JavaScript to provide an engaging user experience.',
        github: 'https://github.com/AlexZorrilla99/Music-Website',
        website: '',
      }, 
      /*
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
