import '@/styles/global.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { cx } from '@/lib/utils';
import CommandBar from '@/components/CommandBar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <CommandBar>
        <div className={cx('font-mono md:text-lg antialiased')}>
          <div className="min-h-screen max-w-[800px] w-full mx-auto p-8 md:p-16 flex flex-col">
            <Component {...pageProps} />
          </div>
        </div>
      </CommandBar>
    </ThemeProvider>
  );
}

export default MyApp;
