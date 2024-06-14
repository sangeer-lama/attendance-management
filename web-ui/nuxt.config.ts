// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      KEYCLOAK_URL: process.env.KEYCLOAK_URL,
      KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
      KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
      KEYCLOAK_CLIENT_SECRET: process.env.KEYCLOAK_CLIENT_SECRET,
    }
  },
  plugins: [
    { src: './plugins/keycloak.client.js', mode: 'client' },
    { src: './plugins/axios.js', mode: 'client' }],
})
