<template>
  <div>
    <h1>Welcome to Nuxt with Keycloak</h1>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-else>
      <p>Welcome, {{ keycloak.tokenParsed?.preferred_username }}</p>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#imports';

const isLoading = ref(true);
const isAuthenticated = ref(false);
const keycloak = ref(null);

const initializeKeycloak = async () => {
  try {
    const { $keycloak } = useNuxtApp();
    if (!$keycloak) {
      throw new Error('Keycloak instance not found');
    }
    keycloak.value = $keycloak;

    console.log("Before checking if authenticated or not ",keycloak.value);
    // if (!keycloak.value.authenticated) {
    //   await keycloak.value.init({ onLoad: 'login-required' });
    // }
    // isAuthenticated.value = keycloak.value.authenticated;
    // console.log(isAuthenticated.value);
  } catch (error) {
    console.error("Authentication Failed ------", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await initializeKeycloak();
});
</script>
