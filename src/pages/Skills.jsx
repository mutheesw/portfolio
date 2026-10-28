const groups = [
  ['Frontend', ['React.js', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']],
  ['Backend', ['Node.js', 'Python', 'PHP', 'REST APIs', 'Authentication']],
  ['Database', ['MySQL', 'MongoDB', 'Schema Design', 'Query Optimization']],
  ['Tools & Build', ['Bitbucket', 'GitHub', 'Vite', 'VS Code']],
  ['AI Tools', ['Claude', 'Stitch', 'Nubeta','Chatgpt']],
  ['Soft Skills', ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability']],
]

function Skills() {
  return <section id="skills" className="skills" aria-labelledby="skills-title"><div className="section-heading"><p className="section-tag">WHAT I KNOW</p><h2 id="skills-title">Technical <span>Skills</span></h2><p>A practical toolkit for building polished, reliable web products.</p></div><div className="skills-grid"><div><h3 className="skills-label">Tech Stack</h3><div className="skill-groups">{groups.map(([name, items]) => <div className="skill-group" key={name}><h4>{name}</h4><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></div></section>
}
export default Skills
