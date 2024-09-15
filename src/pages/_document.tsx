// import {Head, Html, Main, NextScript} from 'next/document';

// // next/document <Head /> vs next/head <Head />
// //
// // next/document Head is rendered once on the server. This is different from next/head which will
// // rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         <meta charSet="utf-8" />
//         {/* google translate breaks react:
//           - https://github.com/facebook/react/issues/11538
//           - https://bugs.chromium.org/p/chromium/issues/detail?id=872770 */}
//         <meta content="notranslate" name="google" />
//       </Head>
//       <body className="bg-black">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // crossOrigin="true"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300;1,400;1,500;1,600&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
