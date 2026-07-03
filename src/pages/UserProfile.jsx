import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function UserProfile() {
  useStylesheet(['/css/style.css', '/css/userprofile.css'])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your message has been sent.')
    e.target.reset()
  }

  return (
    <>
      <Navbar />

      {/* Cover Image Section */}
      <div className="profile-cover">
        <div className="cover-overlay"></div>
      </div>

      <main className="profile-main-container">
        <div className="profile-layout">

          {/* LEFT COLUMN: Sidebar */}
          <aside className="profile-sidebar">
            {/* User Card */}
            <div className="profile-sidebar-card main-info-card">
              <div className="avatar-wrapper">
                <img src="/images/rimaz.jpg" alt="Rimaz Nowfel" />
                <span className="active-badge"></span>
              </div>
              <h2>Rimaz Nowfel</h2>
              <p className="role-title">Environmental Researcher</p>
              <hr className="sidebar-divider" />
              <ul className="quick-details-list">
                <li><i className="fa-solid fa-cake-candles"></i><span><strong>Age:</strong> 20</span></li>
                <li><i className="fa-solid fa-map-location-dot"></i><span><strong>Hometown:</strong> Galle</span></li>
                <li><i className="fa-solid fa-phone"></i><span><strong>Contact:</strong> <a href="#availability" className="contact-number">+94 764879776</a></span></li>
              </ul>
            </div>

            {/* Availability Card */}
            <div className="profile-sidebar-card availability-card" id="availability">
              <h3><i className="fa-regular fa-calendar-days"></i> Availability</h3>
              <div className="calendar-wrapper">
                <table>
                  <thead>
                    <tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>9-12</td><td>9-12</td><td>9-12</td><td>9-12</td><td>9-12</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="availability-tip"><i className="fa-solid fa-circle-info"></i> Check availability before calling.</p>
            </div>

            {/* Goal Progress Card */}
            <div className="profile-sidebar-card progress-card">
              <h3><i className="fa-solid fa-chart-line"></i> Goal Progress</h3>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '75%' }}>
                  <span className="progress-text">75%</span>
                </div>
              </div>
              <p className="progress-desc">Progress towards environmental goals</p>
            </div>
          </aside>

          {/* RIGHT COLUMN: Main Content */}
          <section className="profile-content">
            {/* About Me */}
            <div className="profile-content-card">
              <h3><i className="fa-regular fa-user"></i> About Me</h3>
              <p className="about-me-text">Passionate about preserving biodiversity and promoting sustainable land use. I believe in the power of community action to protect our planet.</p>
            </div>

            {/* Skills, Goals & Experience */}
            <div className="profile-content-card">
              <h3><i className="fa-solid fa-briefcase"></i> Skills, Goals &amp; Experience</h3>
              <div className="boxes-container">
                <div className="box">
                  <div className="box-header"><i className="fa-solid fa-screwdriver-wrench"></i><h4>Skills</h4></div>
                  <ul><li>Conservation</li><li>Community Outreach</li><li>Data Analysis</li></ul>
                </div>
                <div className="box">
                  <div className="box-header"><i className="fa-solid fa-bullseye"></i><h4>Goals</h4></div>
                  <ul><li>Reduce deforestation</li><li>Promote reforestation</li><li>Advocate for wildlife protection</li></ul>
                </div>
                <div className="box">
                  <div className="box-header"><i className="fa-solid fa-graduation-cap"></i><h4>Experience</h4></div>
                  <ul><li>5 years in Wildlife Conservation</li><li>3 years in Community Education</li><li>2 years in Data Analysis</li></ul>
                </div>
              </div>
            </div>

            {/* Volunteering Activities */}
            <div className="profile-content-card">
              <h3><i className="fa-solid fa-hand-holding-heart"></i> Volunteering Activities</h3>
              <ul className="volunteering-list">
                <li>🌳 Tree Planting Drives</li>
                <li>🐾 Wildlife Conservation Projects</li>
                <li>🌍 Community Education on Sustainability</li>
              </ul>
            </div>

            {/* Interests */}
            <div className="profile-content-card">
              <h3><i className="fa-solid fa-heart"></i> Interests</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <div className="interest-img-wrapper"><img src="/images/userprofile/forest_conv.jpg" alt="Forest Conservation" /></div>
                  <span>🌿 Forest Conservation</span>
                </div>
                <div className="interest-item">
                  <div className="interest-img-wrapper"><img src="/images/userprofile/wildlife_protect.jpg" alt="Wildlife Protection" /></div>
                  <span>🦁 Wildlife Protection</span>
                </div>
                <div className="interest-item">
                  <div className="interest-img-wrapper"><img src="/images/userprofile/SustainableAgriculture.jpg" alt="Sustainable Agriculture" /></div>
                  <span>🌱 Sustainable Agriculture</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="profile-content-card contact-form-card">
              <h3><i className="fa-regular fa-envelope"></i> Contact Me</h3>
              <form className="profile-contact-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Your Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="submit-contact-btn">Send Message</button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <GoToTop />
      <Footer />
    </>
  )
}

export default UserProfile
