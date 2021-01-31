import React from "react";
import { ErrorBoundary } from "@sentry/react";
import { Link } from 'gatsby'

const FallBack = ({ error, resetError }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <Link to="/" onClick={resetError}><a>Try again</a></Link>
  </div>
);

const ErrorBoundaryContainer = ({ children }) => {
  return <ErrorBoundary fallback={FallBack}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryContainer;
