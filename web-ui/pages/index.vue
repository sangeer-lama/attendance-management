<template>
  <div>
    <h1>Welcome to Nuxt with Keycloak</h1>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-else-if="!isAuthenticated">
      <p>Redirecting to login page...</p>
    </template>
    <template v-else>
      <p>Welcome, {{ keycloak.tokenParsed?.preferred_username }}</p>
      <!-- Your content after successful authentication -->
    </template>
  </div>
</template>

<script setup>
import { useNuxtApp, onMounted, ref } from '#imports'
import { nextTick } from 'vue';
// import {keycloak}

const { $keycloak, $axios } = useNuxtApp()

const isLoading = ref(true)
const isAuthenticated = ref(false)

// onMounted(async () => {
//   try {
//     await nextTick();
//     await $keycloak.init({ onLoad: 'login-required' })
//     console.log("Keycloak initialized successfully")
//     isAuthenticated.value = $keycloak.authenticated
//     isLoading.value = false // Set loading state to false after initialization
//   } catch (error) {
//     console.error("Authentication Failed")
//     console.log($keycloak);
//     isLoading.value = false // Set loading state to false if initialization fails
//   }
// })

const initializeKeycloak = async () => {
  try {
    console.log("initializing keycloak")
    console.log("keycloak check ----- ", $keycloak)
    await $keycloak.init({ onLoad: 'login-required' })
    console.log("Keycloak initialized successfully")
    isAuthenticated.value = $keycloak.authenticated
    console.log("isAuthentication", isAuthenticated)
    isLoading.value = false // Set loading state to false after initialization
  } catch (error) {
    console.error("Authentication Failed")
    console.log($keycloak)
    isLoading.value = false // Set loading state to false if initialization fails
  }
}
onMounted(async () => {
  const keycloak = $keycloak
  console.log("Keycloak object:", keycloak)
  await initializeKeycloak()
})
</script>
