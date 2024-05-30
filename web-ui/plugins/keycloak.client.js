import Keycloak from 'keycloak-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const keycloak = new Keycloak({
    url: config.public.KEYCLOAK_URL,
    realm: config.public.KEYCLOAK_REALM,
    clientId: config.public.KEYCLOAK_CLIENT_ID
  })
  keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
    if (!authenticated) {
      console.log("Not authenticated, reloading...")
      window.location.reload()
    } else {
      console.log("Authenticated")
      nuxtApp.provide('keycloak', keycloak)
    }
  }).catch(() => {
    console.error("Authentication Failed")
  })
})

