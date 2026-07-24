import { useEffect, useRef, useState } from 'react';
import { asset } from '../data/siteData';

export function useLightbox(items) {
  const [index, setIndex] = useState(null);
  return { index, setIndex, open: (item) => setIndex(item), close: () => setIndex(null), items };
}

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const firstTouch = useRef(null);
  useEffect(() => {
    if (index === null) return;
    const keydown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && items.length > 1) onChange((index - 1 + items.length) % items.length);
      if (event.key === 'ArrowRight' && items.length > 1) onChange((index + 1) % items.length);
    };
    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', keydown);
    closeRef.current?.focus();
    return () => { document.body.classList.remove('lightbox-open'); window.removeEventListener('keydown', keydown); };
  }, [index, items.length, onChange, onClose]);
  if (index === null) return null;
  const item = items[index];
  const previous = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${item.alt} enlarged`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <button className="lightbox-close" ref={closeRef} onClick={onClose} aria-label="Close artwork">×</button>
    {items.length > 1 && <button className="lightbox-arrow previous" onClick={previous} aria-label="Previous artwork">←</button>}
    <figure onTouchStart={(event) => { firstTouch.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { const delta = event.changedTouches[0].clientX - firstTouch.current; if (Math.abs(delta) > 45) delta > 0 ? previous() : next(); }}>
      <span className="lightbox-media">
        <img src={asset(item.src)} alt={item.alt} draggable="false" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()} />
        <span className="artwork-shield" aria-hidden="true" />
      </span>
    </figure>
    {items.length > 1 && <button className="lightbox-arrow next" onClick={next} aria-label="Next artwork">→</button>}
  </div>;
}
