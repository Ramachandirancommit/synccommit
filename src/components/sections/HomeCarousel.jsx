import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import PhotoSlot from '../ui/PhotoSlot.jsx';

export default function HomeCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const hasMultiple = slides.length > 1;
  const slide = slides[index];
  const next = () => setIndex((current) => (current + 1) % slides.length);
  const previous = () => setIndex((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!hasMultiple || !playing || hovered || focused || reducedMotion) return undefined;
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [hasMultiple, playing, hovered, focused, reducedMotion, slides.length]);

  if (!slide) return null;
  return <section className="home-carousel container" aria-label="Company moments carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="carousel-copy"><span className="eyebrow"><span className="eyebrow-dot" />Shared moments</span><h2>{slide.title}</h2><p>Thoughtful technology starts with people, ideas, and a willingness to learn together.</p><div className="carousel-controls">
      <button type="button" className="icon-button" onClick={previous} disabled={!hasMultiple} aria-label="Previous slide"><ArrowLeft size={16} /></button>
      <button type="button" className="icon-button" onClick={next} disabled={!hasMultiple} aria-label="Next slide"><ArrowRight size={16} /></button>
      <button type="button" className="icon-button play-toggle" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause automatic slideshow' : 'Play automatic slideshow'} disabled={!hasMultiple || reducedMotion}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>
      <span className="carousel-count">{String(index + 1).padStart(2, '0')} <i>/</i> {String(slides.length).padStart(2, '0')}</span>
    </div><div className="carousel-dots" role="group" aria-label="Choose slide">{slides.map((item, i) => <button key={item.src} type="button" className={i === index ? 'carousel-dot is-current' : 'carousel-dot'} onClick={() => setIndex(i)} aria-label={`Show slide ${i + 1}: ${item.title}`} aria-pressed={i === index} />)}</div></div>
    <div className="carousel-media" aria-live="polite"><PhotoSlot key={slide.src} src={slide.src} alt={slide.alt} label={slide.label} className="carousel-photo" /><span className="carousel-image-caption">{slide.label}</span><span className="carousel-index">0{index + 1}</span></div>
  </section>;
}
