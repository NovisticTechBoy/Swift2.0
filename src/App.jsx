import { Contact, Search } from 'lucide-react';
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
// Components
import baker from './assets/bakerSwift.jpg';
import cobbler from './assets/cobblerSwift.jpg';
import barber from './assets/barberSwift.jpg';
import tailor from './assets/tailorSwift.jpg';
import ImageCard from './components/ImageCard'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import './App.css'

function Home() {
  return (
    <>
      <main>
        <div className="Intro">
          <h1 className="intro-line">Trusted by thousands of users..</h1>
          <p><b>SWIFT</b>, <b>where </b>Clients </p>
          <p>find <b>all</b> Workers.</p>
          <h2><i>...all about finding the perfect worker for your issue...</i></h2>
          <br />
          <h3>From skilled artisans to trusted professionals,</h3>
          <h3>SWIFT connects you with verified workers near you. Fast, Reliable and Hassle-free.</h3>
        </div>
        <br />
        <div className="work">
          <button className="find-work"><Search />Find a Worker</button>
          <button className="i-work"> <Contact />I'm a Worker</button>
        </div>
      </main>
      <aside className="images">
        <div className="image-container">
          <ImageCard src={baker} alt="Baker Swift" text="Find nearby local bakers" delay={0} />
          <ImageCard src={cobbler} alt="Cobbler Swift" text="Skilled cobblers near you" delay={80} />
          <ImageCard src={barber} alt="Barber Swift" text="Top rated barbers You can easily spot" delay={160} />
          <ImageCard src={tailor} alt="Tailor Swift" text="Find the best tailors in your area" delay={240} />
        </div>
      </aside>
        <HowItWorks />
        <Testimonials />
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">S</div>
            <div>
              <div className="footer-title">SWIFT</div>
              <div className="footer-tag">Find trusted local workers</div>
            </div>
          </div>

          <nav className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about-us">About</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <div className="socials">
              <a aria-label="Twitter" href="#">Twitter</a>
              <a aria-label="Facebook" href="#">Facebook</a>
              <a aria-label="Instagram" href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-legal">© 2026 Swift. All rights reserved.</div>
      </footer>
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
