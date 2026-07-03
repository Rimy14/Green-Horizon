import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function TablePage() {
  useStylesheet(['/css/style.css', '/css/table.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className="role-table">
          <h2>Tree Protection &amp; Planting: Choose Your Role</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th className="basic"><img src="/Icons/plant.png" alt="plant" /> Tree Supporter</th>
                <th className="advanced"><img src="/Icons/tree.png" alt="Sapling" /> Tree Guardian</th>
                <th className="ultimate"><img src="/Icons/forest.png" alt="Forest" /> Forest Protector</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Join Tree-Planting Events</td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Plant Native Trees</td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Protect Existing Trees</td>
                <td><img src="/Icons/cross.png" alt="Cross" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Reduce Paper Waste</td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Water &amp; Care for Young Trees</td>
                <td><img src="/Icons/cross.png" alt="Cross" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Support Anti-Deforestation Laws</td>
                <td><img src="/Icons/cross.png" alt="Cross" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
              <tr>
                <td>Create Green Spaces</td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
                <td><img src="/Icons/tick.png" alt="Tick" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default TablePage
