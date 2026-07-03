import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Volunteer from './pages/Volunteer'
import TablePage from './pages/TablePage'
import UserProfile from './pages/UserProfile'
import Feedback from './pages/Feedback'
import Content1 from './pages/Content1'
import Content2 from './pages/Content2'
import Content3 from './pages/Content3'
import Content4 from './pages/Content4'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/content1" element={<Content1 />} />
      <Route path="/content2" element={<Content2 />} />
      <Route path="/content3" element={<Content3 />} />
      <Route path="/content4" element={<Content4 />} />
    </Routes>
  )
}

export default App
