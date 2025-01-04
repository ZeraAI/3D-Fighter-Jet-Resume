// pages/_app.js
import '../styles/globals.css'; // Import global styles

export default function App({ Component, pageProps }) {
  // Component: The active page being rendered
  // pageProps: Props passed to the page component
  return <Component {...pageProps} />;
}
