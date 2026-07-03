import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-column branding-column">
            <Link to="/home" className="footer-logo">
              <img src="/logo.png" alt="Logo" />
              <h2>Green Horizon</h2>
            </Link>
            <p>Green Horizon is committed to preserving life on land by promoting awareness, sustainability, and biodiversity conservation. Together, we can build a greener future.</p>
          </div>
          <div className="footer-column">
            <h3>CONTENT</h3>
            <ul>
              <li><Link to="/content1">Content 1</Link></li>
              <li><Link to="/content2">Content 2</Link></li>
              <li><Link to="/content3">Content 3</Link></li>
              <li><Link to="/content4">Content 4</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Layout</h3>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/table">Table</Link></li>
              <li><Link to="/profile">User Profile</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
          <div className="footer-column contact-column">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>No. 45, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+94 11 234 5678</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>info@greenhorizon.lk</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://web.facebook.com/SustDev?_rdc=1&_rdr#" className="social-icon" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://x.com/SustDev" className="social-icon" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.youtube.com/user/uncsd2012/featured" className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="https://www.flickr.com/photos/sustdev/" className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-flickr"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
