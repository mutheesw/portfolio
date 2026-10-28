import { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'

const roles = ['CREATIVE THINKER.', 'PASSIONATE DEVELOPER.', 'TECH ENTHUSIAST.']

function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const finished = text === currentRole
    const empty = text === ''
    const delay = finished && !deleting ? 1500 : deleting ? 35 : 65
    const timer = setTimeout(() => {
      if (finished && !deleting) setDeleting(true)
      else if (deleting && empty) { setDeleting(false); setRoleIndex((index) => (index + 1) % roles.length) }
      else setText(currentRole.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return <p className="role"><span className="role-prefix">I AM A</span> <strong>{text}</strong><span className="typing-cursor" aria-hidden="true">|</span></p>
}

function Home() {
  return (
    <>
      <Header />
      <main id="home" className="container"><section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="availability"><b></b> Available for opportunities</p><h1 id="hero-title">Mutheeswaran M</h1><RotatingRole /><p className="summary">A passionate developer focused on creating fast, accessible and delightful digital products that make a difference.</p><div className="hero-actions"><a className="button primary" href="#projects">↓&nbsp; View My Work</a><a className="button secondary" href="#contact">✉&nbsp; Get In Touch</a></div><div className="social-links" aria-label="Social links"><a href="mailto:mutheeww02@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm2 2v.6l7 5.1 7-5.1V7l-7 5-7-5Z" /></svg></a><a href="https://www.linkedin.com/in/muthees-waran-421514380/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4 4 0 0 1 16.7 8c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H9.4V9Z" /></svg></a><a href="https://wa.me/917708308561" target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.4 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4v-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.9 4.3 4.3 0 0 0 .9 2.3 9.8 9.8 0 0 0 3.8 3.4c.5.2.9.4 1.2.4.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.4-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.3Z" /></svg></a></div></div>
        <div className="hero-visual"><div className="portrait-ring"><img className="profile-photo" src="/images/profile.jpg" alt="Your profile" /></div><div className="stats"><div><b>6 Months</b><small>Internship Exp</small></div><div><b>2+</b><small>Projects</small></div><div><b>100%</b><small>Passion</small></div><div><b>13+</b><small>Modules</small></div></div></div>
      </section><About /><Skills /><Experience /><Projects /><Education /><Contact /></main>
    </>
  )
}

export default Home
