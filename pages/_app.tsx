import { useEffect } from 'react';
import '@/styles/custom.css';
import 'tailwindcss/tailwind.css';
import cx from 'clsx';

// #00254B, #00432a, #0C2E22

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={cx(
        'min-h-screen font-mono md:text-lg antialiased bg-gray-200 text-gray-800',
      )}
    >
      <div className="max-w-screen-md mx-auto p-8 md:p-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
