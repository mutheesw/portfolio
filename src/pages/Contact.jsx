import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const sendMessage = (event) => {
    event.preventDefault()
    const text = `Hello, I am ${form.name || 'a visitor'} (${form.email || 'no email provided'}). Subject: ${form.subject || 'Portfolio enquiry'}. ${form.message}`
    window.open(`https://wa.me/917708308561?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }
  return <>
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="section-heading"><p className="section-tag">LET'S TALK</p><h2 id="contact-title">Get In <span>Touch</span></h2><p>Have a project in mind or want to hire me? I would love to hear from you.</p></div>
      <div className="contact-grid">
        <div>
          <h3 className="contact-title">Contact Information</h3>
          <p className="contact-lead">Feel free to reach out through any channel below or send a message directly.</p>
          <div className="contact-cards">
            <a href="tel:+7708308561"><b>Phone / Call</b><span>+7708308561</span></a>
            <a href="mailto:mutheew02@gmail.com"><b>Email</b><span>mutheew02@gmail.com</span></a>
            <a href="https://wa.me/917708308561" target="_blank" rel="noreferrer"><b>WhatsApp</b><span>7708308561</span></a>
            <a href="https://www.linkedin.com/in/muthees-waran-421514380/" target="_blank" rel="noreferrer"><b>LinkedIn</b><span>Connect with me</span></a>
          </div>
          <a className="resume-button" href="/Mutheeswaran_CV.pdf" target="_blank" rel="noreferrer">Download My Resume</a>
        </div>
        <form className="contact-form" onSubmit={sendMessage}>
          <input name="name" value={form.name} onChange={update} placeholder="Your Name" pattern="[A-Za-z ]+" title="Use letters and spaces only." autoComplete="name" required />
          <input name="email" value={form.email} onChange={update} placeholder="Your Email" type="email" title="Enter a valid email address." autoComplete="email" required />
          <input name="phone" value={form.phone} onChange={update} placeholder="Phone (Optional)" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} title="Enter exactly 10 digits." autoComplete="tel" />
          <input name="subject" value={form.subject} onChange={update} placeholder="Subject" pattern="[A-Za-z ]+" title="Use letters and spaces only." required />
          <textarea name="message" value={form.message} onChange={update} placeholder="Your Message (Optional)" />
          <button type="submit">Send via WhatsApp</button>
          <small>Your message will open in WhatsApp, ready to send.</small>
        </form>
      </div>
    </section>
    <footer className="site-footer">
      <a className="brand" href="#home" aria-label="Mutheeswaran, back to home"><span>&lt;</span>MUTHEESWARAN M <span>/&gt;</span></a>
      <nav className="footer-socials" aria-label="Social and contact links">
        <a href="mailto:mutheew02@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm2 2v.6l7 5.1 7-5.1V7l-7 5-7-5Z" /></svg></a>
        <a href="tel:+7708308561" aria-label="Call"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 10 6.2 7.8 9a15 15 0 0 0 7.2 7.2l2.8-2.2 3.4 3.4-1.6 3.1c-.4.8-1.3 1.2-2.2 1A19.2 19.2 0 0 1 2.5 6.6c-.2-.9.2-1.8 1-2.2l3.1-1.6Z" /></svg></a>
        <a href="https://www.linkedin.com/in/muthees-waran-421514380/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4 4 0 0 1 16.7 8c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H9.4V9Z" /></svg></a>
        <a href="https://wa.me/917708308561" target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.4 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4v-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.9 4.3 4.3 0 0 0 .9 2.3 9.8 9.8 0 0 0 3.8 3.4c.5.2.9.4 1.2.4.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.4-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.3Z" /></svg></a>
      </nav>
      <small>© {new Date().getFullYear()} Mutheeswaran. All rights reserved.</small>
    </footer>
  </>
}
export default Contact
