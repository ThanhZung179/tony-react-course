import React from 'react';
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoundaries({ children }) {

  function Fallback(error) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    const params = {
      level: 'ERROR',
      datetime: new Date().toUTCString(),
      os: 'Window',
      description: 'platform.description',
      userId: 1,
      error: JSON.stringify(error.error.message),
      componentStack: JSON.stringify(error.error.stack),
      location: window.location.href,
      version: '1.0.0',
    };
    localStorage.setItem('errorLog', JSON.stringify(params));

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  )
}