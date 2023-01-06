import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head/>
        <body
          style={{
            backgroundColor: '#f2f2f2'
          }}
          className="bg-white text-gray-900 dark:text-white">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
