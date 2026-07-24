import { asset } from '../data/siteData';
import Lightbox, { useLightbox } from './Lightbox';

export default function Gallery({ images, className = '', priority = false }) {
  const lightbox = useLightbox(images);
  return <>
    <div className={`gallery ${className}`}>
      {images.map((image, index) => <button className="gallery-item" key={image.src} onClick={() => lightbox.open(index)} aria-label={`View ${image.alt}`}>
        <span className="artwork-media">
          <img src={asset(image.src)} alt={image.alt} loading={priority && index < 3 ? 'eager' : 'lazy'} draggable="false" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()} />
          <span className="artwork-shield" aria-hidden="true" />
        </span>
        {image.hoverLabel && <span className="hover-label">{image.hoverLabel}</span>}
      </button>)}
    </div>
    <Lightbox items={images} index={lightbox.index} onClose={lightbox.close} onChange={lightbox.setIndex} />
  </>;
}
