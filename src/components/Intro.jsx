import "./Intro.css";
import profileImg from "../assets/image_portflio.png"; // 👈 image import

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-container">

        {/* LEFT CONTENT */}
        <div className="intro-content">
          <h1>
            Hi, I'm <span>Luckey Kumar</span>
          </h1>

          <h3>Full Stack MERN Developer</h3>

          <p>
            I build scalable, high-performance, and modern web applications
            using React, Node.js, and MongoDB.
          </p>

          <div className="intro-buttons">
            <a href="/resume.pdf" download>
              <button className="primary-btn">Download Resume</button>
            </a>

            <a href="#contact">
              <button className="secondary-btn">Contact Me</button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-image">
          <img src={profileImg} alt="Luckey Kumar" />
        </div>

      </div>
    </section>
  );
}

export default Intro;
