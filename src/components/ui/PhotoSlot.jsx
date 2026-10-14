import { useState } from 'react';

const sampleImage = '/images/sample/fallback.svg';

export default function PhotoSlot({ src, alt = 'Sample illustration', className = '', decorative = false }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const useSample = !src || failedSrc === src;
  return (
    <div className={`photo-slot photo-loaded ${className}`}>
      <img className="photo-image-ready" src={useSample ? sampleImage : src} alt={decorative ? '' : useSample ? 'Sample technology illustration' : alt} aria-hidden={decorative ? 'true' : undefined} loading="lazy" onError={() => setFailedSrc(src)} />
    </div>
  );
}
