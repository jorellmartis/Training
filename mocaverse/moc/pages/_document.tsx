import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Script from "next/script";
import { getCssText } from "@/stitches";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <Script
            id="paintpolyfill"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: ` (async function () {
      if (!("paintWorklet" in CSS)) {
        await import("css-paint-polyfill");
      }
  
      CSS.paintWorklet.addModule(
        "/squircle.min.js"
      );
    })()`,
            }}
          ></Script>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
