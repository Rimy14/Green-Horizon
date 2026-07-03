import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Volunteer() {
  useStylesheet(['/css/style.css', '/css/volunteer.css'])
  const [selectedRating, setSelectedRating] = useState(null)
  const [reviewText, setReviewText] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const emojis = ['😞', '😕', '😐', '🙂', '😄']

  const handleSubmit = () => {
    if (selectedRating === null) {
      alert('Please select a rating emoji before submitting.')
      return
    }
    if (!reviewText.trim()) {
      alert('Please write your review details.')
      return
    }
    alert('Thank you for your review! Your feedback helps us improve our programs.')
    setReviewText('')
    setSelectedRating(null)
  }

  const handleCancel = () => {
    setReviewText('')
    setSelectedRating(null)
  }

  return (
    <div className="volunteer-page">
      <Navbar />
      <div className="content-container">
        <main>
          <h2>Volunteer Programs</h2>
          <div className="sort-box">
            <label htmlFor="sort-programs">Sort by:</label>
            <select id="sort-programs">
              <option value="popularity">Popularity</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="cards-container">
            <div className="card">
              <img src="/images/volunteer_page/forest.jpg" alt="Forest Conservation Program" />
              <h3>Forest Conservation Program</h3>
              <p>Join our efforts to protect and restore forests around the world.</p>
              <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
              <img src="/images/volunteer_page/wildlife.jpg" alt="Wildlife Protection Initiative" />
              <h3>Wildlife Protection Initiative</h3>
              <p>Help us safeguard endangered species and their habitats.</p>
              <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
              <img src="/images/volunteer_page/garden.jpg" alt="Community Garden Project" />
              <h3>Community Garden Project</h3>
              <p>Support local communities in creating sustainable gardens.</p>
              <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
              <img src="/images/volunteer_page/beach.jpg" alt="Beach Cleanup Campaign" />
              <h3>Beach Cleanup Campaign</h3>
              <p>Participate in cleaning up beaches and protecting marine life.</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>

          <hr className="section-divider" />

          <section className="reviews">
            <h2>User Reviews</h2>
            <div className="rating-summary">
              <span className="rating">8.9/10</span>
              <span className="subtitle">Exceptional (Based on 26 reviews)</span>
            </div>
            <div className="review-cards">
              <div className="review-card">
                <h4>10/10 Excellent</h4>
                <p>The program was well-organized, and the impact was visible. Highly recommend!</p>
                <div className="review-footer"><a href="#">See More</a><span className="reviewer">Jan 15, 2026</span></div>
              </div>
              <div className="review-card">
                <h4>9/10 Great Experience</h4>
                <p>I learned a lot and met amazing people. The experience was enriching.</p>
                <div className="review-footer"><a href="#">See More</a><span className="reviewer">Feb 10, 2025</span></div>
              </div>
              <div className="review-card">
                <h4>8/10 Very Good</h4>
                <p>The program was good, but there's room for improvement in logistics.</p>
                <div className="review-footer"><a href="#">See More</a><span className="reviewer">Mar 5, 2026</span></div>
              </div>
              <div className="review-card">
                <h4>10/10 Life-Changing</h4>
                <p>This experience changed my perspective on conservation. Truly inspiring!</p>
                <div className="review-footer"><a href="#">See More</a><span className="reviewer">Apr 20, 2025</span></div>
              </div>
            </div>
          </section>

          <hr className="section-divider" />

          <section className="feedback-section">
            <h2>Share Your Feedback</h2>
            <p className="feedback-subtitle">We value your input. Please rate your volunteering experience below.</p>
            <div className="feedback-form">
              <div className="rating-input">
                <p>Rate your experience:</p>
                <div className="emoji-buttons">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      className={`emoji-btn${selectedRating === index ? ' selected' : ''}`}
                      type="button"
                      onClick={() => setSelectedRating(index)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Write your review here..."
                rows="5"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div className="form-buttons">
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                <button className="submit-btn" onClick={handleSubmit}>Submit Feedback</button>
              </div>
            </div>
          </section>
        </main>
        <GoToTop />
      </div>
      <Footer />
    </div>
  )
}

export default Volunteer
