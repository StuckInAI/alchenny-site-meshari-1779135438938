import styles from './FoodImage.module.css';
import clsx from 'clsx';

type Tone = 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
type Ratio = 'landscape' | 'portrait' | 'square' | 'tall';

const toneMap: Record<Tone, { bg: string; fg: string; emoji: string }> = {
  peach: { bg: '#F9E4D4', fg: '#C4602A', emoji: '🍑' },
  caramel: { bg: '#F2DDB3', fg: '#8B5E3C', emoji: '🥐' },
  mocha: { bg: '#D9C4A8', fg: '#5C3D1E', emoji: '☕' },
  rose: { bg: '#F5D5DC', fg: '#9E3F5A', emoji: '🌹' },
  cream: { bg: '#FAF0DC', fg: '#7A5C2E', emoji: '🎂' },
  cocoa: { bg: '#D4B896', fg: '#4A2E1A', emoji: '🍫' },
  pistachio: { bg: '#D6E8C8', fg: '#3D6B3A', emoji: '🍦' },
  berry: { bg: '#E2D0F0', fg: '#6B3A8B', emoji: '🫐' },
};

const ratioMap: Record<Ratio, string> = {
  landscape: '75%',
  portrait: '125%',
  square: '100%',
  tall: '140%',
};

type FoodImageProps = {
  tone?: Tone;
  ratio?: Ratio;
  className?: string;
};

export default function FoodImage({ tone = 'caramel', ratio = 'landscape', className }: FoodImageProps) {
  const t = toneMap[tone];
  return (
    <div
      className={clsx(styles.wrap, className)}
      style={{ paddingBottom: ratioMap[ratio], background: t.bg }}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <span className={styles.emoji}>{t.emoji}</span>
        <div className={styles.grain} />
      </div>
    </div>
  );
}
