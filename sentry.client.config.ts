import * as Sentry from "@sentry/nuxt";

const runtimeConfig = useRuntimeConfig();
Sentry.init({
  dsn: runtimeConfig.public.sentrydsn,
  environment: runtimeConfig.public.environment ?? "development",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});