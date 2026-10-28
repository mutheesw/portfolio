const highlights = [
  'Developed and enhanced responsive web applications based on business requirements and functional specifications.',
  'Contributed to end-to-end application development, including frontend implementation, backend integration, and database operations.',
  'Performed manual testing, debugging, and bug identification to improve application quality and reliability.',
  'Applied problem-solving and troubleshooting skills to identify application issues and support effective solutions.',
]

function Experience() {
  return <section id="experience" className="experience" aria-labelledby="experience-title"><div className="section-heading"><p className="section-tag">MY JOURNEY</p><h2 id="experience-title">Internship <span>Experience</span></h2><p>Hands-on learning through real-world product development.</p></div><div className="timeline"><article className="experience-card"><div className="experience-top"><div><h3>Software Development Intern</h3><p className="company">VIBI Software Solutions <span>|</span> Madurai</p></div><p className="duration">Jan 2026 - Jun 2026 · 6 months</p></div><ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>
}
export default Experience
