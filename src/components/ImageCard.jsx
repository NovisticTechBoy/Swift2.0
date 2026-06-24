import React from 'react'
import useReveal from '../hooks/useReveal'
import './ImageCard.css'

export default function ImageCard({ src, alt, text, delay = 0 }) {
  const [ref, visible] = useReveal({ rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''}`}
      style={{ ['--delay']: `${delay}ms` }}
      data-delay={delay}
    >
      <img src={src} alt={alt} loading="lazy" />
      {text && <p className="image-card-text">{text}</p>}
    </article>
  )
}

