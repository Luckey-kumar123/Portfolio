import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project idea or want to collaborate? Let’s connect.
      </p>

      <div className="contact-wrapper">
        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
