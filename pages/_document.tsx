import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="flex flex-col min-h-screen px-4 py-8 text-gray-900 w-100 md:py-16 bg-gray-50">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
