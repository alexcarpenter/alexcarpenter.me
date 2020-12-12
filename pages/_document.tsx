import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='flex flex-col w-100 min-h-screen py-8 px-4 md:py-16 bg-gray-50 text-gray-900'>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
