import { useState, useEffect } from 'react'

function GoToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      id="goToTopBtn"
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}

export default GoToTop
