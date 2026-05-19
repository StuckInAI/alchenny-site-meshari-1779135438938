import { useState } from 'react';

interface CdnImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * CdnImage — renders a CDN image with automatic fallback.
 * Sets referrerPolicy and crossOrigin so Squarespace CDN accepts the request.
 * If the CDN image fails, it renders the fallbackSrc instead.
 */
export default function CdnImage({
  src,
  fallbackSrc,
  alt,
  className,
  style,
  ...rest
}: CdnImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [failed, setFailed] = useState<boolean>(false);

  function handleError() {
    if (!failed && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setFailed(true);
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      referrerPolicy="no-referrer-when-downgrade"
      crossOrigin="anonymous"
      loading="lazy"
      {...rest}
    />
  );
}
