// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000', // Your API base URL
      KEYCLOAK_URL: process.env.KEYCLOAK_URL,
      KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
      KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
    }
  },
  plugins: [{
    src: './plugins/keycloak.client.js', mode: 'client'
  },
  { src: './plugins/axios.js', mode: 'client' }],
  // plugins : ['~/plugins/keycloak.client.js','~/plugins/axios.js']
})

// auth: {
//   strategies: {
//     local: false,
//     keycloak: {
//       scheme: "oauth2",
//       endpoints: {
//         authorization:
//           "localhost:3000/auth/realms/testRealm/protocol/openid-connect/auth",
//         token:
//           "localhost:3000/auth/realms/testRealm/protocol/openid-connect/token",
//         userInfo:
//           "localhost:3000/auth/realms/testRealm/protocol/openid-connect/userinfo",
//         logout:
//           "localhost:3000/auth/realms/testRealm/protocol/openid-connect/logout?redirect_uri=" +
//           encodeURIComponent("http://localhost:3000/home"),
//       },
//       token: {
//         property: "access_token",
//         type: "Bearer",
//         name: "Authorization",
//         maxAge: 300,
//       },
//       refreshToken: {
//         property: "refresh_token",
//         maxAge: 60 * 60 * 24 * 30,
//       },
//       responseType: "code",
//       grantType: "authorization_code",
//       clientId: "test-client",
//       scope: ["openid", "profile", "email"],
//       codeChallengeMethod: "S256",
//     },
//   },
//   redirect: {
//     login: "/home",
//     // logout: "/login",
//     home: "/",
//   },
// },
