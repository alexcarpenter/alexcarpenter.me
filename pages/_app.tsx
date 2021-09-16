import type { AppProps } from 'next/app';
import '@/styles/global.css';
import { ThemeProvider } from 'next-themes';
import { OverlayProvider } from '@react-aria/overlays';
import Command from '@/components/Command';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OverlayProvider>
      <ThemeProvider disableTransitionOnChange>
        <Component {...pageProps} />
        <Command />
      </ThemeProvider>
    </OverlayProvider>
  );
}

export default MyApp;
