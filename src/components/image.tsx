import styled from '@emotion/styled';
import type { CSSProperties, ImgHTMLAttributes } from 'react';
import { useState } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: CSSProperties['objectFit'];
  fallbackSrc?: string;
}

const StyledImage = styled.img<Pick<ImageProps, 'objectFit'>>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit = 'fill' }) => objectFit};
  border-radius: inherit;
`;

export const Image = ({ fallbackSrc, src, alt, onError, ...props }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallbackSrc) setImgSrc(fallbackSrc);
    onError?.(e);
  };

  return <StyledImage src={imgSrc} alt={alt} onError={handleError} loading="lazy" {...props} />;
};

Image.displayName = 'Image';
