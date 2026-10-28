const strengths = [
  ['Backend Engineering', 'Building backend features and REST APIs with PHP (Laravel) and Python, including API integrations and database operations.'],
  ['Database Optimization', 'Achieving ~30% performance gains through MySQL indexing, schema normalization & query restructuring.'],
  ['Frontend Development', 'Building responsive, user-friendly interfaces with React.js, Vue.js, and modern web technologies.'],
  ['Security & Auth', 'Applying secure authentication, role-based access control, and input validation in PHP and Python applications.'],
]

function About() {
  return <section id="about" className="about" aria-labelledby="about-title">
    <div className="section-heading"><p className="section-tag">WHO I AM</p><h2 id="about-title">About <span>Me</span></h2><p>Result-driven developer building thoughtful, production-ready web experiences.</p></div>
    <div className="about-grid"><div className="about-copy"><p>Proactive and passionate <strong>Full-Stack Developer</strong> with practical experience in designing and developing modern web applications using React.js, Vue.js, PHP (Laravel), Python, MySQL, and MongoDB.</p><p>Skilled in transforming requirements into responsive, user-centric, and reliable software solutions across frontend and backend layers. Strong understanding of API integration, database management, debugging, and application development, complemented by a structured approach to problem-solving.</p><p>Known for being a quick learner, adaptable team player, and technology-driven developer committed to delivering quality software and continuously improving technical skills.</p><div className="contact-list"><p><b>Location</b> Tamil Nadu, India</p><p><b>Email</b> yourname@email.com</p><p><b>Phone</b> +91 00000 00000</p><p><b>Education</b> Your degree / university</p></div></div><div className="strength-grid">{strengths.map(([title, text], index) => <article className="strength-card" key={title}><span className="strength-icon">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
  </section>
}

export default About
