import React from 'react'
import useReveal from '../hooks/useReveal'
import './HowItWorks.css'

function HowCard({ icon, title, text, delay = 0 }) {
  const [ref, visible] = useReveal({ rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
  return (
    <div ref={ref} className={`how-card reveal ${visible ? 'revealed' : ''}`} style={{ ['--delay']: `${delay}ms` }}>
      <div className="how-icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-inner">
        <h2>How it works</h2>
        <div className="how-grid">
          <HowCard
            delay={0}
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L12 12" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L20 8" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            title="SEARCH"
            text="Tell us what you need and where. We show matching professionals near you." />

          <HowCard
            delay={80}
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#6b21a8" strokeWidth="2"/><path d="M8 12h8" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round"/></svg>}
            title="BOOK"
            text="Select a worker, pick a time and book — easy and secure and reliable." />

          <HowCard
            delay={160}
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round"/><path d="M12 4v16" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round"/></svg>}
            title="PAY & REVIEW"
            text="Pay after the job and leave a review to help others.." />
        </div>
      </div>
    </section>
  )
}
