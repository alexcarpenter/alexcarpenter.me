import '@/styles/fonts.css';
import 'tailwindcss/tailwind.css';
import { OverlayProvider } from '@react-aria/overlays';

function MyApp({ Component, pageProps }) {
  return (
    <OverlayProvider>
      <Component {...pageProps} />
    </OverlayProvider>
  );
}

export default MyApp;
