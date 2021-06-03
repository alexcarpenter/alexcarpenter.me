import { useEffect } from 'react';
import '@/styles/custom.css';
import 'tailwindcss/tailwind.css';
import cx from 'clsx';

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={cx('min-h-screen font-mono md:text-lg antialiased text-white')}
    >
      <div className="max-w-screen-md mx-auto p-8 md:p-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
