import { useEffect, useState } from 'react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  useEffect(() => {
    let frame = 0
    const updateActive = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
        const activationLine = headerHeight + Math.min(100, window.innerHeight * 0.15)
        const sections = links.map((link) => ({
          link,
          element: link === 'Home'
            ? document.querySelector('#home .hero')
            : document.getElementById(link.toLowerCase()),
        }))
        const current = sections.reduce((activeSection, section) => {
          if (section.element && section.element.getBoundingClientRect().top <= activationLine) {
            return section.link
          }
          return activeSection
        }, 'Home')
        setActive(current)
      })
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])
  return <header className="site-header"><div className="container">
    <a className="brand" href="#home" aria-label="Home"><span>&lt;</span>MUTHEESWARAN M<span>/&gt;</span></a>
    <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i><i></i></button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      {links.map((link) => <a key={link} className={link === active ? 'active' : ''} href={`#${link.toLowerCase()}`} onClick={() => { setActive(link); setMenuOpen(false) }}>{link}</a>)}
      <a className="nav-resume" href="/Mutheeswaran_CV.pdf" download="Mutheeswaran_CV.pdf">↧&nbsp; Resume</a>
    </nav>
  </div></header>
}

export default Header
