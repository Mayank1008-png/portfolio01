import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics",
      technologies: ["Python", "D3.js", "Pandas"],
      githubLink: "#"
    },
    {
      title: "Mobile Task Management App",
      description: "Cross-platform task tracking application",
      technologies: ["React Native", "Firebase", "Redux"],
      githubLink: "#"
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600">
              I'm a passionate software developer with expertise in web and mobile technologies. 
              I love creating innovative solutions that solve real-world problems and enhance user experiences.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                GitHub
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
            {projectsData.map((project, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex space-x-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  className="text-blue-600 hover:underline flex items-center"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
                <ul className="text-gray-600">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Backend</h3>
                <ul className="text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-4xl">
        <header className="bg-white shadow-md rounded-lg mb-8">
          <div className="p-6 flex items-center">
            <img 
              src="/api/placeholder/150/150" 
              alt="Profile" 
              className="w-24 h-24 rounded-full mr-6 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Your Name</h1>
              <p className="text-gray-600">Software Developer</p>
            </div>
          </div>
          <nav className="border-t flex justify-around p-4">
            <button 
              onClick={() => setActiveSection('about')}
              className={`flex items-center ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`flex items-center ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('skills')}
              className={`flex items-center ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800`}
            >
              Skills
            </button>
          </nav>
        </header>

        <main>
          {renderSection()}
        </main>

        <footer className="mt-8 bg-white rounded-lg shadow-md p-4 text-center">
          <div className="flex justify-center space-x-4">
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 flex items-center">
              Contact Me
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
