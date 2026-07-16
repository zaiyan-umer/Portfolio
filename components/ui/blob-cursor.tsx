// @ts-nocheck
'use client';
import { useTrail, animated } from '@react-spring/web';
import { useRef, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BlobCursor = ({ className, isHovered = false, mouseX = 0, mouseY = 0, blobType = 'circle', fillColor = '#3d80ecbf' }) => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  useEffect(() => {
    if (isHovered) {
      api.start({ xy: [mouseX, mouseY] });
    }
  }, [mouseX, mouseY, isHovered, api]);

  const sizes = [80, 140, 100];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ease-out', isHovered ? 'opacity-100' : 'opacity-0', className)}>
      <svg style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}>
        <filter id='blob'>
          <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
          <feColorMatrix
            in='blur'
            values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10'
          />
        </filter>
      </svg>
      <div className='absolute inset-0 pointer-events-none w-full h-full' style={{ filter: "url('#blob')" }}>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              position: 'absolute',
              willChange: 'transform',
              opacity: 0.6,
              boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.2)',
              width: sizes[index],
              height: sizes[index],
              transform: props.xy.to(trans),
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlobCursor;
