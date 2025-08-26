'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  style
}) => {
  const [useWebP, setUseWebP] = useState(true);
  
  // 生成 WebP 路徑
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/images/')) {
      const filename = originalSrc.replace('/images/', '');
      const nameWithoutExt = filename.split('.')[0];
      return `/images/webp/${nameWithoutExt}.webp`;
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  
  // 如果載入 WebP 失敗，回退到原始格式
  const handleError = () => {
    setUseWebP(false);
  };

  return (
    <Image
      src={useWebP ? webpSrc : src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={style}
      onError={handleError}
    />
  );
};

export default OptimizedImage;
