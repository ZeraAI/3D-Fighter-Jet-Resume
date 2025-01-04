import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Add the CustomCursor component globally */}
      <CustomCursor />
      {/* Render the active page */}
      <Component {...pageProps} />
    </>
  );
}
