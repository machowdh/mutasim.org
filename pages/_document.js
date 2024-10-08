import Document, { Html, Head, Main, NextScript } from 'next/document';
import ColorModesScript, {
  minifyColorModesScript,
} from '../components/ColorModesScript';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import packageInfo from '../package.json';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const colorModesScriptProps = await minifyColorModesScript();
    return { ...initialProps, ...colorModesScriptProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#0e0629"
          />

          <meta name="theme-color" content="#0e0629" />
          <meta name="msapplication-TileColor" content="#0e0629" />

          <meta name="build version" content={packageInfo.version} />
          <meta name="description" content="Mutasim Chowdhury's portfolio" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <GoogleAnalyticsScript />
        </Head>
        <body>
          <ColorModesScript code={this.props.code} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
