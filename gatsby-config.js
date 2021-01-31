module.exports = {
  siteMetadata: {
    title: "sentry-gatsby",
  },
  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  ],
};
