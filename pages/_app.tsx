import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { generateWidth } from '@/helpers';
import { useScreenWidth } from '@/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const screenWidth = useScreenWidth();

  return (
    <div
      style={{
        width: `${generateWidth({ width: screenWidth, min: 320, max: 1200 })}px`,
        margin: '0 auto',
      }}
    >
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
