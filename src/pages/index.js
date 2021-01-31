import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const headingAccentStyles = {
  color: "#663399",
};

const IndexPage = () => {
  const [toggle, toggleError] = React.useState(false)

  if (toggle) {
    console.error('console error');
    throw new Error('I crashed!');
  }

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>

      <button
        type="button"
        onClick={() => toggleError(true)}
      >
        Break the world
      </button>
    </main>
  );
};

export default IndexPage;
