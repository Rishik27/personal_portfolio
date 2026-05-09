import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mqedbvoe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const links = [
    {
      icon: "📧",
      label: "Email",
      value: "rishikvadapalli@gmail.com",
      href: "mailto:rishikvadapalli@gmail.com",
      color: "#FF4D6D",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7330924066",
      href: "tel:+917330924066",
      color: "#FFD60A",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/rishik-vadapalli",
      href: "https://linkedin.com/in/rishik-vadapalli-9232b3198/",
      color: "#00D4FF",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/Rishik27",
      href: "https://github.com/Rishik27",
      color: "#9B5DE5",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-badge">Contact</div>
          <h2 className="section-title">
            Let's <span className="grad-text-fire">Work Together</span>
          </h2>
          <p className="contact-intro">
            I'm open to new opportunities and exciting projects. Feel free to
            reach out!
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info-col">
            <div className="contact-tagline">
              Based in <strong>Hyderabad, Telangana</strong>
              <br />
              Open to remote roles worldwide
            </div>
            <div className="contact-links">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ "--link-color": l.color }}
                >
                  <div className="contact-link-icon">{l.icon}</div>
                  <div>
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                  <div className="contact-link-arrow">↗</div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Project Inquiry"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "success"
                    ? "Sent! ✓"
                    : "Send Message →"}
              </button>
              {status === "success" && (
                <div className="form-success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="form-error">
                  ❌ Something went wrong. Email me directly at{" "}
                  <a href="mailto:rishikvadapalli@gmail.com">
                    rishikvadapalli@gmail.com
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Rishik Vadapalli · Built with React</p>
        <div className="footer-links">
          <a
            href="https://github.com/Rishik27"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rishik-vadapalli-9232b3198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
};
export default Contact;
