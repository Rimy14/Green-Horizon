import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Content1() {
  useStylesheet(['/css/style.css', '/css/Contentpage.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <header style={{ backgroundImage: "url('/images/content1/HeadingBG.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'rgb(184, 178, 178)', padding: '20px', textAlign: 'center', borderRadius: '5px', marginBottom: '20px' }}>
          <h1 className="title">The Importance of Biodiversity Conservation</h1>
          <p>Protecting, Restoring, and Promoting Sustainable Use of Terrestrial Ecosystems</p>
        </header>

        <nav className="contents">
          <h3>Contents</h3>
          <div className="column-container">
            <div className="column"><ul><li data-number="1"><a href="#Introduction">Introduction</a></li></ul></div>
            <div className="column"><ul><li data-number="2"><a href="#Biodiversity">Importance of Biodiversity</a></li></ul></div>
            <div className="column"><ul><li data-number="3"><a href="#Threats">Threats to Biodiversity</a></li></ul></div>
            <div className="column"><ul><li data-number="4"><a href="#Help">How Individuals Can Help</a></li></ul></div>
          </div>
        </nav>

        <section id="Introduction">
          <h2>1. Introduction to Life on Land</h2>
          <p>Life on land encompasses the rich diversity of terrestrial ecosystems that support countless species and provide essential resources for human survival and well-being. From vast forests and grasslands to arid deserts and towering mountains, land ecosystems are vital for biodiversity, climate regulation, and sustainable development.</p>
          <div className="image-container">
            <img src="/images/content1/Content1_Topic1.jpeg" alt="Diverse terrestrial ecosystem showing forest, mountains, and grassland" />
            <p className="caption">The Earth's terrestrial ecosystems support 80% of all plant and animal species.</p>
          </div>
          <p>Land ecosystems face unprecedented challenges from human activities, including deforestation, desertification, pollution, and climate change. These threats jeopardize biodiversity, ecosystem services, and the livelihoods of millions of people who depend directly on land resources.</p>
          <div className="fact-box">
            <h4>Did You Know?</h4>
            <p>Forests cover approximately 31% of the world's land area, but we're losing them at an alarming rate of about 10 million hectares per year.</p>
          </div>
          <p>This page explores the various aspects of life on land, from biodiversity conservation and forest protection to sustainable land practices and innovative solutions for preserving our terrestrial ecosystems for future generations.</p>
        </section>

        <section id="Biodiversity">
          <h2>2. The Importance of Biodiversity</h2>
          <p>Biodiversity refers to the vast variety of life forms on Earth, including animals, plants, fungi, and microorganisms, as well as the ecosystems they form. It plays a fundamental role in maintaining the balance of nature and sustaining life on our planet.</p>
          <h3>Why Biodiversity Matters</h3>
          <p>The presence of diverse species within an ecosystem ensures stability and adaptability to environmental changes. Here's why biodiversity is so important:</p>
          <ul>
            <li><strong>Ecosystem Stability:</strong> Biodiversity helps ecosystems recover from disturbances such as natural disasters, disease outbreaks, and climate fluctuations.</li>
            <li><strong>Medicinal Resources:</strong> A significant proportion of modern medicines, including antibiotics and cancer treatments, are derived from plants, and even animal toxins.</li>
            <li><strong>Climate Regulation:</strong> Forests, wetlands, and oceans play a crucial role in absorbing carbon dioxide from the atmosphere, reducing the impact of climate change.</li>
          </ul>
          <div className="image-container">
            <img src="/images/content1/Content1_Topic2.jpeg" alt="Diverse biodiversity in a forest ecosystem" />
            <p className="caption">Biodiversity provides essential ecosystem services that support all life on Earth.</p>
          </div>
          <div className="fact-box">
            <h4>Biodiversity Fact</h4>
            <p>A single gram of soil can contain more than 10,000 different species of microorganisms, highlighting the extraordinary complexity and diversity of life even at microscopic scales.</p>
          </div>
        </section>

        <section id="Threats">
          <h2>3. Threats to Biodiversity</h2>
          <p>Despite its importance, biodiversity is being rapidly eroded by human activities. The current rate of species extinction is estimated to be 100 to 1,000 times higher than natural background rates.</p>
          <h3>Major Threats</h3>
          <ul>
            <li><strong>Deforestation:</strong> The widespread destruction of forests for farming, cities, and logging eliminates habitats, driving many species toward extinction.</li>
            <li><strong>Illegal Wildlife Trade:</strong> The illegal hunting, poaching, and trafficking of endangered species for fur, ivory, medicine, and the pet trade severely threaten biodiversity.</li>
            <li><strong>Pollution:</strong> Plastic waste, chemical runoff, and oil spills pollute ecosystems, harming land and marine life.</li>
          </ul>
          <div className="image-container">
            <img src="/images/content1/Content1_Topic3.jpeg" alt="Deforestation showing cleared forest land" />
            <p className="caption">Deforestation is one of the leading causes of habitat loss and biodiversity decline worldwide.</p>
          </div>
          <div className="highlight">
            <p>We are currently witnessing what scientists call the "sixth mass extinction" - a rapid loss of species primarily caused by human activities.</p>
          </div>
        </section>

        <section id="Help">
          <h2>4. How Individuals Can Help</h2>
          <p>Every person can contribute to biodiversity conservation through everyday actions. Here's how you can make a difference:</p>
          <h3>Support Conservation Organizations</h3>
          <p>Donating to or volunteering with organizations that work to protect endangered species and restore ecosystems can have a meaningful impact.</p>
          <h3>Reduce Waste and Pollution</h3>
          <p>Minimizing plastic use, recycling, composting, and reducing chemical waste can help protect the environment from pollution.</p>
          <div className="image-container">
            <img src="/images/content1/Content1_Topic4.jpeg" alt="Person engaged in conservation activities" />
            <p className="caption">Individual actions, when multiplied across communities, can create meaningful positive change for biodiversity conservation.</p>
          </div>
          <h3>Make Sustainable Consumer Choices</h3>
          <p>Opting for products that are certified sustainable helps support industries that prioritize environmental responsibility.</p>
          <div className="highlight">
            <p>Every purchase is a vote for the kind of world you want to live in. By choosing products that are produced sustainably, you're supporting companies that prioritize environmental stewardship.</p>
          </div>
          <h3>Spread Awareness</h3>
          <p>Educating others about the importance of biodiversity conservation and advocating for policy changes can inspire collective action.</p>
          <p>By taking action now, we ensure that future generations inherit a planet rich in life and ecological balance.</p>
        </section>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default Content1
