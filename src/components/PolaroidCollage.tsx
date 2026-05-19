import styles from './PolaroidCollage.module.css';
import { POLAROID_PHOTOS } from '@/lib/data';
import type { PolaroidPhoto } from '@/lib/data';

export default function PolaroidCollage() {
  return (
    <div className={styles.collage}>
      {POLAROID_PHOTOS.map((photo: PolaroidPhoto, i: number) => (
        <div
          key={i}
          className={styles.polaroid}
          style={{
            '--rotate': `${photo.rotate}deg`,
            '--z': photo.z,
          } as React.CSSProperties}
        >
          <div className={styles.photoWrap}>
            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.caption}
                className={styles.photo}
                loading="lazy"
              />
            ) : (
              <div
                className={styles.photo}
                style={{ background: '#f0e8d8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}
              >
                📸
              </div>
            )}
          </div>
          <div className={styles.caption}>{photo.caption}</div>
        </div>
      ))}
    </div>
  );
}
