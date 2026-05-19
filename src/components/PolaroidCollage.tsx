import { useState } from 'react';
import styles from './PolaroidCollage.module.css';
import { POLAROID_PHOTOS, POLAROID_FALLBACKS } from '@/lib/data';

export default function PolaroidCollage() {
  return (
    <div className={styles.collage} aria-label="Photo collage of Allison Chen">
      {POLAROID_PHOTOS.map((photo, i) => (
        <PolaroidPhoto key={i} photo={photo} index={i} />
      ))}
    </div>
  );
}

function PolaroidPhoto({
  photo,
  index,
}: {
  photo: { src: string; alt: string; rotate: string; zIndex: number };
  index: number;
}) {
  const [triedCdn, setTriedCdn] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);

  function getCurrentSrc(): string {
    if (triedCdn) return POLAROID_FALLBACKS[index] ?? '';
    return photo.src;
  }

  function handleError() {
    if (!triedCdn) {
      setTriedCdn(true);
    } else if (!triedFallback) {
      setTriedFallback(true);
    }
  }

  return (
    <div
      className={styles.polaroid}
      style={{
        '--rotate': photo.rotate,
        '--z': photo.zIndex,
      } as React.CSSProperties}
    >
      <div className={styles.photoWrap}>
        <img
          src={getCurrentSrc()}
          alt={photo.alt}
          className={styles.photo}
          onError={handleError}
          referrerPolicy="no-referrer-when-downgrade"
          crossOrigin="anonymous"
          loading="lazy"
        />
      </div>
      <div className={styles.caption}>
        {photo.alt.split(' ').slice(0, 4).join(' ')}
      </div>
    </div>
  );
}
