import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Content3() {
  useStylesheet(['/css/style.css', '/css/Contentpage.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <header style={{ backgroundImage: "url('/images/content4p2.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'rgb(184, 178, 178)', padding: '20px', textAlign: 'center', borderRadius: '5px', marginBottom: '20px' }}>
          <h1 className="title">Sustainable Agriculture and Land Management</h1>
          <p>Preserving the Environment Through Sustainable Farming Practices</p>
        </header>

        <nav className="contents">
          <h3>Contents</h3>
          <div className="column-container">
            <div className="column"><ul><li data-number="1"><a href="#role">The Role of Sustainable Farming</a></li></ul></div>
            <div className="column"><ul><li data-number="2"><a href="#challenges">Challenges in Sustainable Agriculture</a></li></ul></div>
            <div className="column"><ul><li data-number="3"><a href="#practices">Eco-Friendly Farming Practices</a></li></ul></div>
            <div className="column"><ul><li data-number="4"><a href="#support">Supporting Sustainable Agriculture</a></li></ul></div>
          </div>
        </nav>

        <section id="role">
          <h2>1. The Role of Sustainable Farming</h2>
          <p>Sustainable agriculture focuses on producing food while preserving natural resources. It ensures:</p>
          <ul>
            <li><strong>Healthy soil:</strong> Retains nutrients and supports long-term crop growth.</li>
            <li><strong>Efficient water use:</strong> Prevents wastage and reduces contamination.</li>
            <li><strong>Reduced chemical usage:</strong> Minimizes pollution and promotes biodiversity.</li>
          </ul>
          <div className="image-container">
            <img src="/images/content4p2.jpeg" alt="Sustainable farming with diverse crops" />
            <p className="caption">Sustainable farming ensures long-term agricultural productivity.</p>
          </div>
        </section>

        <section id="challenges">
          <h2>2. Challenges in Sustainable Agriculture</h2>
          <p>Despite its benefits, sustainable farming faces several obstacles:</p>
          <ul>
            <li><strong>Chemical overuse:</strong> Excess pesticides harm soil and biodiversity.</li>
            <li><strong>Water scarcity:</strong> Poor irrigation systems lead to wastage and droughts.</li>
            <li><strong>Soil degradation:</strong> Intensive farming strips soil of essential nutrients.</li>
            <li><strong>Rising food demand:</strong> Leads to deforestation for expanding farmland.</li>
          </ul>
        </section>

        <section id="practices">
          <h2>3. Eco-Friendly Farming Practices</h2>
          <p>Adopting eco-friendly farming techniques helps maintain environmental balance:</p>
          <ul>
            <li><strong>Crop rotation:</strong> Growing different crops each season to improve soil fertility.</li>
            <li><strong>Organic farming:</strong> Using natural fertilizers and pesticides.</li>
            <li><strong>Agroforestry:</strong> Integrating trees and plants into farming systems.</li>
            <li><strong>Renewable energy:</strong> Using solar and wind-powered farming tools.</li>
          </ul>
        </section>

        <section id="support">
          <h2>4. Supporting Sustainable Agriculture</h2>
          <p>Everyone can contribute to promoting sustainable agriculture:</p>
          <ul>
            <li>Buy organic and locally sourced food to reduce transportation emissions.</li>
            <li>Reduce food waste by consuming responsibly and composting leftovers.</li>
            <li>Advocate for policies that support sustainable farming and conservation.</li>
            <li>Educate farmers and communities about eco-friendly agricultural techniques.</li>
          </ul>
          <div className="image-container">
            <img src="/images/content4p3.jpeg" alt="Suitable farming place" />
            <p className="caption">Supporting sustainable agriculture helps build a healthier planet.</p>
          </div>
          <div className="highlight">
            <p>By choosing sustainable practices, we can protect the environment and ensure food security for future generations.</p>
          </div>
        </section>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default Content3
