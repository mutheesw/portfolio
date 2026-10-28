import { useEffect } from 'react'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    const actionBar = document.querySelector('.hero-actions')
    if (!actionBar || actionBar.dataset.updated) return
    const [primaryButton, contactButton] = actionBar.querySelectorAll('a')
    if (primaryButton) {
      primaryButton.textContent = 'Download Resume'
      primaryButton.href = '/Mutheeswaran_CV.pdf'
      primaryButton.target = '_blank'
      primaryButton.rel = 'noreferrer'
    }
    if (contactButton) contactButton.textContent = 'Get In Touch'
    const callButton = document.createElement('a')
    callButton.className = 'button call-button'
    callButton.href = 'tel:+7708308561'
    callButton.textContent = 'Call Me'
    actionBar.append(callButton)
    const contactDetails = ['Madurai, Tamil Nadu, India', 'mutheew02@gmail.com', '+7708308561', 'MCA - KLN College of Engineering']
    const contactIcons = [0x1f4cd, 0x2709, 0x1f4de, 0x1f393]
    document.querySelectorAll('.contact-list p').forEach((item, index) => {
      const icon = document.createElement('span')
      icon.className = 'contact-icon'
      icon.textContent = String.fromCodePoint(contactIcons[index])
      const value = document.createElement('span')
      value.textContent = contactDetails[index] || ''
      item.replaceChildren(icon, value)
    })
    actionBar.dataset.updated = 'true'
  }, [])

  return <Home />
}

export default App
