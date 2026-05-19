import { useState } from 'react';
import styles from './PolaroidCollage.module.css';
import { POLAROID_PHOTOS } from '@/lib/data';

// Fallback Unsplash photos if local images haven't been uploaded yet
const FALLBACKS = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80',
  'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&q=80',
  'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80',
];

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
  const [error, setError] = useState(false);
  // If local image fails, cascade to fallback
  const src = error ? FALLBACKS[index] : photo.src;

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
          src={src}
          alt={photo.alt}
          className={styles.photo}
          onError={() => setError(true)}
          loading="lazy"
        />
      </div>
      <div className={styles.caption}>
        {photo.alt.split(' ').slice(0, 4).join(' ')}
      </div>
    </div>
  );
}
