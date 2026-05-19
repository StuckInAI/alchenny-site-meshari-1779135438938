import styles from './PolaroidCollage.module.css';
import { useState } from 'react';
import { POLAROID_PHOTOS } from '@/lib/data';

type PolaroidPhoto = {
  src: string;
  fallback: string;
  caption: string;
  rotate: string;
  z: number;
};

function PolaroidItem({ photo, i }: { photo: PolaroidPhoto; i: number }) {
  const [imgError, setImgError] = useState(false);
  const src = imgError ? photo.fallback : photo.src;
  return (
    <div
      key={i}
      className={styles.polaroid}
      style={{ '--rotate': photo.rotate, '--z': photo.z } as React.CSSProperties}
    >
      <div className={styles.photoWrap}>
        {src ? (
          <img
            src={src}
            alt={photo.caption}
            className={styles.photo}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#f0e8d8' }} />
        )}
      </div>
      <div className={styles.caption}>{photo.caption}</div>
    </div>
  );
}

export default function PolaroidCollage() {
  return (
    <div className={styles.collage}>
      {POLAROID_PHOTOS.map((photo, i) => (
        <PolaroidItem key={i} photo={photo} i={i} />
      ))}
    </div>
  );
}
