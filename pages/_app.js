import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { useState, useEffect } from "react";
import BrowserWarning from "../components/BrowserWarning";

export default function App({ Component, pageProps }) {
  const [cursorHidden, setCursorHidden] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome") && !userAgent.includes("edg") && !userAgent.includes("opera")) {
      setIsChrome(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <>
      {isChrome && <BrowserWarning />}
      <CustomCursor hidden={cursorHidden} />
      <Component
        {...pageProps}
        setCustomCursorHidden={setCursorHidden}
        pauseAnimation={isChrome}
      />
    </>
  );
}
