const education = [
  { degree: 'Master of Computer Applications (MCA)', institution: 'K.L.N. College of Engineering, Anna University', period: '2024 - 2026', result: 'CGPA: 8.3' },
  { degree: 'Bachelor of Science in Information Technology (B.Sc. IT)', institution: 'The Madura College, Madurai Kamaraj University', period: '2021 - 2024', result: 'CGPA: 6.5' },
  { degree: 'Higher Secondary Certificate (HSC)', period: '2021', result: '76%' },
  { degree: 'Secondary School Leaving Certificate (SSLC)', period: '2019', result: '71%' },
]

function Education() {
  return <section id="education" className="education" aria-labelledby="education-title"><div className="section-heading"><p className="section-tag">MY BACKGROUND</p><h2 id="education-title">Education &amp; <span>Certifications</span></h2></div><div className="education-grid"><div><h3 className="education-label"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2.1v5.1c3.5 2.7 8.5 2.7 12 0v-5.1l-6 3-6-3Zm14-1v6h2V9.1l-2 1Z" /></svg>Education</h3><div className="education-list">{education.map(({ degree, institution, period, result }) => <article key={degree}><span>ED</span><div><h4>{degree}</h4>{institution && <p>{institution}</p>}<small>{period}{result ? ` | ${result}` : ''}</small></div></article>)}</div></div><div><h3 className="education-label"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.5 14 4l2.5-.5 1 2.3 2.3 1 .1 2.5L21.5 12l-1.6 2.2.5 2.5-2.3 1-1 2.3-2.5-.5-2.6 1.5-2.2-1.6-2.5.5-1-2.3-2.3-1-.1-2.5L2.5 12l1.6-2.2-.5-2.5 2.3-1 1-2.3 2.5.5L12 2.5Z" /><circle cx="12" cy="12" r="3.2" /></svg>Certifications</h3><article className="certificate-card"><iframe className="certificate-preview" src="/Internship%20certificate.pdf#toolbar=0&navpanes=0&view=FitH" title="Internship certificate preview" /><div className="certificate-info"><span aria-hidden="true">PDF</span><div><h4>Software Development Internship</h4><p>VIBI Software Solutions · 2026</p></div></div><a className="certificate-link" href="/Internship%20certificate.pdf" target="_blank" rel="noreferrer">View certificate</a></article></div></div></section>
}
export default Education
