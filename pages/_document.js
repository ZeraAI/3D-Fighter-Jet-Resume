import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/ZeraAI/3D-Fighter-Jet-Resume/refs/heads/main/public/favicon.ico" />
        <title>Woo Bin Park's Portfolio</title>
        <meta
          name="description"
          content="Through a sea of cherry blossoms, a fighter jet carves its elegant path."
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
