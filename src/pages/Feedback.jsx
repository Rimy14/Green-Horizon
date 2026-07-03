import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import { useStylesheet } from '../hooks/useStylesheet'

function Feedback() {
  useStylesheet(['/css/style.css', '/css/feedback.css'])
  const [selectedRating, setSelectedRating] = useState(null)
  const [selectedRadios, setSelectedRadios] = useState({})

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const emojis = ['😞', '😕', '😐', '🙂', '😄']

  const handleRadioChange = (name, value) => {
    setSelectedRadios(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.querySelector('#feedback-name').value.trim()
    const email = form.querySelector('#feedback-email').value.trim()
    const phone = form.querySelector('#feedback-phone').value.trim()

    const namePattern = /^[A-Za-z\s]+$/
    if (!namePattern.test(name)) { alert('Please enter a valid name (letters only).'); return }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) { alert('Please enter a valid email.'); return }
    const phonePattern = /^[0-9]{10}$/
    if (!phonePattern.test(phone)) { alert('Please enter a valid 10-digit phone number.'); return }
    if (selectedRating === null) { alert('Please select a satisfaction rating emoji.'); return }

    alert('Thank you for your feedback! We have successfully received your response.')
    form.reset()
    setSelectedRating(null)
    setSelectedRadios({})
  }

  const handleReset = () => {
    setSelectedRating(null)
    setSelectedRadios({})
  }

  const RadioGroup = ({ name, label }) => (
    <div className="form-group">
      <label>{label}</label>
      <div className="radio-group">
        {['Yes', 'No'].map(val => (
          <label key={val} className={`radio-label${selectedRadios[name] === val ? ' selected' : ''}`}>
            <input type="radio" name={name} value={val} required onChange={() => handleRadioChange(name, val)} />
            <span>{val}</span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <main>
        <div className="feedback-card">
          <h2>Feedback Form</h2>
          <p className="feedback-subtitle">We value your input. Please fill out this form to help us improve our services.</p>

          <form className="feedback-form-styled" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="feedback-name">Enter your name:</label>
                <input type="text" id="feedback-name" required placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="feedback-email">Enter your email:</label>
                <input type="email" id="feedback-email" required placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="feedback-phone">Enter your Phone Number:</label>
                <input type="tel" id="feedback-phone" required placeholder="Enter your phone number" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback-address">Enter Your Address:</label>
              <textarea id="feedback-address" name="address" rows="3" placeholder="Your Address" required></textarea>
            </div>

            <RadioGroup name="first-time" label="Was this your first time visiting?" />
            <RadioGroup name="informative" label="Was this website informative and easy to navigate through?" />

            <div className="form-group">
              <label htmlFor="improvements">If "No", suggest any improvements for the future:</label>
              <textarea id="improvements" rows="3" placeholder="Add your suggestions here..."></textarea>
            </div>

            <div className="form-group">
              <label>How satisfied are you with our services?</label>
              <div className="rating-input-wrapper">
                <div className="emoji-buttons">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      className={`emoji-btn${selectedRating === index ? ' selected' : ''}`}
                      type="button"
                      data-value={index + 1}
                      onClick={() => setSelectedRating(index)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <RadioGroup name="recommend" label="Would you recommend our services?" />

            <div className="form-group">
              <label htmlFor="updates">Would you like to receive updates about the website and any offers?</label>
              <select id="updates" required>
                <option value="" disabled defaultValue>Select an option</option>
                <option value="email">Yes - via Email</option>
                <option value="sms">Yes - via SMS</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="additional-requests">Do you have any additional questions or requests?</label>
              <textarea id="additional-requests" rows="3" placeholder="Add your message here..."></textarea>
            </div>

            <div className="buttons">
              <button type="submit" className="submit-btn">Submit Feedback</button>
              <button type="reset" className="reset-btn">Reset</button>
            </div>
          </form>
        </div>
      </main>
      <GoToTop />
      <Footer />
    </>
  )
}

export default Feedback
