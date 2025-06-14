import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from '@sentry/react-router';

const sentryConfig: SentryReactRouterBuildOptions = {
  org: 'faisal-px',
  project: 'travel-agency',
  // An auth token is required for uploading source maps.
  authToken:
    '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',
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],

    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
