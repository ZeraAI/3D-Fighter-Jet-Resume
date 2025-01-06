import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { useState, useEffect } from "react";
import BrowserWarning from "../components/BrowserWarning";

export default function App({ Component, pageProps }) {
  const [cursorHidden, setCursorHidden] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check the user agent for Chrome
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome") && !userAgent.includes("edg") && !userAgent.includes("opera")) {
      setIsChrome(true);
    }
    setIsLoading(false); // Indicate loading has completed
  }, []);

  // Handle dismissal of the browser warning
  const handleWarningDismiss = () => {
    setWarningDismissed(true); // Dismiss the warning
  };

  // Prevent rendering until user agent detection is complete
  if (isLoading) return null;

  return (
    <>
      {/* Show the browser warning only if the browser is Chrome and the warning isn't dismissed */}
      {isChrome && !warningDismissed && <BrowserWarning onDismiss={handleWarningDismiss} />}

      {/* Custom cursor */}
      <CustomCursor hidden={cursorHidden} />

      {/* Render the main app only if the browser is supported or the warning is dismissed */}
      {(!isChrome || warningDismissed) && (
        <Component {...pageProps} setCustomCursorHidden={setCursorHidden} />
      )}
    </>
  );
}
