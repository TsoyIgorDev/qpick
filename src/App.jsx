import './index.css'
import Cart from './sections/Cart'
import Footer from './sections/Footer'
import Header from './sections/header'
import Page from './sections/Page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App