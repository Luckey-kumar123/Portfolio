import "./Intro.css";
import Profile from '../assets/profile .png' // remove space in file name
import Lucky from '../assets/Luckey Kumar B.tech Cse.pdf';

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-container">

        {/* LEFT CONTENT */}
        <div className="intro-content">
          <h4 className="intro-tag">👋 Welcome to My Portfolio</h4>

          <h1>
            Hi, I'm <span className="highlight">Luckey Kumar</span>
          </h1>

          <h2 className="intro-role">
            FullStack MERN Developer
          </h2>

          <p className="intro-description">
            Passionate developer specializing in building modern,
            scalable, and high-performance web applications using
            React, Node.js, Express.js, MongoDB, and MySQL.
          </p>

          <div className="intro-buttons">
            <a href={Lucky} download>
              <button className="primary-btn">
                📄 Download Resume
              </button>
            </a>

            <a href="#contact">
              <button className="secondary-btn">
                📩 Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-image">
          <div className="image-wrapper">
            <img
              src={Profile}
              alt="Luckey Kumar - Full Stack Developer"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Intro;
