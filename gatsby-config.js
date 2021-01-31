module.exports = {
  siteMetadata: {
    title: "sentry-gatsby",
  },
  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://2ebef9a7009a4b41bb41ce6792ef0056@o513944.ingest.sentry.io/5616560",
      },
    },
  ],
};
