import * as Sentry from '@sentry/react-router';

Sentry.init({
  dsn: 'https://05559a5598018b26e1c833cce88f37d2@o4509485822246912.ingest.de.sentry.io/4509485829718096',

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
