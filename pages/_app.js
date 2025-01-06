import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cursorHidden, setCursorHidden] = useState(false);

  return (
    <>
      <CustomCursor hidden={cursorHidden} />
      <Component {...pageProps} setCustomCursorHidden={setCursorHidden} />
    </>
  );
}
