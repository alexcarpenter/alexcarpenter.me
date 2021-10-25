import '@/styles/global.css';
import 'tailwindcss/tailwind.css';
import { cx } from '@/lib/utils';

function MyApp({ Component, pageProps }) {
  return (
    <div className={cx('font-mono md:text-lg antialiased')}>
      <div className="min-h-screen max-w-[800px] mx-auto p-8 md:p-16 flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
