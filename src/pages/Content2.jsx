import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Content2() {
  useStylesheet(['/css/style.css', '/css/Contentpage.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <header style={{ backgroundImage: "url('/images/content2/content2p1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'rgb(184, 178, 178)', padding: '20px', textAlign: 'center', borderRadius: '5px', marginBottom: '20px' }}>
          <h1 className="title">Deforestation: Causes, Consequences, and Solutions</h1>
          <p>Protecting, Restoring, and Promoting Sustainable Use of Forests</p>
        </header>

        <nav className="contents">
          <h3>Contents</h3>
          <div className="column-container">
            <div className="column"><ul><li data-number="1"><a href="#introduction">Introduction</a></li></ul></div>
            <div className="column"><ul><li data-number="2"><a href="#deforestation-causes">Causes of Deforestation</a></li></ul></div>
            <div className="column"><ul><li data-number="3"><a href="#deforestation-consequences">Consequences of Deforestation</a></li></ul></div>
            <div className="column"><ul><li data-number="4"><a href="#solutions">Solutions to Deforestation</a></li></ul></div>
          </div>
        </nav>

        <section id="introduction">
          <h2>1. Introduction to Deforestation</h2>
          <p>Deforestation is the large-scale clearing of forests, often to make way for agriculture, infrastructure, or urban expansion. Every year, approximately 10 million hectares of forest are lost, affecting biodiversity and climate stability.</p>
          <div className="image-container">
            <img src="/images/content2/content2p2.jpeg" alt="Large-scale deforestation in a forest" />
            <p className="caption">Deforestation is one of the leading causes of environmental degradation.</p>
          </div>
          <p>Forests provide numerous services, including regulating the climate, supporting biodiversity, and offering livelihoods for indigenous communities.</p>
        </section>

        <section id="deforestation-causes">
          <h2>2. Causes of Deforestation</h2>
          <p>Deforestation occurs due to a variety of reasons, many of which are driven by human activities.</p>
          <h3>Key Causes of Deforestation</h3>
          <ul>
            <li><strong>Agriculture:</strong> Clearing forests to make space for crops and livestock farming is the primary driver of deforestation.</li>
            <li><strong>Urbanization:</strong> As populations grow, forests are cleared for the development of cities, roads, and infrastructure.</li>
            <li><strong>Logging:</strong> Industrial logging for timber, paper, and other wood products contributes significantly to forest destruction.</li>
            <li><strong>Mining:</strong> Extracting valuable minerals and oil from forested areas leads to deforestation and ecosystem destruction.</li>
          </ul>
        </section>

        <section id="deforestation-consequences">
          <h2>3. Consequences of Deforestation</h2>
          <p>Deforestation has severe and far-reaching impacts on the environment, society, and the global climate.</p>
          <h3>Environmental and Social Impacts</h3>
          <ul>
            <li><strong>Loss of Biodiversity:</strong> Forests are home to a wide variety of species, many of which face extinction due to habitat destruction.</li>
            <li><strong>Climate Change:</strong> Forests act as carbon sinks, and their destruction contributes significantly to the release of carbon dioxide.</li>
            <li><strong>Soil Erosion:</strong> Without tree roots to anchor the soil, deforestation leads to increased erosion and desertification.</li>
            <li><strong>Displacement of Communities:</strong> Indigenous communities that rely on forests are often displaced when forests are cleared.</li>
          </ul>
          <div className="image-container">
            <img src="/images/content2/content2p3.jpeg" alt="Soil erosion and loss of biodiversity" />
            <p className="caption">Deforestation leads to soil erosion, loss of biodiversity, and disrupted ecosystems.</p>
          </div>
        </section>

        <section id="solutions">
          <h2>4. Solutions to Deforestation</h2>
          <p>Despite the scale of the deforestation crisis, there are various strategies that can be implemented to reduce forest loss and restore damaged ecosystems.</p>
          <h3>Sustainable Land Use Practices</h3>
          <ul>
            <li><strong>Agroforestry:</strong> Combining trees with crops or livestock in agricultural systems helps maintain forest cover.</li>
            <li><strong>Reforestation:</strong> Planting trees in areas where forests have been lost can restore ecosystems.</li>
            <li><strong>Stronger Policies:</strong> Governments should enforce stricter logging restrictions and promote sustainable land-use policies.</li>
            <li><strong>Alternative Products:</strong> Promoting the use of sustainable materials such as bamboo and recycled products.</li>
          </ul>
          <h3>What You Can Do</h3>
          <ul>
            <li>Support reforestation projects by donating or volunteering with environmental organizations.</li>
            <li>Choose products that are sustainably sourced, such as FSC-certified wood and paper.</li>
            <li>Reduce paper consumption by going digital whenever possible.</li>
            <li>Raise awareness about the importance of forests and the need for conservation.</li>
          </ul>
          <div className="highlight">
            <p>By taking action now, we can help protect forests for future generations and combat the growing threat of climate change.</p>
          </div>
        </section>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default Content2
