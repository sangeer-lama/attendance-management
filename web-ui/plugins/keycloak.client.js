import Keycloak from 'keycloak-js';

let keycloakInstance =null;

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  const router = useRouter()


  if (!keycloakInstance) {
    keycloakInstance = new Keycloak({
      url: config.KEYCLOAK_URL,
      realm: config.KEYCLOAK_REALM,
      clientId: config.KEYCLOAK_CLIENT_ID,
    });

    keycloakInstance.init({ onLoad: 'login-required' })
      .then(authenticated => {
        if (authenticated) {
          console.log("Authenticated");
          router.push('/user')
        } else {
          console.log("Not authenticated, reloading...");
          keycloakInstance.login();
        }
        return authenticated;
      })
      .catch(error => {
        console.error("Authentication Failed", error);
      });
  }
  nuxtApp.provide('keycloak', keycloakInstance);
});