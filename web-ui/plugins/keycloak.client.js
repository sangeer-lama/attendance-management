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
          // Store token in local storage for easier access
          localStorage.setItem('keycloak_token', keycloakInstance.token);
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

      //Token refresh 
      keycloakInstance.onTokenExpired = () =>{
        keycloakInstance.updateToken(30).then((refreshed) =>{
          if(refreshed){
            console.log('Token refresh');
            localStorage.setItem('keycloak_token', keycloakInstance.token);
          }
          else{
            console.log('Token not refreshed, loggin in. ..... ');
            keycloakInstance.login();
          }
        }).catch(error =>{
          console.log('Failed to refresh token',error);
        })
      }
  }
  nuxtApp.provide('keycloak', keycloakInstance);
});