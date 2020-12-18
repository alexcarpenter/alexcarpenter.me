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
          {/* <div className='fixed top-0 left-0 bg-gradient-to-r from-green to-blue w-full h-1.5 z-10'></div> */}
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
