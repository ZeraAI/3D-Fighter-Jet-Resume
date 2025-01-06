import React, { useState } from "react";

const BrowserWarning = ({ onDismiss }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleContinue = () => {
    setIsDismissed(true); // Dismiss the warning locally
    if (onDismiss) {
      onDismiss(); // Notify the parent component, if needed
    }
  };

  if (isDismissed) {
    return null; // Hide the component if dismissed
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>Browser Compatibility Warning</h1>
      <p style={{ marginBottom: "1rem" }}>
        It looks like you're using Chrome, which may not fully support this site's advanced features.
      </p>
      <p style={{ marginBottom: "2rem" }}>
        For the best experience, we recommend using Firefox or Edge. However, you can continue using Chrome with limited functionality.
      </p>
      <button
        style={{
          marginTop: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        onClick={handleContinue}
      >
        Continue Anyway
      </button>
    </div>
  );
};

export default BrowserWarning;
