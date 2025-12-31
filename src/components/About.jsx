import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>Skills & Expertise</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>C</h3>
          <p>Strong foundation in programming fundamentals and logic building.</p>
        </div>

        <div className="skill-card">
          <h3>C++</h3>
          <p>Object-oriented programming, STL, and performance optimization.</p>
        </div>

        <div className="skill-card">
          <h3>Java</h3>
          <p>OOP concepts, scalable application design, and backend logic.</p>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Dynamic, asynchronous, and interactive web development.</p>
        </div>

        <div className="skill-card">
          <h3>React.js</h3>
          <p>Component-based UI, hooks, and modern frontend architecture.</p>
        </div>

        <div className="skill-card">
          <h3>Node.js</h3>
          <p>REST APIs, authentication, and server-side development.</p>
        </div>

        <div className="skill-card">
          <h3>MongoDB</h3>
          <p>NoSQL database design, CRUD, and aggregation pipelines.</p>
        </div>

        <div className="skill-card">
          <h3>DSA</h3>
          <p>Efficient algorithms, data structures, and problem-solving.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
