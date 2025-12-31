import "./Project.css"; 

function Project() {
  return (
    <section id="project" className="project-section">
      <h2>Projects</h2>
  
      <div className="projects-grid">
        <div className="project-card">
          <h3>Job Learning Portal</h3>
          <p>
            A MERN stack platform that integrates job listings with skill-based
            learning modules.
          </p>
          <span className="tech">MERN Stack</span>
        </div>
            
        <div className="project-card">
          <h3>Airbnb Clone</h3>
          <p>
            Full-stack Airbnb-style application with location-based search using
            Google Maps API.
          </p>
          <span className="tech">React · Node · MongoDB</span>
        </div>
            
        <div className="project-card">
          <h3>Zoom Clone</h3>
          <p>
            Real-time video conferencing application built using WebRTC and
            MERN stack.
          </p>
          <span className="tech">WebRTC · MERN</span>
        </div>
      </div>
    </section>
  );
}

export default Project;
