export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Netomia",
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        {
          name: "description",
          content: "Netomia is a place for people who are serious about AI and want challenge, depth, and real understanding.",
        },
        { name: "theme-color", content: "#171819" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Netomia" },
        { property: "og:title", content: "Netomia" },
        {
          property: "og:description",
          content: "Learning should be hard. Netomia is for people who want challenge, depth, and real understanding in AI.",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Netomia" },
        {
          name: "twitter:description",
          content: "Learning should be hard. Netomia is for people who want challenge, depth, and real understanding in AI.",
        },
      ],
    },
  },
  runtimeConfig: {
    waitlistProviderUrl: process.env.WAITLIST_PROVIDER_URL || "",
  },
})
