import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Content4() {
  useStylesheet(['/css/style.css', '/css/Contentpage.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <header style={{ backgroundImage: "url('/images/illegalwildlife.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'rgb(184, 178, 178)', padding: '20px', textAlign: 'center', borderRadius: '5px', marginBottom: '20px' }}>
          <h1 className="title">Protection of Wildlife and Illegal Hunting</h1>
          <p>Protecting, Restoring, and Promoting Sustainable for the Land</p>
        </header>

        <nav className="contents">
          <h3>Contents</h3>
          <div className="column-container">
            <div className="column"><ul><li data-number="1"><a href="#introduction">Effect on Ecosystems</a></li></ul></div>
            <div className="column"><ul><li data-number="2"><a href="#biodiversity-importance">Commonly Poached Species</a></li></ul></div>
            <div className="column"><ul><li data-number="3"><a href="#biodiversity-threats">Anti-Poaching Measures</a></li></ul></div>
            <div className="column"><ul><li data-number="4"><a href="#individual-action">How You Can Help</a></li></ul></div>
          </div>
        </nav>

        <section id="introduction">
          <h2>1. Poaching's Effect on Ecosystems</h2>
          <p>Around the world, poaching, the unlawful killing or capturing of wildlife—has a disastrous impact on ecosystems. By eliminating important species that are essential to preserving ecological stability, it upsets the delicate balance of the natural world.</p>
          <div className="image-container">
            <img src="/images/animalrights.jpg" alt="Saving animal rights" />
            <p className="caption">Animal rights support, only given by the 40% of all visitors of them.</p>
          </div>
          <p>Because poaching pushes endangered species closer to extinction, it also endangers biodiversity. Due to habitat loss and climate change, many of the creatures that poachers target—including pangolins, elephants, and rhinos—are already in danger.</p>
          <div className="fact-box">
            <h4>Fact:</h4>
            <p>Elephants, often poached for their ivory, are known as "ecosystem engineers" because their activities, like digging water holes and dispersing seeds, benefit countless other species.</p>
          </div>
          <p>This page delves into the critical aspects of wildlife protection, from combating illegal poaching and safeguarding endangered species to promoting anti-poaching measures and fostering community-driven conservation efforts for a sustainable future.</p>
        </section>

        <section id="biodiversity-importance">
          <h2>2. Commonly Poached Species</h2>
          <p>Poaching targets a wide range of species, often for their perceived value in illegal markets. Some of the most commonly poached animals include:</p>
          <h3>Poached Species</h3>
          <p>These species are not only vital to their ecosystems but also hold cultural and ecological significance.</p>
          <ul>
            <li><strong>Elephants:</strong> Hunted for their ivory tusks, which are carved into ornaments and jewelry.</li>
            <li><strong>Rhinos:</strong> Targeted for their horns, falsely believed to have medicinal properties.</li>
            <li><strong>Tigers:</strong> Sought after for their skins, bones, and other body parts used in traditional remedies.</li>
          </ul>
          <div className="image-container">
            <img src="/images/amimals.jpg" alt="Poached Species" />
            <p className="caption">Poached Species</p>
          </div>
          <div className="fact-box">
            <h4>Biodiversity Fact</h4>
            <p>A single gram of soil can contain more than 10,000 different species of microorganisms, highlighting the extraordinary complexity and diversity of life even at microscopic scales.</p>
          </div>
        </section>

        <section id="biodiversity-threats">
          <h2>3. Anti-Poaching Measures</h2>
          <p>Efforts to combat poaching have intensified in recent years, with governments, conservation organizations, and local communities working together to protect wildlife.</p>
          <h3>Key anti-poaching measures include:</h3>
          <ul>
            <li><strong>Strengthening Law Enforcement:</strong> Increasing patrols, deploying drones, and using advanced tracking technology to monitor wildlife and catch poachers.</li>
            <li><strong>Community Involvement:</strong> Engaging local communities in conservation efforts by providing alternative livelihoods and educating them about the importance of wildlife protection.</li>
            <li><strong>International Cooperation:</strong> Enforcing global agreements like CITES to regulate and prevent the illegal wildlife trade.</li>
          </ul>
          <div className="image-container">
            <img src="/images/EngagingWildlife.jpg" alt="Engaging with wildlife without harming" />
            <p className="caption">Engaging with wildlife without harming any animals</p>
          </div>
          <div className="highlight">
            <p>Despite global efforts, the illegal wildlife trade is estimated to be worth billions of dollars annually, making it one of the most lucrative illegal industries in the world.</p>
          </div>
        </section>

        <section id="individual-action">
          <h2>4. How You Can Help</h2>
          <p>Every person can contribute to biodiversity conservation through everyday actions. Here's how you can make a difference:</p>
          <h3>Support Anti-Poaching Organizations</h3>
          <p>Donate to or volunteer with organizations dedicated to wildlife protection and anti-poaching efforts.</p>
          <h3>Avoid Illegal Wildlife Products</h3>
          <p>Refrain from purchasing products made from endangered species, such as ivory, rhino horn, or exotic animal skins.</p>
          <h3>Raise Awareness</h3>
          <p>Educate others about the devastating effects of poaching and the importance of wildlife conservation.</p>
          <div className="highlight">
            <p>Every effort counts in the fight against poaching. By taking action, you help ensure that future generations can experience the wonder of a world rich in wildlife and biodiversity.</p>
          </div>
        </section>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default Content4
