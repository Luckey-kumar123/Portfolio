import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 <span>Luckey Kumar</span> | FullStack MERN Stack Developer 
        </p>

        <div className="footer-links">
          <a href="https://github.com/sharma78578" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luckey-kumar-267218257/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
