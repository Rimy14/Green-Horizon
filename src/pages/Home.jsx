import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Home() {
  useStylesheet(['/css/style.css', '/css/home.css'])
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero bg image section */}
      <div className="bg-container">
        <img src="/images/bg1.jpg" alt="Background Image" className="bg-image" />
        <div className="content">
          <h1>Save the Environment!<br />Let's Grow Plants</h1>
          <p>Lets plant 1 Milion plants all over the world.</p>
          <button className="button" onClick={() => navigate('/table')}>Join Us</button>
        </div>
      </div>

      {/* Cards */}
      <section className="card-container" id="section1">
        <div className="card">
          <div className="card-icon">
            <img src="/Icons/plant.png" alt="Save Our Forest" />
          </div>
          <h3>Save Our Forest</h3>
          <p>Plant a tree today, grow a greener tomorrow. Join our efforts to restore vital forests and combat climate change.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img src="/Icons/worldwide.png" alt="Save Our World" />
          </div>
          <h3>Save Our World</h3>
          <p>Every action counts. Contribute to sustainable practices and help build a resilient future for generations to come.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img src="/Icons/recycling.png" alt="Recycling" />
          </div>
          <h3>Recycling</h3>
          <p>Reduce, reuse, recycle. Simple steps, big impact. Learn how to minimize waste and protect our natural resources.</p>
        </div>
      </section>

      {/* Content pages */}
      <div className="content-container">
        <div className="content-box" onClick={() => navigate('/content1')}>
          <img src="/images/content1/HeadingBG.jpeg" alt="Image 1" />
          <p className="content-text">The Importance of Biodiversity Conservation</p>
          <span className="read-more">Read More</span>
        </div>
        <div className="content-box" onClick={() => navigate('/content2')}>
          <img src="/images/content2/content2p1.jpeg" alt="Image 2" />
          <p className="content-text">Deforestation: Causes, Consequences, and Solutions</p>
          <span className="read-more">Read More</span>
        </div>
        <div className="content-box" onClick={() => navigate('/content3')}>
          <img src="/images/content4p2.jpeg" alt="Image 3" />
          <p className="content-text">Sustainable Agriculture and Land Management</p>
          <span className="read-more">Read More</span>
        </div>
        <div className="content-box" onClick={() => navigate('/content4')}>
          <img src="/images/illegalwildlife.jpg" alt="Image 4" />
          <p className="content-text">Protection of Wildlife and Illegal Hunting</p>
          <span className="read-more">Read More</span>
        </div>
      </div>

      <GoToTop />

      {/* Footer image */}
      <div className="footer_image">
        <img src="/images/footerbg.png" alt="Footer image" />
      </div>

      <Footer />
    </>
  )
}

export default Home
