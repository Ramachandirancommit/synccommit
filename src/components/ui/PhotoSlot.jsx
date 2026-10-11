import { useEffect, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function PhotoSlot({ src, alt, className = '', label = 'Company photo', decorative = false }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(false), [src]);
  return (
    <div className={`photo-slot ${className}${loaded ? ' photo-loaded' : ' photo-missing'}`}>
      {src && <img className={loaded ? 'photo-image-ready' : 'photo-image-pending'} src={src} alt={decorative || !loaded ? '' : alt} aria-hidden={decorative || !loaded ? 'true' : undefined} loading="lazy" onLoad={() => setLoaded(true)} onError={() => setLoaded(false)} />}
      {(!src || !loaded) && <div className="photo-placeholder" role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : `${alt} Image not available yet.`}>
        <span className="photo-placeholder-icon"><ImageIcon size={19} /></span>
        <span>{label}</span>
        <small>Image not added yet</small>
      </div>}
    </div>
  );
}
