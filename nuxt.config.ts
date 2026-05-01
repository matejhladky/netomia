export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  runtimeConfig: {
    waitlistProviderUrl: process.env.WAITLIST_PROVIDER_URL || "",
  },
})
