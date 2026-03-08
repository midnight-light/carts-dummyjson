import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { CSSProperties, HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  borderRadius?: CSSProperties['borderRadius'];
}

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`;

const StyledSkeleton = styled.span<SkeletonProps>`
  display: block;
  width: ${({ width = '100%' }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height = '1rem' }) => (typeof height === 'number' ? `${height}px` : height)};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius !== undefined
      ? typeof borderRadius === 'number'
        ? `${borderRadius}px`
        : borderRadius
      : `${theme.borderRadius.sm}px`};

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.border.base} 25%,
    ${({ theme }) => theme.colors.bg.base} 50%,
    ${({ theme }) => theme.colors.border.base} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

export const Skeleton = (props: SkeletonProps) => <StyledSkeleton aria-hidden="true" {...props} />;

Skeleton.displayName = 'Skeleton';
