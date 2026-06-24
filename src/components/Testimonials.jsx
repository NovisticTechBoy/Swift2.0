import React, { useEffect, useState, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import './Testimonials.css'

function TestimonialCard({ quote, author }) {
  return (
    <div className="test-card">
      <blockquote>{quote}</blockquote>
      <div className="test-author">— {author}</div>
    </div>
  )
}

export default function Testimonials() {
  const items = [
    { quote: 'Fantastic and fast service! Highly recommended.', author: 'Amina Nari' },
    { quote: 'Found the perfect plumber within minutes.', author: 'Mike Eche' },
    { quote: 'Great quality and easy to book.', author: 'Chioma Udo' },
   // {quote: 'Reliable and professional workers each time I seek any service.', author: 'Tunde Adebayo' }
  ]

  const [index, setIndex] = useState(0)
  const timer = useRef(null)
  const [ref, visible] = useReveal({ threshold: 0.05 })

  useEffect(() => {
    timer.current = setInterval(() => setIndex(i => (i + 1) % items.length), 4000)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <section ref={ref} className={`testimonials reveal ${visible ? 'revealed' : ''}`}>
      <div className="test-inner">
        <h3>What our Users say..</h3>
        <div className="test-slider">
          {items.map((it, i) => (
            <div key={i} className={`test-slide ${i === index ? 'active' : ''}`} aria-hidden={i!==index}>
              <TestimonialCard {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
